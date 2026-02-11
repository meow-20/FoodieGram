const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected successfully : foodiegram");
    })
    .catch((err) => {
      console.error("Error during the connection: ", err);
    });
}

module.exports = connectDB;
