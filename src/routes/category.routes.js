const express = require("express");
const router = express.Router();
const { addCategory } = require("../controllers/category.controllers.js");

router.post("/add", addCategory);

module.exports = router;
