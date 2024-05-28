const express = require("express");
const router = express.Router();

const userSignUpController = require("../controllers/userSignUp");
router.post("/signup", userSignUpController);
module.exports = router;
