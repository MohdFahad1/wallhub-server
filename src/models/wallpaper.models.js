const mongoose = require("mongoose");

const wallpaperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Wallpaper = mongoose.model("Wallpaper", wallpaperSchema);

module.exports = Wallpaper;
