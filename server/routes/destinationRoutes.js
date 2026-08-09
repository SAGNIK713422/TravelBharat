const express = require("express");
const Destination = require("../models/Destination");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET all destinations
// Public route
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find().sort({
      createdAt: -1,
    });

    res.json(destinations);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch destinations",
      error: error.message,
    });
  }
});

// GET one destination
// Public route
router.get("/:id", async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.json(destination);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch destination",
      error: error.message,
    });
  }
});

// ADD destination
// Protected route
router.post("/", authMiddleware, async (req, res) => {
  try {
    const destination = new Destination(req.body);

    const savedDestination = await destination.save();

    res.status(201).json(savedDestination);
  } catch (error) {
    res.status(400).json({
      message: "Failed to add destination",
      error: error.message,
    });
  }
});

// UPDATE destination
// Protected route
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    console.log("UPDATE BODY:", req.body);

    const updatedDestination =
      await Destination.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          state: req.body.state,
          city: req.body.city,
          category: req.body.category,
          description: req.body.description,
          historicalSignificance:
            req.body.historicalSignificance || "",
          image: req.body.image,

          images: Array.isArray(req.body.images)
            ? req.body.images
            : [],

          location: req.body.location || "",

          bestTime: req.body.bestTime || "",

          fee: req.body.fee || "",
          timings: req.body.timings || "",

          nearby: Array.isArray(req.body.nearby)
            ? req.body.nearby
            : [],
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedDestination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.json(updatedDestination);
  } catch (error) {
    console.error("UPDATE ERROR:", error);

    res.status(400).json({
      message: "Failed to update destination",
      error: error.message,
    });
  }
});

// DELETE destination
// Protected route
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedDestination =
      await Destination.findByIdAndDelete(req.params.id);

    if (!deletedDestination) {
      return res.status(404).json({
        message: "Destination not found",
      });
    }

    res.json({
      message: "Destination deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete destination",
      error: error.message,
    });
  }
});

module.exports = router;
