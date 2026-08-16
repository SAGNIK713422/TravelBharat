require("dotenv").config();

const mongoose = require("mongoose");
const Destination = require("./models/Destination");

const destinations = [
  {
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    city: "Agra",
    category: "Heritage",
    bestTime: "October to March",
    fee: "₹50 for Indian visitors",
    timings: "6:00 AM - 6:30 PM",
    nearby: [
      "Agra Fort",
      "Mehtab Bagh",
      "Itmad-ud-Daulah's Tomb",
    ],
    description:
      "The Taj Mahal is a magnificent white marble monument built by Mughal emperor Shah Jahan. It is one of India's most famous heritage destinations.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Darjeeling",
    state: "West Bengal",
    city: "Darjeeling",
    category: "Nature",
    bestTime: "March to May and October to December",
    fee: "Varies by attraction",
    timings: "Depends on attraction",
    description:
      "Darjeeling is famous for Himalayan views, tea gardens, toy train journeys and beautiful mountain landscapes.",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Jaipur",
    state: "Rajasthan",
    city: "Jaipur",
    category: "Heritage",
    bestTime: "October to March",
    fee: "Varies by monument",
    timings: "Depends on monument",
    description:
      "Jaipur, the Pink City, is known for magnificent forts, palaces and the rich history of Rajasthan.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Munnar",
    state: "Kerala",
    city: "Munnar",
    category: "Nature",
    bestTime: "September to May",
    fee: "Varies",
    timings: "Depends on attraction",
    description:
      "Munnar is a beautiful hill station known for tea plantations, waterfalls and spectacular mountain scenery.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Golden Temple",
    state: "Punjab",
    city: "Amritsar",
    category: "Religious",
    bestTime: "October to March",
    fee: "Free entry",
    timings: "Open daily",
    description:
      "The Golden Temple is one of India's most important Sikh religious and cultural destinations.",
    image:
      "https://images.unsplash.com/photo-1588096296405-4b4c1b0e7a12?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Hampi",
    state: "Karnataka",
    city: "Hampi",
    category: "Heritage",
    bestTime: "October to February",
    fee: "Varies by monument",
    timings: "Depends on monument",
    description:
      "Hampi is a UNESCO World Heritage destination known for ancient temples, monuments and the ruins of the Vijayanagara Empire.",
    image:
      "https://images.unsplash.com/photo-1600100397608-f0100f4c2e6d?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Rishikesh",
    state: "Uttarakhand",
    city: "Rishikesh",
    category: "Adventure",
    bestTime: "September to November and March to May",
    fee: "Varies by activity",
    timings: "Depends on activity",
    description:
      "Rishikesh is known for river rafting, trekking, yoga and adventure activities surrounded by the Himalayas.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d7c1d3c3?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Konark Sun Temple",
    state: "Odisha",
    city: "Konark",
    category: "Heritage",
    bestTime: "October to March",
    fee: "Varies",
    timings: "Daytime",
    description:
      "The Konark Sun Temple is a UNESCO World Heritage Site famous for its magnificent stone architecture.",
    image:
      "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Gangtok",
    state: "Sikkim",
    city: "Gangtok",
    category: "Nature",
    bestTime: "March to June",
    fee: "Varies",
    timings: "Depends on attraction",
    description:
      "Gangtok is a scenic Himalayan city known for monasteries, mountain views and Sikkimese culture.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Meenakshi Amman Temple",
    state: "Tamil Nadu",
    city: "Madurai",
    category: "Religious",
    bestTime: "October to March",
    fee: "Usually free entry",
    timings: "5:00 AM - 10:00 PM",
    description:
      "The Meenakshi Amman Temple is famous for its colorful towers and magnificent Dravidian architecture.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Leh",
    state: "Ladakh",
    city: "Leh",
    category: "Adventure",
    bestTime: "May to September",
    fee: "Varies",
    timings: "Depends on attraction",
    description:
      "Leh is a spectacular Himalayan destination known for high-altitude landscapes, monasteries and adventure.",
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
  },

  {
    name: "Bodh Gaya",
    state: "Bihar",
    city: "Gaya",
    category: "Religious",
    bestTime: "October to March",
    fee: "Varies",
    timings: "Depends on temple",
    description:
      "Bodh Gaya is an important Buddhist pilgrimage destination associated with the enlightenment of Gautama Buddha.",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=80",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
  dbName: "travelbharat",
});

    console.log("MongoDB connected");

    for (const destination of destinations) {
      const existing = await Destination.findOne({
        name: destination.name,
      });

      if (existing) {
        console.log(`${destination.name} already exists`);
      } else {
        await Destination.create(destination);
        console.log(`${destination.name} added successfully`);
      }
    }

    await mongoose.connection.close();

    console.log("Database seeding completed");
  } catch (error) {
    console.error("Seeding error:", error);
  }
}

seedDatabase();
