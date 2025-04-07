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

module.exports = {
  addWallpaper,
};
