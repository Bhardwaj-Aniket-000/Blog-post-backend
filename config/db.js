require("dotenv").config();
const url = process.env.MONGO_URL;
const mongoose = require("mongoose");

mongoose.connect(url);
const db = mongoose.connection;

try {
  db.on("connected", () => {
    console.log("Database Connect Successfully");
  });
  db.on("disconnected", () => {
    console.log("Database is disConnected");
  });
  db.on("error", () => {
    console.log("Error fetched Successfully");
  });
} catch (error) {
  console.log("dataBase Error fetched", error);
}

module.exports = db;
