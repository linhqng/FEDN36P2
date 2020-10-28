var express = require("express");
const {
  register,
  login,
} = require("../controllers/authenController/authenController");
var router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
