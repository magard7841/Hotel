const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User Name Is Required"],
    },
    email: {
      type: String,
      required: [true, "Emial Is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password Is Required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: Number,
      required: [true, "Phone Number Is Required"],
    },
    userType: {
      type: String,
      required: [true, "User Type Required"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default: "https://www.shutterstock.com/search/default-user",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userModel);
