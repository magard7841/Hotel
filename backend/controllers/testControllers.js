const testUserController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      mesaage: "test user Data API",
    });
  } catch (error) {
    console.log("ERROR");
  }
};

module.exports = { testUserController };
