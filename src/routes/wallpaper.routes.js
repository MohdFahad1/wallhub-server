const express = require("express");
const { addWallpaper } = require("../controllers/wallpaper.controllers");
const router = express.Router();

router.post("/add", addWallpaper);

module.exports = router;
