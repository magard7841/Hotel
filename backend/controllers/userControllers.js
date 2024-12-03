//GET USER

const userModel = require("../models/userModel");

const getUserController = async (req, res) => {
  //   res.status(200).send("User Data Succesfully Fetched");
  //   console.log(req.body.id);
  try {
    const user = await userModel.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    //hide password
    user.password = undefined;

    //response
    res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get User API",
    });
  }
};

//update User
const updateUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.id });
    //validate
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not FOund",
      });
    }
    const { userName, address, phone } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone | (await user.save());
    res.status(200).send({
      success: true,
      message: "User Update Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update User API",
    });
  }
};

module.exports = { getUserController, updateUserController };
