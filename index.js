require("dotenv").config();
const express = require("express");
const cors = require("cors");
const categoryRoutes = require("./src/routes/category.routes.js");
const wallpaperRoutes = require("./src/routes/wallpaper.routes.js");
const app = express();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(cors());

// mongodb connection
const connectDB = require("./src/config/db.js");
connectDB();

// routes
app.get("/", (req, res) => {
  res.send("Welcome to WallHub api");
});
app.use("/api/categories", categoryRoutes);
app.use("/api/wallpapers", wallpaperRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
