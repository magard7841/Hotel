const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { userName, password, email, phone, address } = req.body;
    //validation
    if (!userName || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields/Details",
      });
    }
    //Check User
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Email Already Exist Plz Login ..",
      });
    }
    //Create New User

    const user = await userModel.create({
      userName,
      email,
      password,
      address,
      phone,
    });
    res.status(201).send({
      success: true,
      message: "Succesfully registred User",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

//login

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Both Email and Password",
      });
    }
    //usercheck
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Login Succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Login",
      error,
    });
  }
};

module.exports = { registerController, loginController };
