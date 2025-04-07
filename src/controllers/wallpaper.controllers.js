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
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    // category filter
    let query = {};
    const category = req.query.category;
    if (category) {
      query.category = category;
    }

    // search filter
    const searchValue = req.query.searchValue;
    if (searchValue) {
      query.name = { $regex: new RegExp(searchValue, "i") };
    }

    const wallpapers = await Wallpaper.find(query).skip(skip).limit(limit);

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
