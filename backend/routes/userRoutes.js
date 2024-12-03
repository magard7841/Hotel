const express = require("express");
const {
  getUserController,
  updateUserController,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//login
router.get("/getUser", authMiddleware, getUserController);
//update user

router.put("/updateUser", authMiddleware, updateUserController);

module.exports = router;
