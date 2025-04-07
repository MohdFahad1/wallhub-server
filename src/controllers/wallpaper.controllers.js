const Wallpaper = require("../models/wallpaper.models.js");

const addWallpaper = async (req, res) => {
  try {
    const { name, image, category } = req.body;

    if (!name || !image || !category) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the fields",
      });
    }

    const wallpaper = await Wallpaper.create({
      name,
      image,
      category,
    });

    wallpaper.save();

    return res.status(201).json({
      success: true,
      message: "Wallpaper Created Successfully",
      wallpaper,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getAllWallpapers = async (req, res) => {
  try {
    const wallpapers = await Wallpaper.find({});

    if (!wallpapers || wallpapers.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No wallpapers found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Wallpapers fetched successfully",
      wallpapers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  addWallpaper,
  getAllWallpapers,
};
