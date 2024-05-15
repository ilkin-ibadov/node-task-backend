const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    const user = users[0];
    const sanitizedUser = {
      firstname: user.firstname,
      lastname: user.lastname,
      photo: user.photo,
      about: user.about,
      email: user.email,
      phone: user.phone,
      socialMedia: user.socialMedia,
      experience: user.experience,
      skills: user.skills,
      cv: user.cv
    };
    
    res.json(sanitizedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
