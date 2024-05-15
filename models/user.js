const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  photo: { type: String, required: false },
  about: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  profilePicture: { type: String, required: false },
  socialMedia: { type: Array, required: false },
  experience: { type: Array, required: true },
  skills: { type: Array, required: true },
  cv: { type: String, required: true },
  passwordHash: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
