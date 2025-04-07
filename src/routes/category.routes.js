const express = require("express");
const router = express.Router();
const {
  addCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/category.controllers.js");

router.post("/add", addCategory);
router.get("/", getAllCategories);
router.delete("/delete/:id", deleteCategory);

module.exports = router;
