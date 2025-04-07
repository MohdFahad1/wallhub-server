require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const connectDB = require("./src/config/db.js");
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to WallHub api");
});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
