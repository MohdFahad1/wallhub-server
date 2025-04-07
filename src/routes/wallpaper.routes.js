const express = require("express");
const {
  addWallpaper,
  getAllWallpapers,
} = require("../controllers/wallpaper.controllers");
const router = express.Router();

router.post("/add", addWallpaper);
router.get("/", getAllWallpapers);

module.exports = router;
