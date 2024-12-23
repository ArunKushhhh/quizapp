const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  setid: { type: String, required: true, default: "SetA" },
  schoolName: { type: String, required: true },
  student: { type: String, required: true },
  category: { type: String, required: true },
  timeLeft: { type: Number, required: true, default: 2400 }, // Time in seconds, defaulting to 30 minutes
});

module.exports = mongoose.model("User", UserSchema);
