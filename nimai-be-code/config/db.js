const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOOB_URI);
    console.log("connection established");
  } catch (e) {
    console.log(e);
  }
}

module.exports = connectDB;
// export connectDb
