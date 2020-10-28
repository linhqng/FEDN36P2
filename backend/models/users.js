var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    lowercase: true,
    trim: true,
  },
  last_name: {
    type: String,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  },
  role: {
    type: String,
    default: "user",
  },
  phoneNumber: {
    type: String,
    lowercase: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
  },
  address: {
    type: String,
    trim: true,
  },
  birthDay:{
      type: Date,
  },
  status: {
    type: String,
    default: "active",
  },

  create_at: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  var user = this;
  if (!user.isModified("password")) return next();
  try {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (e) {
    return next(e);
  }
});
module.exports = mongoose.model("users", userSchema);
