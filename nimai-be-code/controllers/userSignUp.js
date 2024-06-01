const userModel = require("../models/userModel");
async function userSignUpController(req, res) {
  const { email, password, name } = req.body;
  try {
    const isExistingUser = await userModel.findOne({ email });
    if (isExistingUser) {
      throw new Error("User already exists");
    }
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }
    const userData = new userModel({ email, password, name });
    // you can directly pass req.body
    // if modified req.body
    // then use {...re.body, password: updatedPassword}
    const saveUser = await userData.save();
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created Successfully!",
    });
  } catch (err) {
    console.log("Error creating", err);
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
