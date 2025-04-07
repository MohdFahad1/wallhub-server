const Category = require("../models/category.models.js");

const addCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    if (!name || !image) {
      return res.status(400).json({
        success: false,
        message: "Please provide all the fields",
      });
    }

    const category = await Category.create({
      name,
      image,
    });

    category.save();

    return res.status(201).json({
      success: true,
      message: "Category Created Successfully",
      category,
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
  addCategory,
};
