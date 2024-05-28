const userModel = require("../models/userModel");
async function userSignUpController(req, res) {
  console.log("userSignUpController", req.body);
  const { email, password, name } = req.body;
  console.log("email, password, name ", email, password, name);
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
    console.log(userData, "vaish");
    // you can directly pass req.body
    // if modified req.body
    // then use {...re.body, password: updatedPassword}
    const saveUser = userData.save();
    // debugger;
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
