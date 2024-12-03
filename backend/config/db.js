const mongoose = require("mongoose");

//function mongo connection

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("DB Error", error.bgRed);
  }
};
module.exports = connectDb;
