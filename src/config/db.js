const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("Database Error: ", error.message);
  }
};

module.exports = connectDB;
