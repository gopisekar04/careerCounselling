const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.create(req.body);
    // await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.log("error");
    
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
