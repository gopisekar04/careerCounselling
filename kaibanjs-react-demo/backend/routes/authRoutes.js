const express = require("express");
const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.create(req.body);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.log("error");
    
    res.status(400).json({ error: error.message });
  }
});

//signin route
// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
      { id: user._id, email: user.email }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
  );
};

// Login Route
router.post("/signin", async (req, res) => {
  try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found!" });

      // Compare Password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: "Invalid credentials!" });

      // Generate Token
      const token = generateToken(user);

      res.status(200).json({ message: "Login successful!", token });
  } catch (error) {

      console.log(error);
      
      res.status(500).json({ error: "Server error!" });
  }
});




module.exports = router;
