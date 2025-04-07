const express = require("express");
const router = express.Router();
const {
  addCategory,
  getAllCategories,
} = require("../controllers/category.controllers.js");

router.post("/add", addCategory);
router.get("/", getAllCategories);

module.exports = router;
