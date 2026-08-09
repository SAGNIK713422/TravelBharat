const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Heritage", "Nature", "Religious", "Adventure"],
    },

    description: {
      type: String,
      required: true,
    },

    historicalSignificance: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      default: [],
    },

    bestTime: {
      type: String,
      default: "",
    },

    fee: {
      type: String,
      default: "",
    },

    timings: {
      type: String,
      default: "",
    },

    nearby: {
      type: [String],
      default: [],
    },

    location: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Destination", destinationSchema);
