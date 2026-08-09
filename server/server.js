require("dotenv").config();
console.log("JWT SECRET LOADED:", !!process.env.JWT_SECRET);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const destinationRoutes = require("./routes/destinationRoutes");
const adminRoutes = require("./routes/adminRoutes");
console.log("ADMIN ROUTES LOADED");

const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.use("/api/destinations", destinationRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "TravelBharat API is running",
  });
});

mongoose
.connect(process.env.MONGODB_URI)

  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(
        `TravelBharat server running on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(
      "MongoDB connection failed:",
      error
    );
  });
