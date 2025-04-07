const { log } = require("console");
const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to WallHub api");
});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
