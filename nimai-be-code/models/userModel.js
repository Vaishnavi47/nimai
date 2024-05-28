const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: "string",
    email: {
      type: "string",
      unique: true,
      required: true,
    },
    password: "string",
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
