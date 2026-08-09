const mongoose = require("mongoose");
const Destination = require("./models/Destination");

const updates = {
  "Bodh Gaya":
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahabodhi%20Temple%20-%20Bodh%20Gaya.jpg",

  "Konark Sun Temple":
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Konark%20Sun%20Temple%20frontview.jpg",


  "Rishikesh":
    "https://images.squarespace-cdn.com/content/v1/6487957c473a673b4a418c49/2d9cc68a-2cc9-460c-adb2-ef0f2bea647d/Rishikesh%2BRiver.jpeg",

  Hampi:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hampi%20Virupaksha%20Temple.jpg",

  "Golden Temple":
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Golden%20Temple%20-%20Amritsar%20India.jpg",
};

async function updateImages() {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/travelbharat"
    );

    console.log("MongoDB connected");

    for (const [name, image] of Object.entries(updates)) {
      const result = await Destination.updateOne(
        { name },
        { $set: { image } }
      );

      if (result.matchedCount === 1) {
        console.log(`${name} image updated`);
      } else {
        console.log(`${name} not found`);
      }
    }

    await mongoose.connection.close();

    console.log("Image update completed");
  } catch (error) {
    console.error("Error:", error);
  }
}

updateImages();
