require("dotenv").config();

const mongoose = require("mongoose");
const Destination = require("./models/Destination");

const LOCAL_DB = "mongodb://127.0.0.1:27017/travelbharat";

async function syncDestinations() {
  try {
    // 1. Connect to LOCAL MongoDB
    await mongoose.connect(LOCAL_DB);
    console.log("Connected to LOCAL MongoDB");

    const localDestinations = await Destination.find({}).lean();

    console.log(
      `Found ${localDestinations.length} destinations locally`
    );

    if (localDestinations.length === 0) {
      console.log("No local destinations found.");
      await mongoose.disconnect();
      return;
    }

    // 2. Disconnect from local
    await mongoose.disconnect();

    // 3. Connect to MongoDB Atlas
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "travelbharat",
    });

    console.log("Connected to ATLAS MongoDB");

    // 4. Update existing destinations or add new ones
    for (const destination of localDestinations) {
      const {
        _id,
        createdAt,
        updatedAt,
        __v,
        ...data
      } = destination;

      const result = await Destination.updateOne(
        { name: destination.name },
        { $set: data },
        { upsert: true }
      );

      if (result.upsertedCount > 0) {
        console.log(`ADDED: ${destination.name}`);
      } else if (result.modifiedCount > 0) {
        console.log(`UPDATED: ${destination.name}`);
      } else {
        console.log(`UNCHANGED: ${destination.name}`);
      }
    }

    console.log("================================");
    console.log("Destination sync completed!");
    console.log("================================");

    await mongoose.disconnect();
  } catch (error) {
    console.error("SYNC ERROR:", error);

    try {
      await mongoose.disconnect();
    } catch {}
  }
}

syncDestinations();
