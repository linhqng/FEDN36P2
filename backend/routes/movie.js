var express = require("express");
const {
  Create_movie,
  Upload_movie_photo,
} = require("../controllers/movieController/movieController");
var router = express.Router();
var auth = require("../middlewares/auth");
const upload = require("../middlewares/multer");
/* create movie */
router.post("/", auth.enhance, Create_movie);
//upload image
router.get("/photo/:id", upload("movies").single("file"), Upload_movie_photo);
module.exports = router;
