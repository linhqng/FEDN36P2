var userModel = require("../../models/users");
var jwtHelper = require("../../helpers/jwt_helper");
require("dotenv").config();
var bcrypt = require("bcrypt")
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;

exports.register = async (req, res, next) => {
  let user = req.body;
  //console.log(user);
  try {
    let checkEmail = await userModel.findOne({
      email: user.email,
    });
    if (checkEmail)
      return res.status(403).send({
        message: "Email already exist !",
      });
    if (user.role) {
      if (user.role !== "user")
        return res.status(403).json({
          message: "Role invalid !",
        });
    } else {
      const userTemp = new userModel({
        ...user,
      });

      let response = await userTemp.save();
      res.send({
        message: "Register success !",
        data: response,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "ERROR 500",
    });
  }
};

exports.login = async (req, res, next) => {
  let user = req.body;

  try {
    var checkEmail = await userModel.findOne({ email: user.email }).exec();
    if (checkEmail === null) {
      return res.status(404).send({
        message: "Not found email !",
      });
    } else {
      let isMatch = await bcrypt.compare(user.password, checkEmail.password);

      if (isMatch) {
        if (checkEmail.status === "disable")
          return res.status(403).send({
            message: "User is disable !",
          });
        let dataInToken = {
          id: checkEmail._id,
          email: checkEmail.email,
          role: checkEmail.role,
        };
        let accessToken = await jwtHelper.generateToken(
          dataInToken,
          accessTokenSecret,
          parseInt(accessTokenLife)
        );

        return res.status(200).send({
          message: "Login successfully !",
          accessToken: accessToken,
        });
      } else
        return res.status(403).send({
          message: "Password error !",
        });
    }
  } catch (E) {
    console.log(E);
    return res.status(500).send({
      message: "ERROR 500 !",
    });
  }
};
