var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authenRouter = require("./routes/auth");
var cors = require("cors");
var app = express();
var mongoose = require("mongoose");
app.use(cors());
require("dotenv").config();
const password = process.env.PASSWORD;



mongoose
  .connect(
    `mongodb+srv://thang:${password}@cluster0-q8vge.mongodb.net/SUN?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(Error, err.message);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/auth", authenRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
