const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("./models/Admin");

async function createAdmin() {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/travelbharat"
    );

    const hashedPassword = await bcrypt.hash(
      "sagnik@2005",
      10
    );

    const admin = new Admin({
      username: "sagnik",
      password: hashedPassword,
    });

    await admin.save();

    console.log("Admin created successfully!");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error creating admin:", error);
  }
}

createAdmin();
