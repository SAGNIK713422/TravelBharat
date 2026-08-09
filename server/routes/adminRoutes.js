const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");


const router = express.Router();
console.log("ADMIN ROUTE FILE LOADED");

router.get("/test", (req, res) => {
  res.json({
    message: "Admin route is working",
  });
});

router.post("/login", async (req, res) => {

  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign(
  { adminId: admin._id },
  process.env.JWT_SECRET,
  { expiresIn: "2h" }
);
console.log("JWT TOKEN CREATED:", !!token, "LENGTH:", token.length);

res.json({
  message: "Login successful",
  token,
});


  } catch (error) {
    console.error("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Login failed",
    });
  }
});
console.log(
  "ADMIN ROUTES:",
  router.stack.map((route) => route.route?.path)
);

module.exports = router;
