require("dotenv").config();

const mongoose = require("mongoose");
const Destination = require("./models/Destination");

/*
|--------------------------------------------------------------------------
| DESTINATIONS
|--------------------------------------------------------------------------
| Keep your destinations array here exactly in your existing order.
|
| Every destination should follow this structure:
|
| {
|   name: "",
|   state: "",
|   city: "",
|   category: "",
|   description: "",
|   historicalSignificance: "",
|   image: "",
|   images: [],
|   bestTime: "",
|   fee: "",
|   timings: "",
|   nearby: [],
|   location: ""
| }
|
|--------------------------------------------------------------------------
*/

const destinations = [

  // ============================================================
  // 1. WEST BENGAL
  // ============================================================

  {
    name: "Sri Mayapur Chandrodaya Mandir",
    state: "West Bengal",
    city: "Mayapur",
    category: "Religious",

    description:
      "Sri Mayapur Chandrodaya Mandir is a major spiritual and cultural destination in Mayapur, West Bengal, known for its devotional atmosphere, beautiful temple complex and connection with the Gaudiya Vaishnava tradition.",

    historicalSignificance:
      "Mayapur is traditionally regarded as the birthplace of Sri Chaitanya Mahaprabhu and is an important center of the Gaudiya Vaishnava tradition. The Chandrodaya Mandir is a major spiritual landmark associated with ISKCON's international activities.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free entry; some attractions may have separate charges",

    timings: "Varies by temple and daily program",

    nearby: [
      "ISKCON Mayapur",
      "Yogapith",
      "Sri Chaitanya Saraswat Math",
      "Nabadwip"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Sri+Mayapur+Chandrodaya+Mandir+Mayapur+West+Bengal"
  },

  {
    name: "Sundarbans National Park",
    state: "West Bengal",
    city: "Gosaba",
    category: "Nature",

    description:
      "Sundarbans National Park is a unique mangrove forest famous for its rich biodiversity, waterways and Bengal tiger habitat.",

    historicalSignificance:
      "The Sundarbans is part of the world's largest mangrove forest and has long been an important ecological region of eastern India.",

    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by permit and tour",

    timings: "Depends on safari and boat schedule",

    nearby: [
      "Sajnekhali Wildlife Sanctuary",
      "Sudhanyakhali Watch Tower",
      "Dobanki Watch Tower"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Sundarbans+National+Park+West+Bengal"
  },
{
    name: "Digha",
    state: "West Bengal",
    city: "Digha",
    category: "Nature",

    description:
      "Digha is a popular seaside destination in West Bengal known for its long beaches, coastal scenery and relaxing atmosphere.",

    historicalSignificance:
      "Digha has developed into one of West Bengal's best-known coastal tourist destinations and has been a popular beach retreat for decades.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No entry fee for the beach",

    timings: "Open throughout the day",

    nearby: [
      "New Digha Beach",
      "Digha Science Centre",
      "Shankarpur Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Digha+West+Bengal"
  },

  {
    name: "Shantiniketan",
    state: "West Bengal",
    city: "Bolpur",
    category: "Heritage",

    description:
      "Shantiniketan is a cultural destination associated with Rabindranath Tagore, known for its artistic traditions, peaceful surroundings and Visva-Bharati campus.",

    historicalSignificance:
      "Shantiniketan was developed by Rabindranath Tagore and became an important centre of education, literature, art and culture.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Varies by attraction",

    nearby: [
      "Visva-Bharati University",
      "Rabindra Bhavana",
      "Sonajhuri Haat"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Shantiniketan+Bolpur+West+Bengal"
  },

  {
    name: "Murshidabad",
    state: "West Bengal",
    city: "Murshidabad",
    category: "Heritage",

    description:
      "Murshidabad is a historic city known for grand palaces, mosques, gardens and monuments connected with the history of Bengal.",

    historicalSignificance:
      "Murshidabad served as an important capital of Bengal during the eighteenth century and played a major role in the political history of eastern India.",

    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by monument",

    timings: "Varies by attraction",

    nearby: [
      "Hazarduari Palace",
      "Katra Mosque",
      "Nizamat Imambara"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Murshidabad+West+Bengal"
  },

  {
    name: "Bakkhali",
    state: "West Bengal",
    city: "Bakkhali",
    category: "Nature",

    description:
      "Bakkhali is a peaceful coastal destination known for its wide beach, sea views and tranquil surroundings.",

    historicalSignificance:
      "Bakkhali has developed as a quiet coastal tourist destination and is part of the southern coastal region of West Bengal.",

    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No entry fee for the beach",

    timings: "Open throughout the day",

    nearby: [
      "Fraserganj",
      "Henry's Island",
      "Bakkhali Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bakkhali+West+Bengal"
  },

  {
    name: "Kalimpong",
    state: "West Bengal",
    city: "Kalimpong",
    category: "Nature",

    description:
      "Kalimpong is a scenic hill town known for mountain views, monasteries, colonial architecture and peaceful landscapes.",

    historicalSignificance:
      "Kalimpong developed as an important trading centre between the Himalayan region and the plains and later became a popular hill destination.",

    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to May and October to December",

    fee: "Varies by attraction",

    timings: "Varies by attraction",

    nearby: [
      "Deolo Hill",
      "Durpin Monastery",
      "Cactus Nursery"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kalimpong+West+Bengal"
  },

  {
    name: "Lepchajagat",
    state: "West Bengal",
    city: "Darjeeling",
    category: "Nature",

    description:
      "Lepchajagat is a quiet forest destination near Darjeeling surrounded by pine, oak and rhododendron forests.",

    historicalSignificance:
      "Lepchajagat is associated with the traditional Himalayan landscape of the Darjeeling region and has become known for its forest environment.",

    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to April",

    fee: "Varies by forest and accommodation",

    timings: "Open throughout the day",

    nearby: [
      "Jore Pokhari",
      "Mirik",
      "Darjeeling"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Lepchajagat+West+Bengal"
  },

  {
    name: "Rishop",
    state: "West Bengal",
    city: "Kalimpong",
    category: "Adventure",

    description:
      "Rishop is a small Himalayan village known for mountain views, forest trails and peaceful high-altitude surroundings.",

    historicalSignificance:
      "Rishop represents the traditional mountain settlements of the eastern Himalayas and has emerged as a popular nature and trekking destination.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to May and October to December",

    fee: "Varies by activity",

    timings: "Open throughout the day",

    nearby: [
      "Lava",
      "Neora Valley National Park",
      "Tiffin Dara"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Rishop+Kalimpong+West+Bengal"
  },

  {
    name: "Lava",
    state: "West Bengal",
    city: "Kalimpong",
    category: "Nature",

    description:
      "Lava is a beautiful Himalayan destination surrounded by dense forests and known as a gateway to Neora Valley.",

    historicalSignificance:
      "Lava has long been associated with the forested Himalayan landscape and is an important gateway for exploring the eastern Himalayan wilderness.",

    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to April",

    fee: "Varies by attraction",

    timings: "Varies by attraction",

    nearby: [
      "Neora Valley National Park",
      "Loleygaon",
      "Rishop"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Lava+Kalimpong+West+Bengal"
  },

  {
    name: "Loleygaon",
    state: "West Bengal",
    city: "Kalimpong",
    category: "Nature",

    description:
      "Loleygaon is a peaceful Himalayan village surrounded by forests and known for scenic mountain landscapes and nature walks.",

    historicalSignificance:
      "Loleygaon reflects the traditional forest settlements of the Kalimpong hills and has developed as a quiet eco-tourism destination.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by attraction",

    timings: "Open throughout the day",

    nearby: [
      "Canopy Walk",
      "Lava",
      "Neora Valley National Park"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Loleygaon+West+Bengal"
  },

  {
    name: "Mirik",
    state: "West Bengal",
    city: "Mirik",
    category: "Nature",

    description:
      "Mirik is a scenic hill town famous for its lake, tea gardens, pine forests and peaceful mountain surroundings.",

    historicalSignificance:
      "Mirik developed as a hill tourism destination in the Darjeeling region and became known for its lake and surrounding tea estates.",

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to May and October to December",

    fee: "Varies by attraction",

    timings: "Open throughout the day",

    nearby: [
      "Mirik Lake",
      "Bokar Monastery",
      "Sumendu Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Mirik+West+Bengal"
  },

  {
    name: "Jhargram",
    state: "West Bengal",
    city: "Jhargram",
    category: "Heritage",

    description:
      "Jhargram is a culturally rich destination surrounded by forests and known for its royal heritage and tribal traditions.",

    historicalSignificance:
      "Jhargram has a long history associated with the Jhargram Raj family and the cultural heritage of southwestern Bengal.",

    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Varies by attraction",

    nearby: [
      "Jhargram Palace",
      "Kendua",
      "Belpahari"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Jhargram+West+Bengal"
  },

  {
    name: "Bishnupur",
    state: "West Bengal",
    city: "Bishnupur",
    category: "Heritage",

    description:
      "Bishnupur is a historic town famous for terracotta temples, classical music traditions and distinctive Bengali architecture.",

    historicalSignificance:
      "Bishnupur was the capital of the Malla kingdom and became renowned for its terracotta temple architecture and cultural traditions.",

    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by monument",

    timings: "Varies by attraction",

    nearby: [
      "Rasmancha",
      "Madanmohan Temple",
      "Lalji Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bishnupur+West+Bengal"
  },

  {
    name: "Deoghar",
    state: "Jharkhand",
    city: "Deoghar",
    category: "Religious",

    description:
      "Deoghar is a major pilgrimage destination known for the sacred Baidyanath Temple and surrounding religious sites.",

    historicalSignificance:
      "Deoghar has been an important Hindu pilgrimage centre for centuries and is associated with the Jyotirlinga tradition.",

    image:
      "https://images.unsplash.com/photo-1604608672516-f1b9a5f9b7b9?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1604608672516-f1b9a5f9b7b9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1604608672516-f1b9a5f9b7b9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1604608672516-f1b9a5f9b7b9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1604608672516-f1b9a5f9b7b9?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No general entry fee for temple darshan",

    timings: "Varies by temple rituals",

    nearby: [
      "Baidyanath Temple",
      "Tapovan",
      "Trikuta Parvat"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Deoghar+Jharkhand"
  },

  {
    name: "Netarhat",
    state: "Jharkhand",
    city: "Netarhat",
    category: "Nature",

    description:
      "Netarhat is a scenic hill station known for forests, waterfalls, pleasant weather and beautiful sunrise and sunset views.",

    historicalSignificance:
      "Netarhat became a prominent hill retreat during the colonial period and is now known for its natural landscapes.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Open throughout the day",

    nearby: [
      "Magnolia Point",
      "Upper Ghaghri Falls",
      "Lower Ghaghri Falls"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Netarhat+Jharkhand"
  },

  {
    name: "Rajgir",
    state: "Bihar",
    city: "Rajgir",
    category: "Heritage",

    description:
      "Rajgir is an ancient city surrounded by hills and known for Buddhist, Jain and historical sites.",

    historicalSignificance:
      "Rajgir was an important ancient city associated with the Magadha kingdom and is closely connected with the lives of Buddha and Mahavira.",

    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Varies by attraction",

    nearby: [
      "Griddhakuta Hill",
      "Vishwa Shanti Stupa",
      "Venu Vana"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Rajgir+Bihar"
  },

  {
    name: "Nalanda",
    state: "Bihar",
    city: "Nalanda",
    category: "Heritage",

    description:
      "Nalanda is an ancient archaeological site famous for the remains of one of the world's earliest major residential universities.",

    historicalSignificance:
      "Nalanda Mahavihara was a renowned centre of Buddhist learning that attracted scholars and students from across Asia.",

    image:
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies for archaeological site entry",

    timings: "Varies by site",

    nearby: [
      "Nalanda Archaeological Museum",
      "Rajgir",
      "Xuanzang Memorial"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Nalanda+Bihar"
  },

  {
    name: "Matheran",
    state: "Maharashtra",
    city: "Matheran",
    category: "Nature",

    description:
      "Matheran is a scenic hill station known for forested landscapes, viewpoints and its vehicle-free environment.",

    historicalSignificance:
      "Matheran was developed as a hill retreat during the colonial period and became known for its cool climate and scenic surroundings.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by attraction and transport",

    timings: "Open throughout the day",

    nearby: [
      "Echo Point",
      "Panorama Point",
      "Louisa Point"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Matheran+Maharashtra"
  },

  {
    name: "Tarkarli",
    state: "Maharashtra",
    city: "Malvan",
    category: "Adventure",

    description:
      "Tarkarli is a coastal destination famous for clear waters, beaches, coral reefs and water sports.",

    historicalSignificance:
      "Tarkarli lies in the historic Konkan region and is located near the important coastal fort of Sindhudurg.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by water sport and attraction",

    timings: "Varies by activity",

    nearby: [
      "Sindhudurg Fort",
      "Malvan Beach",
      "Devbagh Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Tarkarli+Malvan+Maharashtra"
  },

  {
    name: "Dudhsagar Falls",
    state: "Goa",
    city: "Mollem",
    category: "Nature",

    description:
      "Dudhsagar Falls is a spectacular multi-tiered waterfall surrounded by lush forests in the Western Ghats.",

    historicalSignificance:
      "Dudhsagar is part of the rich Western Ghats landscape and has become one of Goa's most famous natural attractions.",

    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to January",

    fee: "Varies by permitted access and tour",

    timings: "Depends on forest and tour timings",

    nearby: [
      "Bhagwan Mahavir Wildlife Sanctuary",
      "Mollem National Park",
      "Tambdi Surla Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dudhsagar+Falls+Goa"
  },

  {
    name: "Vijayapura",
    state: "Karnataka",
    city: "Vijayapura",
    category: "Heritage",

    description:
      "Vijayapura is a historic city famous for grand Islamic architecture, domes, mosques and monumental heritage sites.",

    historicalSignificance:
      "Vijayapura was an important capital of the Adil Shahi dynasty and contains numerous monuments from the medieval Deccan period.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by monument",

    timings: "Varies by attraction",

    nearby: [
      "Gol Gumbaz",
      "Ibrahim Rauza",
      "Bara Kaman"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Vijayapura+Karnataka"
  },

  {
    name: "Dhanaulti",
    state: "Uttarakhand",
    city: "Dhanaulti",
    category: "Adventure",

    description:
      "Dhanaulti is a peaceful Himalayan hill destination surrounded by forests and known for nature walks, camping and mountain views.",

    historicalSignificance:
      "Dhanaulti developed as a quiet hill retreat in the Garhwal Himalayas and has become popular for eco-tourism and outdoor activities.",

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to December",

    fee: "Varies by activity",

    timings: "Open throughout the day",

    nearby: [
      "Eco Park",
      "Surkanda Devi Temple",
      "Kanatal"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dhanaulti+Uttarakhand"
  },

  {
    name: "Kanatal",
    state: "Uttarakhand",
    city: "Kanatal",
    category: "Adventure",

    description:
      "Kanatal is a quiet Himalayan destination known for forests, mountain views, camping and outdoor adventure activities.",

    historicalSignificance:
      "Kanatal is part of the traditional Garhwal Himalayan region and has developed as an eco-tourism and adventure destination.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to December",

    fee: "Varies by activity",

    timings: "Open throughout the day",

    nearby: [
      "Surkanda Devi Temple",
      "Dhanaulti",
      "Tehri Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kanatal+Uttarakhand"
  },

  {
    name: "Kheerganga",
    state: "Himachal Pradesh",
    city: "Kasol",
    category: "Adventure",

    description:
      "Kheerganga is a popular Himalayan trekking destination known for forest trails, mountain scenery and natural hot springs.",

    historicalSignificance:
      "Kheerganga is associated with local Himalayan traditions and mythology and has long been regarded as a significant mountain pilgrimage and trekking site.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "April to June and September to November",

    fee: "Varies by trek and local charges",

    timings: "Depends on trekking conditions",

    nearby: [
      "Kasol",
      "Manikaran",
      "Tosh"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kheerganga+Himachal+Pradesh"
  },
{
    name: "Kurseong",
    state: "West Bengal",
    city: "Kurseong",
    category: "Nature",

    description:
      "Kurseong is a peaceful hill station surrounded by tea gardens, forests and scenic mountain views, known for its pleasant climate and colonial charm.",

    historicalSignificance:
      "Kurseong developed as a hill station during the British period and became known for its tea estates, schools and colonial heritage.",

    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "No entry fee for the town; charges may apply at attractions",

    timings: "Open throughout the day",

    nearby: [
      "Eagle's Craig",
      "Dow Hill",
      "Makaibari Tea Estate"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kurseong+West+Bengal"
},

{
    name: "Kalimpong",
    state: "West Bengal",
    city: "Kalimpong",
    category: "Nature",

    description:
      "Kalimpong is a scenic Himalayan town known for its monasteries, flower nurseries, mountain views and peaceful surroundings.",

    historicalSignificance:
      "Kalimpong was an important trading center between India and Tibet and developed as a major hill station during the colonial era.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to May and October to December",

    fee: "Varies by attraction",

    timings: "Attraction timings vary",

    nearby: [
      "Deolo Hill",
      "Durpin Monastery",
      "Cactus Nursery"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kalimpong+West+Bengal"
},

{
    name: "Digha",
    state: "West Bengal",
    city: "Digha",
    category: "Nature",

    description:
      "Digha is a popular coastal destination famous for its beaches, sea views, seafood and relaxed seaside atmosphere.",

    historicalSignificance:
      "Digha developed as a prominent seaside resort during the twentieth century and became one of West Bengal's best-known coastal destinations.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "No entry fee for the beach",

    timings: "Open throughout the day",

    nearby: [
      "New Digha Beach",
      "Marine Aquarium",
      "Shankarpur Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Digha+West+Bengal"
},

{
    name: "Bakkhali",
    state: "West Bengal",
    city: "Bakkhali",
    category: "Nature",

    description:
      "Bakkhali is a quiet coastal destination known for its long beach, sea breeze, mangrove surroundings and peaceful atmosphere.",

    historicalSignificance:
      "Bakkhali developed as a coastal tourism destination and is associated with the unique landscape of southern West Bengal.",

    image:
      "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No entry fee for the beach",

    timings: "Open throughout the day",

    nearby: [
      "Fraserganj",
      "Henry's Island",
      "Jambu Dwip"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bakkhali+West+Bengal"
},

{
    name: "Bishnupur Rasmancha",
    state: "West Bengal",
    city: "Bishnupur",
    category: "Heritage",

    description:
      "Bishnupur Rasmancha is an iconic terracotta monument known for its distinctive architecture and connection with the region's Vaishnavite traditions.",

    historicalSignificance:
      "The Rasmancha was built by Malla king Hambir Malla Dev in the seventeenth century and is one of Bishnupur's most important historic monuments.",

    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Nominal entry fee may apply",

    timings: "6:00 AM - 6:00 PM",

    nearby: [
      "Jor Bangla Temple",
      "Madan Mohan Temple",
      "Shyam Rai Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Rasmancha+Bishnupur+West+Bengal"
},

{
    name: "Murshidabad",
    state: "West Bengal",
    city: "Murshidabad",
    category: "Heritage",

    description:
      "Murshidabad is a historic city famous for grand palaces, mosques, gardens and monuments associated with the Nawabs of Bengal.",

    historicalSignificance:
      "Murshidabad served as the capital of Bengal under the Nawabs and played an important role in the political and economic history of eighteenth-century India.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f0107e8a9f47?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f0107e8a9f47?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by monument",

    timings: "Monument timings vary",

    nearby: [
      "Hazarduari Palace",
      "Nizamat Imambara",
      "Katra Mosque"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Murshidabad+West+Bengal"
},

{
    name: "Cooch Behar Palace",
    state: "West Bengal",
    city: "Cooch Behar",
    category: "Heritage",

    description:
      "Cooch Behar Palace is a magnificent royal palace known for its European-inspired architecture, grand halls and historic significance.",

    historicalSignificance:
      "The palace was constructed in the late nineteenth century during the reign of Maharaja Nripendra Narayan of the Cooch Behar princely state.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Nominal entry fee may apply",

    timings: "10:00 AM - 5:00 PM",

    nearby: [
      "Madan Mohan Temple",
      "Sagar Dighi",
      "Baneshwar Shiva Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Cooch+Behar+Palace+West+Bengal"
},

{
    name: "Gorumara National Park",
    state: "West Bengal",
    city: "Lataguri",
    category: "Nature",

    description:
      "Gorumara National Park is a wildlife destination known for its rhinoceroses, elephants, forests and diverse birdlife.",

    historicalSignificance:
      "Gorumara was declared a national park in 1994 and has become an important protected area in the Dooars region.",

    image:
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to March",

    fee: "Varies by safari and permit",

    timings: "Depends on safari schedule",

    nearby: [
      "Chapramari Wildlife Sanctuary",
      "Jatraprasad Watch Tower",
      "Murti River"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Gorumara+National+Park+West+Bengal"
},

{
    name: "Lepchajagat",
    state: "West Bengal",
    city: "Lepchajagat",
    category: "Nature",

    description:
      "Lepchajagat is a quiet forest retreat near Darjeeling surrounded by pine forests, rhododendrons and Himalayan scenery.",

    historicalSignificance:
      "The area is associated with the traditional homeland and culture of the Lepcha community of the eastern Himalayas.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "No general entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Jorpokhri",
      "Ghoom",
      "Mirik"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Lepchajagat+West+Bengal"
},

{
    name: "Deoghar",
    state: "Jharkhand",
    city: "Deoghar",
    category: "Religious",

    description:
      "Deoghar is a major pilgrimage destination famous for the Baidyanath Jyotirlinga temple and its spiritual atmosphere.",

    historicalSignificance:
      "Deoghar has been an important Hindu pilgrimage center for centuries and is associated with one of the twelve Jyotirlingas of Lord Shiva.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No general entry fee for temple darshan; special services may have charges",

    timings: "Temple timings vary",

    nearby: [
      "Baba Baidyanath Temple",
      "Trikuta Parvat",
      "Tapovan"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Deoghar+Jharkhand"
},

{
    name: "Netarhat",
    state: "Jharkhand",
    city: "Netarhat",
    category: "Nature",

    description:
      "Netarhat is a scenic hill station known for dense forests, waterfalls, sunrise and sunset viewpoints.",

    historicalSignificance:
      "Netarhat developed as a hill retreat during the British period and became known for its pleasant climate and forest landscape.",

    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No general entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Magnolia Point",
      "Upper Ghaghri Falls",
      "Lower Ghaghri Falls"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Netarhat+Jharkhand"
},

{
    name: "Amarkantak",
    state: "Madhya Pradesh",
    city: "Amarkantak",
    category: "Religious",

    description:
      "Amarkantak is a sacred hill town known for its temples, forests and the origin of the Narmada River.",

    historicalSignificance:
      "Amarkantak has been a significant pilgrimage center for centuries and is traditionally regarded as the source of the Narmada River.",

    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No general entry fee",

    timings: "Temple timings vary",

    nearby: [
      "Narmada Udgam Temple",
      "Kapildhara Falls",
      "Dudh Dhara Falls"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Amarkantak+Madhya+Pradesh"
},

{
    name: "Omkareshwar",
    state: "Madhya Pradesh",
    city: "Omkareshwar",
    category: "Religious",

    description:
      "Omkareshwar is a sacred island town on the Narmada River, famous for its Shiva temple and spiritual significance.",

    historicalSignificance:
      "Omkareshwar is one of the twelve Jyotirlinga pilgrimage sites and has been an important Shaivite center for centuries.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No general entry fee; special services may have charges",

    timings: "Temple timings vary",

    nearby: [
      "Omkareshwar Temple",
      "Mamleshwar Temple",
      "Narmada River Ghats"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Omkareshwar+Madhya+Pradesh"
},

{
    name: "Bastar",
    state: "Chhattisgarh",
    city: "Jagdalpur",
    category: "Nature",

    description:
      "Bastar is a culturally rich region known for dense forests, waterfalls, tribal traditions and distinctive handicrafts.",

    historicalSignificance:
      "Bastar has a long history of tribal kingdoms and indigenous communities whose traditions continue to shape the region's cultural identity.",

    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Attraction timings vary",

    nearby: [
      "Chitradhara Waterfall",
      "Tirathgarh Waterfall",
      "Kanger Valley National Park"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bastar+Chhattisgarh"
},

{
    name: "Panchmarhi Caves",
    state: "Maharashtra",
    city: "Nashik",
    category: "Heritage",

    description:
      "Panchmarhi Caves are ancient rock-cut caves and archaeological remains associated with the historic landscape of the region.",

    historicalSignificance:
      "The caves and surrounding archaeological sites reflect the long cultural and religious history of the Deccan region.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by archaeological site",

    timings: "Site timings vary",

    nearby: [
      "Pandavleni Caves",
      "Sula Vineyards",
      "Trimbakeshwar Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Pandavleni+Caves+Nashik+Maharashtra"
},

{
    name: "Lonar Lake",
    state: "Maharashtra",
    city: "Lonar",
    category: "Nature",

    description:
      "Lonar Lake is a unique crater lake surrounded by forests and ancient temples, known for its unusual geological and ecological features.",

    historicalSignificance:
      "Lonar's crater was formed by a meteorite impact and has attracted scientific and historical interest for centuries.",

    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No general entry fee",

    timings: "Open during daylight hours",

    nearby: [
      "Daitya Sudan Temple",
      "Lonar Crater",
      "Gomukh Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Lonar+Lake+Maharashtra"
},

{
    name: "Alibaug",
    state: "Maharashtra",
    city: "Alibaug",
    category: "Nature",

    description:
      "Alibaug is a popular coastal getaway known for beaches, sea forts, coconut groves and scenic Arabian Sea views.",

    historicalSignificance:
      "Alibaug and its surrounding coastline have strong Maratha-era connections, particularly through the historic sea forts of the region.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to February",

    fee: "No entry fee for beaches; attraction fees may apply",

    timings: "Open throughout the day",

    nearby: [
      "Alibaug Beach",
      "Kolaba Fort",
      "Kihim Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Alibaug+Maharashtra"
},

{
    name: "Dharamshala",
    state: "Himachal Pradesh",
    city: "Dharamshala",
    category: "Adventure",

    description:
      "Dharamshala is a scenic Himalayan destination known for mountain landscapes, Tibetan culture, monasteries and trekking opportunities.",

    historicalSignificance:
      "Dharamshala developed as a hill station during the British period and later became an important center of Tibetan culture and Buddhism.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to November",

    fee: "Varies by attraction",

    timings: "Attraction timings vary",

    nearby: [
      "McLeod Ganj",
      "Bhagsu Waterfall",
      "Namgyal Monastery"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dharamshala+Himachal+Pradesh"
},

{
    name: "Kasol",
    state: "Himachal Pradesh",
    city: "Kasol",
    category: "Adventure",

    description:
      "Kasol is a picturesque Himalayan village on the Parvati River, popular for trekking, mountain scenery and peaceful riverside surroundings.",

    historicalSignificance:
      "Kasol developed as a small mountain settlement and has become an important base for exploring the Parvati Valley.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to November",

    fee: "No general entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Manikaran Sahib",
      "Tosh Village",
      "Malana Village"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kasol+Himachal+Pradesh"
},

{
    name: "Kasauli",
    state: "Himachal Pradesh",
    city: "Kasauli",
    category: "Nature",

    description:
      "Kasauli is a charming hill station surrounded by pine forests, colonial buildings and peaceful mountain landscapes.",

    historicalSignificance:
      "Kasauli was established as a British hill station in the nineteenth century and retains several colonial-era structures.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to November",

    fee: "No general entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Monkey Point",
      "Gilbert Trail",
      "Christ Church"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kasauli+Himachal+Pradesh"
},

{
    name: "Kutch",
    state: "Gujarat",
    city: "Bhuj",
    category: "Nature",

    description:
      "Kutch is a vast and culturally rich region known for the Great Rann of Kutch, traditional handicrafts, salt deserts and vibrant festivals.",

    historicalSignificance:
      "Kutch has a long history of trade, craftsmanship and cultural exchange and contains archaeological remains associated with the Indus Valley Civilization.",

    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to February",

    fee: "Varies by attraction and festival",

    timings: "Attraction timings vary",

    nearby: [
      "Great Rann of Kutch",
      "Kalo Dungar",
      "Mandvi Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kutch+Gujarat"
},

{
    name: "Dwarka",
    state: "Gujarat",
    city: "Dwarka",
    category: "Religious",

    description:
      "Dwarka is a major pilgrimage city on the Arabian Sea, famous for the Dwarkadhish Temple, coastal scenery and ancient traditions.",

    historicalSignificance:
      "Dwarka is traditionally associated with Lord Krishna and is one of the important pilgrimage destinations of Hinduism.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No general entry fee; special services may have charges",

    timings: "Temple timings vary",

    nearby: [
      "Dwarkadhish Temple",
      "Bet Dwarka",
      "Rukmini Devi Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dwarka+Gujarat"
},

{
    name: "Diu",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    city: "Diu",
    category: "Nature",

    description:
      "Diu is a beautiful coastal destination known for beaches, Portuguese-era architecture, historic forts and relaxed seaside surroundings.",

    historicalSignificance:
      "Diu was an important Portuguese colonial settlement for several centuries and retains significant Portuguese architectural heritage.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Attraction timings vary",

    nearby: [
      "Naida Caves",
      "St. Paul's Church",
      "Nagoa Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Diu+India"
},
{
  name: "Valparai",
  state: "Tamil Nadu",
  city: "Valparai",
  category: "Nature",

  description:
    "Valparai is a scenic hill station surrounded by tea and coffee plantations, dense forests and rich wildlife in the Anamalai Hills.",

  historicalSignificance:
    "Valparai developed as a plantation region during the colonial period and is now known for its forests, plantations and wildlife habitats.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "September to March",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Sholayar Dam",
    "Aliyar Dam",
    "Anamalai Tiger Reserve"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Valparai+Tamil+Nadu"
},

{
  name: "Yelagiri",
  state: "Tamil Nadu",
  city: "Yelagiri",
  category: "Nature",

  description:
    "Yelagiri is a peaceful hill station known for green valleys, pleasant weather, trekking trails and scenic viewpoints.",

  historicalSignificance:
    "Yelagiri has a long history as a hill settlement and has developed into a popular destination for nature lovers and adventure enthusiasts.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "November to February",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Punganoor Lake",
    "Jalagamparai Waterfalls",
    "Swamimalai Hills"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Yelagiri+Tamil+Nadu"
},

{
  name: "Kolli Hills",
  state: "Tamil Nadu",
  city: "Namakkal",
  category: "Adventure",

  description:
    "Kolli Hills is a scenic mountain region famous for winding roads, waterfalls, viewpoints, forests and trekking opportunities.",

  historicalSignificance:
    "Kolli Hills has ancient cultural associations and is traditionally linked with the legendary ruler Valvil Ori.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "August to February",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Agaya Gangai Waterfalls",
    "Arappaleeswarar Temple",
    "Seekuparai Viewpoint"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Kolli+Hills+Tamil+Nadu"
},

{
  name: "Agumbe",
  state: "Karnataka",
  city: "Agumbe",
  category: "Nature",

  description:
    "Agumbe is a lush rainforest destination known for waterfalls, biodiversity, trekking trails and spectacular sunsets.",

  historicalSignificance:
    "Agumbe is an important rainforest region of the Western Ghats and has gained recognition for its ecological research and conservation work.",

  image:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to February",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Barkana Falls",
    "Kundadri Hills",
    "Sunset Point"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Agumbe+Karnataka"
},

{
  name: "Gandikota",
  state: "Andhra Pradesh",
  city: "Gandikota",
  category: "Heritage",

  description:
    "Gandikota is a historic destination famous for its dramatic canyon formed by the Pennar River and its ancient fort.",

  historicalSignificance:
    "Gandikota Fort was an important medieval stronghold and contains several historic structures within its fortified complex.",

  image:
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to February",

  fee: "Varies by attraction",

  timings: "Daytime hours",

  nearby: [
    "Gandikota Fort",
    "Pennar River Gorge",
    "Madhavaraya Temple"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Gandikota+Andhra+Pradesh"
},

{
  name: "Lepakshi",
  state: "Andhra Pradesh",
  city: "Lepakshi",
  category: "Heritage",

  description:
    "Lepakshi is a historic village famous for its magnificent temples, intricate stone carvings, murals and the giant Nandi statue.",

  historicalSignificance:
    "The Veerabhadra Temple at Lepakshi was built during the Vijayanagara period and is renowned for its architecture and sculptures.",

  image:
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to February",

  fee: "Free",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Veerabhadra Temple",
    "Lepakshi Nandi",
    "Jatayu Theme Park"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Lepakshi+Andhra+Pradesh"
},

{
  name: "Horsley Hills",
  state: "Andhra Pradesh",
  city: "Madanapalle",
  category: "Nature",

  description:
    "Horsley Hills is a tranquil hill station surrounded by forests and rocky landscapes, offering pleasant weather and scenic views.",

  historicalSignificance:
    "The hills were named after W.D. Horsley, a British-era administrator who developed the area as a summer retreat.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Horsley Hills Viewpoint",
    "Kalyani Tree",
    "Gangotri Lake"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Horsley+Hills+Andhra+Pradesh"
},

{
  name: "Kudremukh",
  state: "Karnataka",
  city: "Kudremukh",
  category: "Adventure",

  description:
    "Kudremukh is a spectacular mountain region known for rolling grasslands, dense forests, trekking trails and rich biodiversity.",

  historicalSignificance:
    "Kudremukh has been an important ecological region of the Western Ghats and is protected as a national park.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to February",

  fee: "Permit and trekking charges may apply",

  timings: "Depends on trekking permit",

  nearby: [
    "Kudremukh National Park",
    "Hanuman Gundi Falls",
    "Kalasa"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Kudremukh+Karnataka"
},

{
  name: "Munsiyari",
  state: "Uttarakhand",
  city: "Munsiyari",
  category: "Adventure",

  description:
    "Munsiyari is a Himalayan mountain town offering spectacular views of snow-covered peaks, trekking routes and alpine landscapes.",

  historicalSignificance:
    "Munsiyari has historically been an important trading and cultural gateway between the Kumaon Himalayas and Tibet.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Khaliya Top",
    "Birthi Falls",
    "Panchachuli Peaks"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Munsiyari+Uttarakhand"
},

{
  name: "Binsar",
  state: "Uttarakhand",
  city: "Almora",
  category: "Nature",

  description:
    "Binsar is a peaceful Himalayan forest destination known for oak and rhododendron forests and panoramic mountain views.",

  historicalSignificance:
    "Binsar was historically associated with the Chand rulers of Kumaon and later became a popular colonial-era hill retreat.",

  image:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Entry fee may apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Binsar Wildlife Sanctuary",
    "Zero Point",
    "Kasar Devi"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Binsar+Uttarakhand"
},

{
  name: "Auli",
  state: "Uttarakhand",
  city: "Joshimath",
  category: "Adventure",

  description:
    "Auli is a beautiful Himalayan destination famous for skiing, snow-covered slopes, panoramic mountain views and cable car rides.",

  historicalSignificance:
    "Auli has traditionally been associated with the pastoral communities of the Garhwal Himalayas and later developed as a major winter sports destination.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "December to March",

  fee: "Varies by activity and cable car",

  timings: "Depends on activity and cable car schedule",

  nearby: [
    "Gurso Bugyal",
    "Auli Ropeway",
    "Joshimath"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Auli+Uttarakhand"
},

{
  name: "Chakrata",
  state: "Uttarakhand",
  city: "Chakrata",
  category: "Nature",

  description:
    "Chakrata is a quiet Himalayan hill station surrounded by pine and deodar forests, waterfalls and scenic mountain landscapes.",

  historicalSignificance:
    "Chakrata was established as a British cantonment in the nineteenth century and retains its peaceful colonial-era character.",

  image:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Tiger Falls",
    "Deoban",
    "Chilmiri Neck"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Chakrata+Uttarakhand"
},

{
  name: "Khirsu",
  state: "Uttarakhand",
  city: "Pauri",
  category: "Nature",

  description:
    "Khirsu is a peaceful Himalayan village surrounded by oak and deodar forests with beautiful views of the Garhwal mountains.",

  historicalSignificance:
    "Khirsu is part of the traditional Garhwal region and has retained its cultural and rural Himalayan character.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Pauri",
    "Kandoliya Temple",
    "Jwalpa Devi Temple"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Khirsu+Uttarakhand"
},

{
  name: "Jibhi",
  state: "Himachal Pradesh",
  city: "Jibhi",
  category: "Nature",

  description:
    "Jibhi is a charming Himalayan village known for cedar forests, wooden houses, waterfalls and peaceful mountain surroundings.",

  historicalSignificance:
    "Jibhi reflects the traditional architecture and lifestyle of the Tirthan region of Himachal Pradesh.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Jibhi Waterfall",
    "Jalori Pass",
    "Serolsar Lake"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Jibhi+Himachal+Pradesh"
},

{
  name: "Barot Valley",
  state: "Himachal Pradesh",
  city: "Barot",
  category: "Adventure",

  description:
    "Barot Valley is a scenic mountain destination known for forests, rivers, trekking trails, fishing and peaceful Himalayan landscapes.",

  historicalSignificance:
    "Barot developed around a historic hydropower project and has traditionally been connected with the surrounding mountain communities.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by activity",

  timings: "Depends on activity",

  nearby: [
    "Uhl River",
    "Barot Dam",
    "Rajgundha Valley"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Barot+Valley+Himachal+Pradesh"
},

{
  name: "Kausani",
  state: "Uttarakhand",
  city: "Kausani",
  category: "Nature",

  description:
    "Kausani is a picturesque hill station famous for panoramic Himalayan views, pine forests, tea gardens and peaceful surroundings.",

  historicalSignificance:
    "Kausani became known as a Himalayan retreat and is also associated with Mahatma Gandhi's visit in 1929.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Anasakti Ashram",
    "Kausani Tea Estate",
    "Baijnath Temple"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Kausani+Uttarakhand"
},

{
  name: "Chandrashila",
  state: "Uttarakhand",
  city: "Rudraprayag",
  category: "Adventure",

  description:
    "Chandrashila is a spectacular Himalayan summit known for trekking, panoramic mountain views and its association with Tungnath Temple.",

  historicalSignificance:
    "Chandrashila is traditionally associated with the sacred Tungnath region and Hindu pilgrimage traditions of the Garhwal Himalayas.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "April to June and September to November",

  fee: "Trekking and accommodation charges vary",

  timings: "Daytime trekking recommended",

  nearby: [
    "Tungnath Temple",
    "Deoria Tal",
    "Chopta"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Chandrashila+Uttarakhand"
},

{
  name: "Pelling",
  state: "Sikkim",
  city: "Pelling",
  category: "Nature",

  description:
    "Pelling is a beautiful mountain destination offering stunning views of Kanchenjunga, monasteries, waterfalls and Himalayan valleys.",

  historicalSignificance:
    "Pelling is part of the traditional cultural landscape of Sikkim and has several important Buddhist monasteries in its surrounding region.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to May and October to December",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Pemayangtse Monastery",
    "Rabdentse Ruins",
    "Khecheopalri Lake"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Pelling+Sikkim"
},

{
  name: "Namchi",
  state: "Sikkim",
  city: "Namchi",
  category: "Religious",

  description:
    "Namchi is a scenic town in Sikkim known for large religious monuments, monasteries, gardens and panoramic mountain views.",

  historicalSignificance:
    "Namchi has developed as an important cultural and pilgrimage centre in southern Sikkim, featuring major Buddhist and Hindu religious sites.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to May and October to December",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Samdruptse Hill",
    "Char Dham",
    "Ngadak Monastery"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Namchi+Sikkim"
},

{
  name: "Tawang",
  state: "Arunachal Pradesh",
  city: "Tawang",
  category: "Religious",

  description:
    "Tawang is a spectacular Himalayan destination famous for its historic monastery, high-altitude landscapes, lakes and mountain passes.",

  historicalSignificance:
    "Tawang Monastery is one of the largest Buddhist monasteries in India and has played an important role in the spiritual and cultural history of the region.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to October",

  fee: "Entry and permit charges may apply",

  timings: "Depends on attraction and weather",

  nearby: [
    "Tawang Monastery",
    "Sela Pass",
    "Bum La Pass"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Tawang+Arunachal+Pradesh"
},
{
    name: "Kolli Hills",
    state: "Tamil Nadu",
    city: "Namakkal",
    category: "Nature",

    description:
      "Kolli Hills is a scenic mountain region known for misty landscapes, waterfalls, winding roads and lush green forests.",

    historicalSignificance:
      "Kolli Hills has been associated with ancient Tamil traditions and is mentioned in several classical Tamil literary works.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No major entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Agaya Gangai Waterfalls",
      "Siddhar Caves",
      "Seekuparai Viewpoint"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kolli+Hills+Tamil+Nadu"
},

{
    name: "Haflong",
    state: "Assam",
    city: "Haflong",
    category: "Nature",

    description:
      "Haflong is a peaceful hill station surrounded by green hills, lakes and scenic valleys in Assam.",

    historicalSignificance:
      "Haflong is an important cultural center of the Dima Hasao region and is home to diverse indigenous communities.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to April",

    fee: "No major entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Haflong Lake",
      "Jatinga",
      "Maibong"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Haflong+Assam"
},

{
    name: "Pelling",
    state: "Sikkim",
    city: "Pelling",
    category: "Nature",

    description:
      "Pelling is a beautiful Himalayan destination offering spectacular views of Kanchenjunga, monasteries and mountain landscapes.",

    historicalSignificance:
      "Pelling developed around important Buddhist monasteries and has long been connected with the cultural heritage of Sikkim.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to May and October to November",

    fee: "Varies by attraction",

    timings: "Depends on individual attraction",

    nearby: [
      "Pemayangtse Monastery",
      "Rabdentse Ruins",
      "Khecheopalri Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Pelling+Sikkim"
},

{
    name: "Dholavira",
    state: "Gujarat",
    city: "Khadir Bet",
    category: "Heritage",

    description:
      "Dholavira is an ancient archaeological site in the Rann of Kutch known for its remarkable Indus Valley Civilization ruins.",

    historicalSignificance:
      "Dholavira was one of the major urban settlements of the Indus Valley Civilization and flourished thousands of years ago.",

    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to February",

    fee: "Varies for Indian and foreign visitors",

    timings: "Sunrise to sunset",

    nearby: [
      "Rann of Kutch",
      "Khadir Bet",
      "Kala Dungar"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dholavira+Gujarat"
},

{
    name: "Chausath Yogini Temple",
    state: "Madhya Pradesh",
    city: "Bhedaghat",
    category: "Religious",

    description:
      "The Chausath Yogini Temple is an ancient hilltop temple offering panoramic views of the Narmada River and surrounding landscape.",

    historicalSignificance:
      "The temple is an important example of the Yogini temple tradition of medieval India and is dedicated to the sixty-four Yoginis.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Usually free",

    timings: "6:00 AM - 6:00 PM",

    nearby: [
      "Marble Rocks",
      "Dhuandhar Falls",
      "Narmada River"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Chausath+Yogini+Temple+Bhedaghat"
},

{
    name: "Kumbhalgarh Wildlife Sanctuary",
    state: "Rajasthan",
    city: "Kumbhalgarh",
    category: "Nature",

    description:
      "Kumbhalgarh Wildlife Sanctuary is a rugged forest reserve known for diverse wildlife, hills and scenic landscapes.",

    historicalSignificance:
      "The sanctuary surrounds the historic Kumbhalgarh region and forms part of the Aravalli landscape of Rajasthan.",

    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by safari and permit",

    timings: "6:00 AM - 6:00 PM",

    nearby: [
      "Kumbhalgarh Fort",
      "Ranakpur",
      "Haldighati"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kumbhalgarh+Wildlife+Sanctuary+Rajasthan"
},

{
    name: "Kinnaur",
    state: "Himachal Pradesh",
    city: "Reckong Peo",
    category: "Adventure",

    description:
      "Kinnaur is a spectacular Himalayan region known for high mountains, apple orchards, valleys and traditional villages.",

    historicalSignificance:
      "Kinnaur has a distinctive cultural heritage influenced by Himalayan Buddhist and Hindu traditions.",

    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "April to June and September to October",

    fee: "No general entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Kalpa",
      "Sangla Valley",
      "Chitkul"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kinnaur+Himachal+Pradesh"
},

{
    name: "Sangla Valley",
    state: "Himachal Pradesh",
    city: "Sangla",
    category: "Adventure",

    description:
      "Sangla Valley is a scenic Himalayan valley surrounded by snow-covered peaks, forests, rivers and traditional villages.",

    historicalSignificance:
      "The valley is part of the culturally rich Kinnaur region and has preserved traditional Himalayan architecture and customs.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "April to June and September to October",

    fee: "No general entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Chitkul",
      "Kamru Fort",
      "Rakcham"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Sangla+Valley+Himachal+Pradesh"
},

{
    name: "Chitradurga Fort",
    state: "Karnataka",
    city: "Chitradurga",
    category: "Heritage",

    description:
      "Chitradurga Fort is a massive historic fort complex famous for its multiple walls, gateways, temples and rocky surroundings.",

    historicalSignificance:
      "The fort was developed over several centuries and played an important role in the history of the Nayakas and later rulers of the region.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f0101c0c7a9b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f0101c0c7a9b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by entry rules",

    timings: "6:00 AM - 6:00 PM",

    nearby: [
      "Chandravalli Caves",
      "Hidimbeshwar Temple",
      "Vani Vilas Sagar Dam"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Chitradurga+Fort+Karnataka"
},

{
    name: "Yana Caves",
    state: "Karnataka",
    city: "Yana",
    category: "Adventure",

    description:
      "Yana Caves are famous for their dramatic black limestone rock formations surrounded by dense forests in the Western Ghats.",

    historicalSignificance:
      "Yana has strong religious associations and is connected with local legends surrounding the Bhairaveshwara and Mohini rock formations.",

    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Minimal or no major entry fee",

    timings: "6:00 AM - 6:00 PM",

    nearby: [
      "Vibhuti Falls",
      "Sirsi",
      "Kavala Caves"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Yana+Caves+Karnataka"
},

{
    name: "Kudremukh",
    state: "Karnataka",
    city: "Kudremukh",
    category: "Adventure",

    description:
      "Kudremukh is a lush mountain destination known for rolling grasslands, dense forests, waterfalls and trekking trails.",

    historicalSignificance:
      "The region has a long history of iron ore mining and is also culturally important to communities living around the Western Ghats.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by trekking permit",

    timings: "Daytime trekking hours",

    nearby: [
      "Kudremukh National Park",
      "Hanuman Gundi Falls",
      "Kalasa"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kudremukh+Karnataka"
},

{
    name: "Vijayawada",
    state: "Andhra Pradesh",
    city: "Vijayawada",
    category: "Religious",

    description:
      "Vijayawada is a major city on the Krishna River known for temples, historic sites, river landscapes and cultural attractions.",

    historicalSignificance:
      "Vijayawada has been an important settlement for centuries and has been associated with several South Indian dynasties and religious traditions.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by attraction",

    timings: "Depends on individual attraction",

    nearby: [
      "Kanaka Durga Temple",
      "Undavalli Caves",
      "Prakasam Barrage"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Vijayawada+Andhra+Pradesh"
},

{
    name: "Lepakshi",
    state: "Andhra Pradesh",
    city: "Lepakshi",
    category: "Heritage",

    description:
      "Lepakshi is a historic village famous for magnificent temple architecture, intricate sculptures and ancient paintings.",

    historicalSignificance:
      "The Veerabhadra Temple at Lepakshi was built during the Vijayanagara period and is celebrated for its architectural and artistic heritage.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Usually free",

    timings: "6:00 AM - 6:00 PM",

    nearby: [
      "Veerabhadra Temple",
      "Monolithic Nandi",
      "Jatayu Theme Park"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Lepakshi+Andhra+Pradesh"
},

{
    name: "Srisailam",
    state: "Andhra Pradesh",
    city: "Srisailam",
    category: "Religious",

    description:
      "Srisailam is a sacred destination surrounded by the Nallamala Hills and known for its ancient temple and scenic forests.",

    historicalSignificance:
      "Srisailam is one of the important Shaiva pilgrimage centers of India and has a long history associated with the Mallikarjuna Jyotirlinga.",

    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by attraction and special darshan",

    timings: "Temple timings vary",

    nearby: [
      "Mallikarjuna Temple",
      "Srisailam Dam",
      "Pathala Ganga"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Srisailam+Andhra+Pradesh"
},

{
    name: "Chandipur Beach",
    state: "Odisha",
    city: "Chandipur",
    category: "Nature",

    description:
      "Chandipur Beach is a unique coastal destination famous for its disappearing sea phenomenon and peaceful shoreline.",

    historicalSignificance:
      "The Chandipur region has long been associated with coastal communities and is also known for India's important missile testing facility nearby.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to February",

    fee: "No major beach entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Balaramgadi Beach",
      "Balasore",
      "Panchalingeswar"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Chandipur+Beach+Odisha"
},

{
    name: "Baranti",
    state: "West Bengal",
    city: "Purulia",
    category: "Nature",

    description:
      "Baranti is a peaceful lakeside destination surrounded by hills and forests, offering beautiful sunsets and rural landscapes.",

    historicalSignificance:
      "The region forms part of the cultural landscape of Purulia, which is known for tribal traditions, folk performances and rural heritage.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "No major entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Baranti Lake",
      "Garh Panchkot",
      "Joychandi Pahar"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Baranti+Purulia+West+Bengal"
},

{
    name: "Buxa Tiger Reserve",
    state: "West Bengal",
    city: "Alipurduar",
    category: "Nature",

    description:
      "Buxa Tiger Reserve is a forested Himalayan foothill region known for wildlife, dense forests, rivers and trekking trails.",

    historicalSignificance:
      "The region includes the historic Buxa Fort, which has played an important role in the political and colonial history of North Bengal.",

    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to April",

    fee: "Varies by permit and safari",

    timings: "Depends on forest entry schedule",

    nearby: [
      "Buxa Fort",
      "Jayanti",
      "Rajabhatkhawa"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Buxa+Tiger+Reserve+West+Bengal"
},

{
    name: "Talasari Beach",
    state: "Odisha",
    city: "Balasore",
    category: "Nature",

    description:
      "Talasari Beach is a tranquil coastal destination known for red crabs, palm trees, dunes and scenic views of the Bay of Bengal.",

    historicalSignificance:
      "Talasari is part of the traditional coastal landscape of northern Odisha and has long been connected with local fishing communities.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "No major entry fee",

    timings: "Open throughout the day",

    nearby: [
      "Udaipur Beach",
      "Chandipur Beach",
      "Digha"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Talasari+Beach+Odisha"
},

{
    name: "Bhimashankar",
    state: "Maharashtra",
    city: "Pune",
    category: "Religious",

    description:
      "Bhimashankar is a forested hill destination known for its ancient temple, wildlife sanctuary and scenic Western Ghats landscape.",

    historicalSignificance:
      "The Bhimashankar Temple is one of the twelve Jyotirlinga shrines dedicated to Lord Shiva and has a long religious history.",

    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by attraction",

    timings: "Temple timings vary",

    nearby: [
      "Bhimashankar Wildlife Sanctuary",
      "Gupt Bhimashankar",
      "Hanuman Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bhimashankar+Maharashtra"
},

{
    name: "Kaas Plateau",
    state: "Maharashtra",
    city: "Satara",
    category: "Nature",

    description:
      "Kaas Plateau is a spectacular highland famous for seasonal wildflowers, grasslands, lakes and unique biodiversity.",

    historicalSignificance:
      "The plateau forms part of the Western Ghats and has ecological importance due to its rare seasonal flowering ecosystem.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "August to October",

    fee: "Entry fee may apply during flowering season",

    timings: "7:00 AM - 6:00 PM",

    nearby: [
      "Kaas Lake",
      "Thoseghar Waterfalls",
      "Vajrai Waterfall"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kaas+Plateau+Maharashtra"
},

{
    name: "Korigad Fort",
    state: "Maharashtra",
    city: "Lonavala",
    category: "Adventure",

    description:
      "Korigad Fort is a historic hill fort surrounded by the Sahyadri Mountains and is popular for trekking and panoramic views.",

    historicalSignificance:
      "The fort is believed to have been built before the Maratha period and later became part of Chhatrapati Shivaji Maharaj's extensive fort network.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "June to February",

    fee: "Usually free",

    timings: "Daytime trekking hours",

    nearby: [
      "Pawna Lake",
      "Aamby Valley",
      "Lonavala"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Korigad+Fort+Maharashtra"
},

{
    name: "Gingee Fort",
    state: "Tamil Nadu",
    city: "Gingee",
    category: "Heritage",

    description:
      "Gingee Fort is a dramatic hill fort complex known for massive walls, rocky hills, temples and historic structures.",

    historicalSignificance:
      "Gingee Fort was an important stronghold of several South Indian powers and later came under Maratha, Mughal and European influence.",

    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by visitor category",

    timings: "8:00 AM - 5:30 PM",

    nearby: [
      "Rajagiri Fort",
      "Krishnagiri Fort",
      "Melacheri"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Gingee+Fort+Tamil+Nadu"
},

{
    name: "Sakleshpur",
    state: "Karnataka",
    city: "Sakleshpur",
    category: "Nature",

    description:
      "Sakleshpur is a green hill destination surrounded by coffee plantations, forests, waterfalls and misty Western Ghats landscapes.",

    historicalSignificance:
      "The region has a rich plantation history and is also connected with historic forts, temples and ancient trade routes through the Western Ghats.",

    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on individual attraction",

    nearby: [
      "Manjarabad Fort",
      "Bisle Ghat",
      "Jenukallu Gudda"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Sakleshpur+Karnataka"
},

{
    name: "Karkala",
    state: "Karnataka",
    city: "Karkala",
    category: "Heritage",

    description:
      "Karkala is a historic town known for Jain monuments, ancient temples and a remarkable monolithic statue of Bahubali.",

    historicalSignificance:
      "Karkala was an important Jain center under the Bhairava rulers and contains significant medieval Jain heritage.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Usually free",

    timings: "6:00 AM - 6:00 PM",

    nearby: [
      "Gomateshwara Statue",
      "Chaturmukha Basadi",
      "Anekere Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Karkala+Karnataka"
},
{
  name: "Udaipur",
  state: "Rajasthan",
  city: "Udaipur",
  category: "Heritage",

  description:
    "Udaipur is a beautiful city known for its lakes, grand palaces, historic architecture and scenic surroundings.",

  historicalSignificance:
    "Udaipur was founded in 1559 by Maharana Udai Singh II and served as the historic capital of the Mewar kingdom.",

  image:
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1602643163982-6e7b5c7c8e4a?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1582972236019-ea9e5e9b8d9c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1620211990317-7f4c6b1c6e0e?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Varies by attraction",

  timings: "Depends on the attraction",

  nearby: [
    "Lake Pichola",
    "City Palace",
    "Jag Mandir",
    "Saheliyon Ki Bari"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Udaipur+Rajasthan"
},

{
  name: "Ajmer Sharif Dargah",
  state: "Rajasthan",
  city: "Ajmer",
  category: "Religious",

  description:
    "Ajmer Sharif Dargah is a famous Sufi shrine dedicated to Khwaja Moinuddin Chishti and attracts visitors from across India.",

  historicalSignificance:
    "The shrine has been an important center of Sufi tradition for centuries and is one of the most revered pilgrimage sites in Rajasthan.",

  image:
    "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Free entry",

  timings: "5:00 AM - 9:00 PM",

  nearby: [
    "Ana Sagar Lake",
    "Adhai Din Ka Jhonpra",
    "Akbari Fort",
    "Pushkar"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Ajmer+Sharif+Dargah+Rajasthan"
},

{
  name: "Shillong",
  state: "Meghalaya",
  city: "Shillong",
  category: "Nature",

  description:
    "Shillong is a scenic hill station surrounded by green hills, waterfalls and beautiful landscapes, often called the Scotland of the East.",

  historicalSignificance:
    "Shillong became an important administrative center during the British period and later served as the capital of undivided Assam.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to April",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Umiam Lake",
    "Elephant Falls",
    "Shillong Peak",
    "Ward's Lake"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Shillong+Meghalaya"
},

{
  name: "Cherrapunji",
  state: "Meghalaya",
  city: "Sohra",
  category: "Nature",

  description:
    "Cherrapunji is a spectacular hill destination famous for heavy rainfall, waterfalls, caves and lush green landscapes.",

  historicalSignificance:
    "Cherrapunji, locally known as Sohra, has long been an important cultural and historical center of the Khasi people.",

  image:
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Nohkalikai Falls",
    "Mawsmai Cave",
    "Seven Sisters Falls",
    "Mawkdok Dympep Valley"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Cherrapunji+Meghalaya"
},

{
  name: "Pelling",
  state: "Sikkim",
  city: "Pelling",
  category: "Nature",

  description:
    "Pelling is a peaceful mountain destination offering spectacular views of the Himalayas, monasteries and green valleys.",

  historicalSignificance:
    "Pelling lies in the historic region of West Sikkim and has strong connections with the Buddhist heritage of the state.",

  image:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to May and October to December",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Pemayangtse Monastery",
    "Rabdentse Ruins",
    "Khecheopalri Lake",
    "Singshore Bridge"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Pelling+Sikkim"
},

{
  name: "Khajjiar",
  state: "Himachal Pradesh",
  city: "Khajjiar",
  category: "Nature",

  description:
    "Khajjiar is a beautiful hill destination surrounded by cedar forests and green meadows, often called the Mini Switzerland of India.",

  historicalSignificance:
    "Khajjiar has been associated with the historic Chamba region and is home to the ancient Khajji Nag Temple.",

  image:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by activity",

  timings: "Open throughout the day",

  nearby: [
    "Khajji Nag Temple",
    "Kalatope Wildlife Sanctuary",
    "Dainkund Peak",
    "Chamba"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Khajjiar+Himachal+Pradesh"
},

{
  name: "Dalhousie",
  state: "Himachal Pradesh",
  city: "Dalhousie",
  category: "Nature",

  description:
    "Dalhousie is a charming Himalayan hill station known for colonial architecture, pine forests and panoramic mountain views.",

  historicalSignificance:
    "Dalhousie was established by the British in 1854 as a summer retreat and retains several colonial-era buildings.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Panchpula",
    "Subhash Baoli",
    "Kalatop Wildlife Sanctuary",
    "Khajjiar"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Dalhousie+Himachal+Pradesh"
},

{
  name: "Shimla",
  state: "Himachal Pradesh",
  city: "Shimla",
  category: "Heritage",

  description:
    "Shimla is a famous Himalayan hill station known for colonial buildings, scenic mountains, shopping streets and pleasant weather.",

  historicalSignificance:
    "Shimla served as the summer capital of British India and became an important center of colonial administration.",

  image:
    "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and October to December",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "The Ridge",
    "Mall Road",
    "Jakhu Temple",
    "Christ Church"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Shimla+Himachal+Pradesh"
},

{
  name: "Manali",
  state: "Himachal Pradesh",
  city: "Manali",
  category: "Adventure",

  description:
    "Manali is a popular Himalayan destination known for snow-covered mountains, valleys, rivers and adventure activities.",

  historicalSignificance:
    "Manali lies along ancient Himalayan trade routes and is associated with the legend of Sage Manu.",

  image:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and October to February",

  fee: "Varies by activity",

  timings: "Depends on attraction",

  nearby: [
    "Solang Valley",
    "Old Manali",
    "Hadimba Temple",
    "Beas River"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Manali+Himachal+Pradesh"
},

{
  name: "Kullu",
  state: "Himachal Pradesh",
  city: "Kullu",
  category: "Adventure",

  description:
    "Kullu is a scenic Himalayan valley famous for apple orchards, rivers, temples and outdoor adventure activities.",

  historicalSignificance:
    "Kullu has a rich cultural heritage and is traditionally known as the Valley of Gods because of its many ancient temples.",

  image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by activity",

  timings: "Depends on attraction",

  nearby: [
    "Great Himalayan National Park",
    "Raghunath Temple",
    "Manikaran",
    "Kasol"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Kullu+Himachal+Pradesh"
},

{
  name: "Bir Billing",
  state: "Himachal Pradesh",
  city: "Bir",
  category: "Adventure",

  description:
    "Bir Billing is one of India's most popular destinations for paragliding and is surrounded by beautiful Himalayan landscapes.",

  historicalSignificance:
    "Bir has a long Tibetan Buddhist cultural connection and has developed into an important center for Himalayan adventure tourism.",

  image:
    "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Paragliding fees vary by operator",

  timings: "Depends on weather and activity",

  nearby: [
    "Billing",
    "Baijnath Temple",
    "Tashi Jong Monastery",
    "Palpung Sherabling Monastery"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Bir+Billing+Himachal+Pradesh"
},

{
  name: "Mussoorie",
  state: "Uttarakhand",
  city: "Mussoorie",
  category: "Nature",

  description:
    "Mussoorie is a picturesque hill station known for mountain views, waterfalls, colonial architecture and pleasant weather.",

  historicalSignificance:
    "Mussoorie developed as a British-era hill station during the nineteenth century and became a popular summer retreat.",

  image:
    "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Kempty Falls",
    "Gun Hill",
    "Lal Tibba",
    "Company Garden"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Mussoorie+Uttarakhand"
},

{
  name: "Lansdowne",
  state: "Uttarakhand",
  city: "Lansdowne",
  category: "Nature",

  description:
    "Lansdowne is a peaceful hill station surrounded by pine forests and mountains, offering a quiet escape from busy cities.",

  historicalSignificance:
    "Lansdowne was established as a British military cantonment in 1887 and remains associated with the Garhwal Rifles.",

  image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Tip-n-Top",
    "Bhulla Lake",
    "St. Mary's Church",
    "Garhwal Rifles Museum"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Lansdowne+Uttarakhand"
},

{
  name: "Ranikhet",
  state: "Uttarakhand",
  city: "Ranikhet",
  category: "Nature",

  description:
    "Ranikhet is a serene hill station known for pine forests, Himalayan views, peaceful surroundings and colonial-era heritage.",

  historicalSignificance:
    "Ranikhet became an important British cantonment during the colonial period and remains closely associated with the Kumaon Regiment.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Chaubatia Gardens",
    "Jhula Devi Temple",
    "Majhkhali",
    "Bhalu Dam"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Ranikhet+Uttarakhand"
},

{
  name: "Kausani",
  state: "Uttarakhand",
  city: "Kausani",
  category: "Nature",

  description:
    "Kausani is a scenic Himalayan hill station famous for panoramic views of snow-covered peaks and peaceful mountain surroundings.",

  historicalSignificance:
    "Kausani is historically associated with Mahatma Gandhi, who stayed here in 1929 and referred to the area for its natural beauty.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Anashakti Ashram",
    "Baijnath Temples",
    "Rudradhari Falls",
    "Kausani Tea Estate"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Kausani+Uttarakhand"
},

{
  name: "Pithoragarh",
  state: "Uttarakhand",
  city: "Pithoragarh",
  category: "Adventure",

  description:
    "Pithoragarh is a beautiful Himalayan destination surrounded by high mountains, valleys and scenic landscapes.",

  historicalSignificance:
    "Pithoragarh has been an important historical region of Kumaon and was influenced by several Himalayan kingdoms and trading routes.",

  image:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Pithoragarh Fort",
    "Chandak Hill",
    "Thal Kedar",
    "Munsiyari"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Pithoragarh+Uttarakhand"
},

{
  name: "Munsiyari",
  state: "Uttarakhand",
  city: "Munsiyari",
  category: "Adventure",

  description:
    "Munsiyari is a spectacular Himalayan destination known for trekking routes, snow-covered peaks and breathtaking mountain scenery.",

  historicalSignificance:
    "Munsiyari lies along historic trans-Himalayan trade routes and has long been connected with the Johar Valley communities.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "March to June and September to November",

  fee: "Varies by trekking route",

  timings: "Depends on activity and weather",

  nearby: [
    "Kalamuni Temple",
    "Khaliya Top",
    "Birthi Falls",
    "Nanda Devi Temple"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Munsiyari+Uttarakhand"
},

{
  name: "Sivasagar",
  state: "Assam",
  city: "Sivasagar",
  category: "Heritage",

  description:
    "Sivasagar is a historic town in Assam known for ancient Ahom monuments, temples, palaces and large historic tanks.",

  historicalSignificance:
    "Sivasagar was the capital of the Ahom Kingdom and contains several important monuments from the Ahom period.",

  image:
    "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to April",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Sivasagar Sivadol",
    "Rang Ghar",
    "Talatal Ghar",
    "Joysagar Tank"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Sivasagar+Assam"
},

{
  name: "Aizawl",
  state: "Mizoram",
  city: "Aizawl",
  category: "Nature",

  description:
    "Aizawl is the picturesque capital of Mizoram, surrounded by green hills and known for its unique culture and scenic landscapes.",

  historicalSignificance:
    "Aizawl developed as an important administrative center during the colonial period and later became the capital of Mizoram.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Durtlang Hills",
    "Mizoram State Museum",
    "Solomon's Temple",
    "Reiek"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Aizawl+Mizoram"
},

{
  name: "Kohima",
  state: "Nagaland",
  city: "Kohima",
  category: "Heritage",

  description:
    "Kohima is the scenic capital of Nagaland known for its Naga culture, mountain landscapes and historic sites.",

  historicalSignificance:
    "Kohima played an important role during the Second World War and was the site of the historic Battle of Kohima.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Kohima War Cemetery",
    "Kisama Heritage Village",
    "Naga Heritage Village",
    "Japfu Peak"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Kohima+Nagaland"
},

{
  name: "Mokokchung",
  state: "Nagaland",
  city: "Mokokchung",
  category: "Nature",

  description:
    "Mokokchung is a beautiful hill town in Nagaland known for its traditional Ao Naga culture, hills and peaceful surroundings.",

  historicalSignificance:
    "Mokokchung is the cultural heartland of the Ao Naga community and has a rich tradition of indigenous festivals and customs.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Varies by attraction",

  timings: "Depends on attraction",

  nearby: [
    "Longkhum Village",
    "Ungma Village",
    "Mokokchung Village",
    "Chuchuyimlang Village"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Mokokchung+Nagaland"
},

{
  name: "Sanchi Museum",
  state: "Madhya Pradesh",
  city: "Sanchi",
  category: "Heritage",

  description:
    "Sanchi Museum preserves sculptures, archaeological artifacts and historical remains associated with the ancient Buddhist site of Sanchi.",

  historicalSignificance:
    "The museum contains important archaeological discoveries from the Sanchi region, one of India's most significant Buddhist heritage areas.",

  image:
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Varies by museum and monument entry",

  timings: "10:00 AM - 5:00 PM",

  nearby: [
    "Sanchi Stupa",
    "Ashoka Pillar",
    "Udayagiri Caves",
    "Vidisha"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Sanchi+Museum+Madhya+Pradesh"
},

{
  name: "Ujjain",
  state: "Madhya Pradesh",
  city: "Ujjain",
  category: "Religious",

  description:
    "Ujjain is one of India's most important pilgrimage cities, famous for ancient temples and the sacred Shipra River.",

  historicalSignificance:
    "Ujjain is one of the ancient cities of India and has been an important center of religion, astronomy, education and trade for centuries.",

  image:
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Varies by attraction",

  timings: "Depends on temple",

  nearby: [
    "Mahakaleshwar Temple",
    "Kal Bhairav Temple",
    "Ram Ghat",
    "Vedh Shala"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Ujjain+Madhya+Pradesh"
},
{
    name: "Udaipur",
    state: "Rajasthan",
    city: "Udaipur",
    category: "Heritage",

    description:
      "Udaipur is a beautiful city of lakes famous for its magnificent palaces, historic architecture and scenic surroundings.",

    historicalSignificance:
      "Udaipur was founded in 1559 by Maharana Udai Singh II and became an important center of the Mewar kingdom.",

    image:
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590050752117-23a9d3e2a1a5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Lake Pichola",
      "City Palace",
      "Sajjangarh Palace",
      "Jagdish Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Udaipur+Rajasthan"
  },

  {
    name: "Ajmer Sharif Dargah",
    state: "Rajasthan",
    city: "Ajmer",
    category: "Religious",

    description:
      "Ajmer Sharif Dargah is a famous Sufi shrine dedicated to Khwaja Moinuddin Chishti and attracts visitors from across India.",

    historicalSignificance:
      "The shrine has been an important center of Sufi spirituality for centuries and is one of India's most visited religious sites.",

    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free entry",

    timings: "5:00 AM - 9:00 PM",

    nearby: [
      "Ana Sagar Lake",
      "Adhai Din Ka Jhonpra",
      "Akbari Fort",
      "Pushkar"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Ajmer+Sharif+Dargah+Rajasthan"
  },

  {
    name: "Udupi",
    state: "Karnataka",
    city: "Udupi",
    category: "Religious",

    description:
      "Udupi is a coastal town known for its historic temples, traditional cuisine, beaches and spiritual heritage.",

    historicalSignificance:
      "Udupi became an important center of the Dvaita Vedanta tradition through the teachings of Sri Madhvacharya.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f0101a1e2c8b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f0101a1e2c8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Sri Krishna Temple",
      "Malpe Beach",
      "St. Mary's Island",
      "Kaup Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Udupi+Karnataka"
  },

  {
    name: "Srisailam",
    state: "Andhra Pradesh",
    city: "Srisailam",
    category: "Religious",

    description:
      "Srisailam is a sacred destination surrounded by forests and hills, famous for the Mallikarjuna Jyotirlinga temple.",

    historicalSignificance:
      "Srisailam has been an important pilgrimage center for centuries and is associated with the Shaiva tradition.",

    image:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by attraction",

    timings: "6:00 AM - 10:00 PM",

    nearby: [
      "Mallikarjuna Temple",
      "Srisailam Dam",
      "Pathala Ganga",
      "Akka Mahadevi Caves"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Srisailam+Andhra+Pradesh"
  },

  {
    name: "Horsley Hills",
    state: "Andhra Pradesh",
    city: "Madanapalle",
    category: "Nature",

    description:
      "Horsley Hills is a peaceful hill station known for its pleasant climate, forested landscapes and panoramic mountain views.",

    historicalSignificance:
      "The hill station was named after W.D. Horsley, a British-era administrator associated with the development of the region.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Open throughout the day",

    nearby: [
      "Horsley Hills Viewpoint",
      "Mallamma Temple",
      "Kalyani Tree",
      "Kaigal Falls"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Horsley+Hills+Andhra+Pradesh"
  },

  {
    name: "Pelling",
    state: "Sikkim",
    city: "Pelling",
    category: "Nature",

    description:
      "Pelling is a scenic mountain destination offering spectacular views of the Himalayas, monasteries and peaceful valleys.",

    historicalSignificance:
      "Pelling developed as an important cultural and tourism center of western Sikkim, close to several historic monasteries.",

    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to May and October to December",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Pemayangtse Monastery",
      "Rabdentse Ruins",
      "Khecheopalri Lake",
      "Sky Walk"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Pelling+Sikkim"
  },

  {
    name: "Dooars Tiger Reserve",
    state: "West Bengal",
    city: "Alipurduar",
    category: "Nature",

    description:
      "Dooars Tiger Reserve is a forested Himalayan foothill region known for wildlife, rivers, grasslands and dense forests.",

    historicalSignificance:
      "The Dooars region has historically served as a gateway between Bhutan and the plains of Bengal.",

    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to April",

    fee: "Varies by safari and permit",

    timings: "Depends on safari schedule",

    nearby: [
      "Jaldapara National Park",
      "Buxa Tiger Reserve",
      "Jayanti",
      "Rajabhatkhawa"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dooars+Tiger+Reserve+West+Bengal"
  },

  {
    name: "Kangra Fort",
    state: "Himachal Pradesh",
    city: "Kangra",
    category: "Heritage",

    description:
      "Kangra Fort is a historic hill fort overlooking the Banganga and Manjhi rivers, surrounded by the Himalayan landscape.",

    historicalSignificance:
      "Kangra Fort is one of the oldest surviving hill forts in India and has been associated with the Katoch dynasty for centuries.",

    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to November",

    fee: "Varies by entry ticket",

    timings: "9:00 AM - 5:30 PM",

    nearby: [
      "Masroor Rock Temples",
      "Brajeshwari Devi Temple",
      "Dharamshala",
      "McLeod Ganj"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kangra+Fort+Himachal+Pradesh"
  },

  {
    name: "Chittorgarh",
    state: "Rajasthan",
    city: "Chittorgarh",
    category: "Heritage",

    description:
      "Chittorgarh is a historic city famous for its massive fort, Rajput heritage, temples and legendary stories of Mewar.",

    historicalSignificance:
      "Chittorgarh served as the capital of Mewar and witnessed several major events in Rajput history.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590050752117-23a9d3e2a1a5?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "9:30 AM - 5:00 PM",

    nearby: [
      "Chittorgarh Fort",
      "Vijay Stambh",
      "Kirti Stambh",
      "Rana Kumbha Palace"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Chittorgarh+Rajasthan"
  },

  {
    name: "Ranthambore Fort",
    state: "Rajasthan",
    city: "Sawai Madhopur",
    category: "Heritage",

    description:
      "Ranthambore Fort is a historic hill fort located within the Ranthambore landscape, surrounded by forests and wildlife.",

    historicalSignificance:
      "The fort has a long history associated with the Chauhan rulers and later Rajput and Mughal powers.",

    image:
      "https://images.unsplash.com/photo-1602643163986-7c5c2c4b7f8b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1602643163986-7c5c2c4b7f8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by entry and safari permit",

    timings: "Depends on fort and park timings",

    nearby: [
      "Ranthambore National Park",
      "Padam Lake",
      "Trinetra Ganesh Temple",
      "Surwal Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Ranthambore+Fort+Rajasthan"
  },

  {
    name: "Bhimashankar",
    state: "Maharashtra",
    city: "Pune",
    category: "Religious",

    description:
      "Bhimashankar is a sacred mountain destination known for the Bhimashankar Jyotirlinga temple and surrounding forests.",

    historicalSignificance:
      "Bhimashankar is one of the twelve Jyotirlinga pilgrimage sites and has long been associated with Shaivite traditions.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by attraction",

    timings: "5:00 AM - 9:30 PM",

    nearby: [
      "Bhimashankar Temple",
      "Bhimashankar Wildlife Sanctuary",
      "Hanuman Lake",
      "Gupt Bhimashankar"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bhimashankar+Maharashtra"
  },

  {
    name: "Panhala Fort",
    state: "Maharashtra",
    city: "Kolhapur",
    category: "Heritage",

    description:
      "Panhala Fort is a historic hill fort surrounded by lush green landscapes and known for its Maratha history.",

    historicalSignificance:
      "Panhala Fort played an important role during the rise of the Maratha Empire and was associated with Chhatrapati Shivaji Maharaj.",

    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Free entry",

    timings: "Open throughout the day",

    nearby: [
      "Sajja Kothi",
      "Teen Darwaza",
      "Ambabai Temple",
      "Kolhapur"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Panhala+Fort+Maharashtra"
  },

  {
    name: "Chandipur Beach",
    state: "Odisha",
    city: "Balasore",
    category: "Nature",

    description:
      "Chandipur Beach is a unique coastal destination famous for its dramatic tidal retreat and peaceful shoreline.",

    historicalSignificance:
      "Chandipur has been an important coastal location in Odisha and is also known for its proximity to India's missile testing facilities.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to February",

    fee: "Free entry",

    timings: "Open throughout the day",

    nearby: [
      "Balasore",
      "Panchalingeswar",
      "Balaramgadi Beach",
      "Nilagiri"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Chandipur+Beach+Odisha"
  },

  {
    name: "Sivasagar",
    state: "Assam",
    city: "Sivasagar",
    category: "Heritage",

    description:
      "Sivasagar is a historic town in Assam known for Ahom-era monuments, temples, palaces and large water bodies.",

    historicalSignificance:
      "Sivasagar was an important capital of the Ahom kingdom and contains several monuments from the Ahom period.",

    image:
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f0101a1e2c8b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to April",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Sivasagar Sivadol",
      "Rang Ghar",
      "Talatal Ghar",
      "Joy Sagar"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Sivasagar+Assam"
  },

  {
    name: "Dzukou Valley Viewpoint",
    state: "Nagaland",
    city: "Kohima",
    category: "Adventure",

    description:
      "Dzukou Valley is a spectacular mountain valley known for rolling green hills, seasonal flowers and trekking trails.",

    historicalSignificance:
      "The valley is deeply connected with the natural and cultural landscape of the Naga Hills and surrounding communities.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by permit and local guide",

    timings: "Daylight hours",

    nearby: [
      "Kisama Heritage Village",
      "Kohima",
      "Japfu Peak",
      "Khonoma Village"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dzukou+Valley+Nagaland"
  },

  {
    name: "Yumthang Valley",
    state: "Sikkim",
    city: "North Sikkim",
    category: "Nature",

    description:
      "Yumthang Valley is a breathtaking Himalayan valley famous for alpine flowers, rivers, mountain scenery and peaceful landscapes.",

    historicalSignificance:
      "Yumthang has traditionally been part of the high-altitude cultural and trade landscape of North Sikkim.",

    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "April to June and September to November",

    fee: "Permit required",

    timings: "Depends on local permit and road conditions",

    nearby: [
      "Zero Point",
      "Lachung",
      "Shingba Rhododendron Sanctuary",
      "Hot Springs"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Yumthang+Valley+Sikkim"
  },

  {
    name: "Mokokchung",
    state: "Nagaland",
    city: "Mokokchung",
    category: "Nature",

    description:
      "Mokokchung is a picturesque hill destination known for its scenic landscapes, Naga culture and traditional villages.",

    historicalSignificance:
      "Mokokchung is an important cultural center of the Ao Naga community and has played a significant role in the region's history.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Longkhum Village",
      "Ungma Village",
      "Mokokchung Town",
      "Chuchuyimlang Village"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Mokokchung+Nagaland"
  },

  {
    name: "Majorda Beach",
    state: "Goa",
    city: "Majorda",
    category: "Nature",

    description:
      "Majorda Beach is a peaceful coastal destination in Goa known for its sandy shoreline, palm trees and relaxed atmosphere.",

    historicalSignificance:
      "Majorda is part of Goa's historic coastal settlements and reflects the region's Portuguese-influenced cultural heritage.",

    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to February",

    fee: "Free entry",

    timings: "Open throughout the day",

    nearby: [
      "Colva Beach",
      "Betalbatim Beach",
      "Arossim Beach",
      "Church of Our Lady of Mercy"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Majorda+Beach+Goa"
  },

  {
    name: "Dharwad",
    state: "Karnataka",
    city: "Dharwad",
    category: "Heritage",

    description:
      "Dharwad is a culturally rich city known for classical music, historic institutions, traditional cuisine and nearby attractions.",

    historicalSignificance:
      "Dharwad has long been an important center of Kannada culture, education and Hindustani classical music.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f0101a1e2c8b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f0101a1e2c8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590050752117-23a9d3e2a1a5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Dharwad Fort",
      "Unkal Lake",
      "Sadhankeri Park",
      "Hubballi"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dharwad+Karnataka"
  },

  {
    name: "Bundi Palace",
    state: "Rajasthan",
    city: "Bundi",
    category: "Heritage",

    description:
      "Bundi Palace is a magnificent historic palace famous for its Rajput architecture, murals, courtyards and views of the surrounding town.",

    historicalSignificance:
      "Bundi Palace was built under the rulers of the Hada Chauhan dynasty and is renowned for its historic miniature paintings.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590050752117-23a9d3e2a1a5?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by entry ticket",

    timings: "9:00 AM - 5:00 PM",

    nearby: [
      "Taragarh Fort",
      "Chitrashala",
      "Raniji Ki Baori",
      "Nawal Sagar Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bundi+Palace+Rajasthan"
  },

  {
    name: "Kumbhalgarh Wildlife Sanctuary",
    state: "Rajasthan",
    city: "Rajsamand",
    category: "Nature",

    description:
      "Kumbhalgarh Wildlife Sanctuary is a forested landscape surrounding the Aravalli hills, known for wildlife, trekking and scenic views.",

    historicalSignificance:
      "The sanctuary surrounds the historic Kumbhalgarh region, an important part of the Mewar kingdom and Rajput history.",

    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by safari and entry permit",

    timings: "Depends on safari schedule",

    nearby: [
      "Kumbhalgarh Fort",
      "Haldighati",
      "Ranakpur",
      "Rajsamand Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kumbhalgarh+Wildlife+Sanctuary+Rajasthan"
  },

  {
    name: "Bhitarkanika National Park",
    state: "Odisha",
    city: "Kendrapara",
    category: "Nature",

    description:
      "Bhitarkanika National Park is a rich mangrove ecosystem famous for saltwater crocodiles, waterways, birds and diverse wildlife.",

    historicalSignificance:
      "The Bhitarkanika region has been protected for its unique mangrove ecosystem and traditional relationship with the coastal environment.",

    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by entry and boat permit",

    timings: "Depends on park and boat schedule",

    nearby: [
      "Gahirmatha Marine Sanctuary",
      "Dangmal",
      "Bhitarkanika Wildlife Sanctuary",
      "Dhamra"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bhitarkanika+National+Park+Odisha"
  },
{
  name: "Hemis Monastery",
  state: "Ladakh",
  city: "Leh",
  category: "Religious",

  description:
    "Hemis Monastery is one of the most famous Buddhist monasteries in Ladakh, known for its beautiful architecture, ancient artifacts and annual Hemis festival.",

  historicalSignificance:
    "Hemis Monastery was established in the 17th century under the Drukpa lineage of Tibetan Buddhism and became an important spiritual center of Ladakh.",

  image:
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "May to September",

  fee: "₹50 approximately",

  timings: "8:00 AM - 6:00 PM",

  nearby: [
    "Thiksey Monastery",
    "Shey Palace",
    "Stok Palace",
    "Leh Palace"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Hemis+Monastery+Ladakh"
},

{
  name: "Nubra Valley",
  state: "Ladakh",
  city: "Diskit",
  category: "Adventure",

  description:
    "Nubra Valley is a spectacular high-altitude valley famous for dramatic mountains, sand dunes, monasteries and scenic villages.",

  historicalSignificance:
    "Nubra was historically an important route on the ancient Silk Road connecting Ladakh with Central Asia.",

  image:
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "June to September",

  fee: "Permit charges may apply",

  timings: "Best visited during daylight hours",

  nearby: [
    "Diskit Monastery",
    "Hunder Sand Dunes",
    "Panamik Hot Springs",
    "Turtuk"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Nubra+Valley+Ladakh"
},

{
  name: "Tso Moriri Lake",
  state: "Ladakh",
  city: "Korzok",
  category: "Nature",

  description:
    "Tso Moriri is a breathtaking high-altitude lake surrounded by rugged mountains and vast landscapes in the Changthang region of Ladakh.",

  historicalSignificance:
    "The lake has traditionally been associated with nomadic communities and ancient trade routes across the Changthang plateau.",

  image:
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "May to September",

  fee: "Permit charges may apply",

  timings: "Open during daylight hours",

  nearby: [
    "Korzok Village",
    "Tso Kar",
    "Changthang Wildlife Sanctuary",
    "Sumdo"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Tso+Moriri+Lake+Ladakh"
},

{
  name: "Kolli Hills",
  state: "Tamil Nadu",
  city: "Namakkal",
  category: "Nature",

  description:
    "Kolli Hills is a scenic mountain region known for winding roads, waterfalls, viewpoints, forests and peaceful hill villages.",

  historicalSignificance:
    "Kolli Hills has been mentioned in ancient Tamil literature and is traditionally associated with the legendary ruler Valvil Ori.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "July to February",

  fee: "Free entry; attraction charges may apply",

  timings: "Open throughout the day",

  nearby: [
    "Agaya Gangai Waterfalls",
    "Seekuparai Viewpoint",
    "Siddhar Caves",
    "Masila Falls"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Kolli+Hills+Tamil+Nadu"
},

{
  name: "Vijayanagara Ruins",
  state: "Karnataka",
  city: "Hampi",
  category: "Heritage",

  description:
    "The Vijayanagara ruins are an extensive collection of ancient temples, palaces, marketplaces and monuments spread across the historic landscape of Hampi.",

  historicalSignificance:
    "The ruins represent the former capital of the Vijayanagara Empire, one of the most powerful kingdoms of medieval South India.",

  image:
    "https://images.unsplash.com/photo-1600100397608-f010c4b5a4f4?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1600100397608-f010c4b5a4f4?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to February",

  fee: "Varies by monument",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Vittala Temple",
    "Lotus Mahal",
    "Queen's Bath",
    "Achyutaraya Temple"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Vijayanagara+Ruins+Hampi+Karnataka"
},

{
  name: "Dharasuram Airavatesvara Temple",
  state: "Tamil Nadu",
  city: "Darasuram",
  category: "Heritage",

  description:
    "Airavatesvara Temple is a magnificent Chola-era temple famous for detailed stone carvings, sculptures and Dravidian architecture.",

  historicalSignificance:
    "The temple was built during the reign of Rajaraja Chola II in the 12th century and is part of the UNESCO-listed Great Living Chola Temples.",

  image:
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "November to February",

  fee: "Free entry",

  timings: "6:00 AM - 12:00 PM and 4:00 PM - 8:00 PM",

  nearby: [
    "Brihadeeswarar Temple",
    "Gangaikonda Cholapuram",
    "Thanjavur Palace",
    "Saraswathi Mahal Library"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Airavatesvara+Temple+Darasuram+Tamil+Nadu"
},

{
  name: "Gingee Wildlife Sanctuary",
  state: "Tamil Nadu",
  city: "Gingee",
  category: "Nature",

  description:
    "Gingee Wildlife Sanctuary is a peaceful natural area featuring dry forests, rocky landscapes and diverse native wildlife.",

  historicalSignificance:
    "The region around Gingee has a long cultural history connected with the historic Gingee Fort and surrounding settlements.",

  image:
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to February",

  fee: "Varies by access area",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Gingee Fort",
    "Rajagiri Fort",
    "Krishnagiri Fort",
    "Melmalayanur Temple"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Gingee+Tamil+Nadu"
},

{
  name: "Kolli Malai Arapaleeswarar Temple",
  state: "Tamil Nadu",
  city: "Kolli Hills",
  category: "Religious",

  description:
    "Arapaleeswarar Temple is an ancient hill temple surrounded by the beautiful forests and mountains of Kolli Hills.",

  historicalSignificance:
    "The temple has deep roots in Tamil Shaivite traditions and is traditionally believed to have ancient origins.",

  image:
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Free entry",

  timings: "6:00 AM - 8:00 PM",

  nearby: [
    "Agaya Gangai Waterfalls",
    "Kolli Hills Viewpoints",
    "Siddhar Caves",
    "Masila Falls"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Arapaleeswarar+Temple+Kolli+Hills"
},

{
  name: "Bhadra Wildlife Sanctuary",
  state: "Karnataka",
  city: "Chikkamagaluru",
  category: "Nature",

  description:
    "Bhadra Wildlife Sanctuary is a lush forest reserve known for wildlife, rivers, mountain scenery and rich biodiversity.",

  historicalSignificance:
    "The sanctuary was established as a protected forest area and later became an important wildlife conservation region in Karnataka.",

  image:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Safari and entry charges apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Bhadra River",
    "Hebbe Falls",
    "Muthyala Betta",
    "Mullayanagiri"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Bhadra+Wildlife+Sanctuary+Karnataka"
},

{
  name: "Nagarhole National Park",
  state: "Karnataka",
  city: "Kabini",
  category: "Nature",

  description:
    "Nagarhole National Park is a renowned wildlife destination featuring dense forests, rivers, grasslands and diverse animal species.",

  historicalSignificance:
    "The region was historically used as a hunting reserve before becoming a protected wildlife area and an important conservation landscape.",

  image:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Safari charges apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Kabini Dam",
    "Kabini River",
    "Irpu Falls",
    "Wayanad Wildlife Sanctuary"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Nagarhole+National+Park+Karnataka"
},

{
  name: "Bandipur National Park",
  state: "Karnataka",
  city: "Gundlupet",
  category: "Nature",

  description:
    "Bandipur National Park is a major wildlife destination known for forests, elephants, tigers and scenic landscapes.",

  historicalSignificance:
    "Bandipur was established as a wildlife sanctuary in the 20th century and later became an important tiger conservation area.",

  image:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Safari and entry charges apply",

  timings: "6:00 AM - 6:30 PM",

  nearby: [
    "Mudumalai National Park",
    "Ooty",
    "Gopalaswamy Betta",
    "Wayanad"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Bandipur+National+Park+Karnataka"
},

{
  name: "Mudumalai National Park",
  state: "Tamil Nadu",
  city: "Masinagudi",
  category: "Nature",

  description:
    "Mudumalai National Park is a beautiful wildlife reserve in the Nilgiri hills, famous for elephants, tigers and rich forests.",

  historicalSignificance:
    "Established as a wildlife sanctuary in the 20th century, Mudumalai became one of southern India's important protected forest regions.",

  image:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Safari and entry charges apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Masinagudi",
    "Bandipur National Park",
    "Ooty",
    "Pykara"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Mudumalai+National+Park+Tamil+Nadu"
},

{
  name: "Pykara Lake",
  state: "Tamil Nadu",
  city: "Ooty",
  category: "Nature",

  description:
    "Pykara Lake is a picturesque mountain lake surrounded by forests and rolling hills near Ooty.",

  historicalSignificance:
    "Pykara has long been associated with the indigenous Nilgiri landscape and became an important tourist attraction during the colonial period.",

  image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to June",

  fee: "Boating charges apply",

  timings: "8:30 AM - 5:30 PM",

  nearby: [
    "Pykara Waterfalls",
    "Ooty Lake",
    "Doddabetta Peak",
    "Avalanche Lake"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Pykara+Lake+Ooty+Tamil+Nadu"
},

{
  name: "Avalanche Lake",
  state: "Tamil Nadu",
  city: "Ooty",
  category: "Nature",

  description:
    "Avalanche Lake is a peaceful highland lake surrounded by dense forests, mountains and colorful wildflowers.",

  historicalSignificance:
    "The area became known for its dramatic landscape following a major natural avalanche in the 19th century.",

  image:
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to June",

  fee: "Entry and vehicle charges may apply",

  timings: "8:00 AM - 5:00 PM",

  nearby: [
    "Emerald Lake",
    "Upper Bhavani Lake",
    "Ooty",
    "Pykara"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Avalanche+Lake+Ooty+Tamil+Nadu"
},

{
  name: "Emerald Lake",
  state: "Tamil Nadu",
  city: "Ooty",
  category: "Nature",

  description:
    "Emerald Lake is a tranquil mountain lake surrounded by tea plantations, forests and rolling Nilgiri hills.",

  historicalSignificance:
    "The lake forms part of the Upper Nilgiri landscape and has become an important scenic destination near Ooty.",

  image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to June",

  fee: "Free entry; local charges may apply",

  timings: "Daylight hours",

  nearby: [
    "Avalanche Lake",
    "Ooty",
    "Upper Bhavani",
    "Tea Estates"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Emerald+Lake+Ooty+Tamil+Nadu"
},

{
  name: "Upper Bhavani Lake",
  state: "Tamil Nadu",
  city: "Ooty",
  category: "Nature",

  description:
    "Upper Bhavani Lake is a pristine mountain reservoir surrounded by forests and rugged Nilgiri landscapes.",

  historicalSignificance:
    "The lake forms part of the Upper Bhavani region, an important water and forest ecosystem in the Nilgiris.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Forest permit charges may apply",

  timings: "Access generally during daylight hours",

  nearby: [
    "Avalanche Lake",
    "Emerald Lake",
    "Mukurthi National Park",
    "Ooty"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Upper+Bhavani+Lake+Ooty"
},

{
  name: "Mukurthi National Park",
  state: "Tamil Nadu",
  city: "Ooty",
  category: "Adventure",

  description:
    "Mukurthi National Park is a high-altitude protected area known for grasslands, shola forests and the endangered Nilgiri tahr.",

  historicalSignificance:
    "The park was established to protect the unique montane ecosystem of the western Nilgiris and its native wildlife.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Entry and permit charges apply",

  timings: "9:00 AM - 5:30 PM",

  nearby: [
    "Pykara",
    "Avalanche",
    "Ooty",
    "Silent Valley National Park"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Mukurthi+National+Park+Tamil+Nadu"
},

{
  name: "Silent Valley National Park",
  state: "Kerala",
  city: "Mannarkkad",
  category: "Nature",

  description:
    "Silent Valley National Park is a pristine tropical rainforest known for extraordinary biodiversity, mountain streams and dense evergreen forests.",

  historicalSignificance:
    "The region became a major focus of India's environmental conservation movement and was declared a national park in 1984.",

  image:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "November to March",

  fee: "Entry and safari charges apply",

  timings: "8:00 AM - 5:00 PM",

  nearby: [
    "Attappadi",
    "Mukkali",
    "Kunthipuzha River",
    "Nelliyampathy"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Silent+Valley+National+Park+Kerala"
},

{
  name: "Nelliyampathy Hills",
  state: "Kerala",
  city: "Palakkad",
  category: "Nature",

  description:
    "Nelliyampathy Hills is a beautiful mountain destination surrounded by tea, coffee and orange plantations, forests and scenic viewpoints.",

  historicalSignificance:
    "The hills developed as an agricultural and plantation region during the colonial period and remain known for their rich natural environment.",

  image:
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Free entry; attraction charges may apply",

  timings: "Daylight hours",

  nearby: [
    "Seetharkundu Viewpoint",
    "Pothundi Dam",
    "Parambikulam",
    "Nenmara"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Nelliyampathy+Hills+Kerala"
},

{
  name: "Parambikulam Tiger Reserve",
  state: "Kerala",
  city: "Palakkad",
  category: "Nature",

  description:
    "Parambikulam Tiger Reserve is a protected forest landscape famous for wildlife, reservoirs, bamboo forests and scenic mountain terrain.",

  historicalSignificance:
    "The region has been protected for decades and forms part of the larger Western Ghats biodiversity landscape.",

  image:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Safari and entry charges apply",

  timings: "7:00 AM - 5:00 PM",

  nearby: [
    "Parambikulam Dam",
    "Thunakadavu",
    "Top Slip",
    "Anamalai Tiger Reserve"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Parambikulam+Tiger+Reserve+Kerala"
},

{
  name: "Anamalai Tiger Reserve",
  state: "Tamil Nadu",
  city: "Pollachi",
  category: "Adventure",

  description:
    "Anamalai Tiger Reserve is a spectacular Western Ghats wildlife destination featuring dense forests, mountains and diverse wildlife.",

  historicalSignificance:
    "The reserve evolved from earlier protected forest areas and became an important tiger conservation landscape in the Western Ghats.",

  image:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to May",

  fee: "Safari and entry charges apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Top Slip",
    "Aliyar Dam",
    "Valparai",
    "Parambikulam"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Anamalai+Tiger+Reserve+Tamil+Nadu"
},

{
  name: "Aliyar Dam",
  state: "Tamil Nadu",
  city: "Pollachi",
  category: "Nature",

  description:
    "Aliyar Dam is a scenic reservoir surrounded by the Anamalai hills and is known for boating, gardens and mountain views.",

  historicalSignificance:
    "The dam was constructed as part of a major irrigation and water-management project in the region during the 20th century.",

  image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Boating and park charges may apply",

  timings: "8:00 AM - 6:00 PM",

  nearby: [
    "Monkey Falls",
    "Top Slip",
    "Anamalai Tiger Reserve",
    "Valparai"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Aliyar+Dam+Tamil+Nadu"
},

{
  name: "Monsoon Palace",
  state: "Rajasthan",
  city: "Udaipur",
  category: "Heritage",

  description:
    "Monsoon Palace is a historic hilltop palace overlooking Udaipur and its surrounding lakes, hills and countryside.",

  historicalSignificance:
    "The palace was built in the 19th century by Maharana Sajjan Singh as a monsoon retreat and astronomical center.",

  image:
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1602643163980-11f5a1a0e8a5?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Entry fee applies",

  timings: "9:00 AM - 6:00 PM",

  nearby: [
    "Lake Pichola",
    "City Palace",
    "Fateh Sagar Lake",
    "Sajjangarh Wildlife Sanctuary"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Monsoon+Palace+Udaipur+Rajasthan"
},

{
  name: "Fateh Sagar Lake",
  state: "Rajasthan",
  city: "Udaipur",
  category: "Nature",

  description:
    "Fateh Sagar Lake is a beautiful artificial lake surrounded by hills and is one of Udaipur's most scenic landmarks.",

  historicalSignificance:
    "The lake was originally constructed in the 17th century and later rebuilt and expanded under Maharana Fateh Singh.",

  image:
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1602643163980-11f5a1a0e8a5?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Boating charges apply",

  timings: "8:00 AM - 6:00 PM",

  nearby: [
    "City Palace",
    "Lake Pichola",
    "Saheliyon Ki Bari",
    "Monsoon Palace"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Fateh+Sagar+Lake+Udaipur"
},

{
  name: "Sajjangarh Wildlife Sanctuary",
  state: "Rajasthan",
  city: "Udaipur",
  category: "Nature",

  description:
    "Sajjangarh Wildlife Sanctuary surrounds the Monsoon Palace and offers forest trails, wildlife and panoramic views of Udaipur.",

  historicalSignificance:
    "The sanctuary forms part of the historic Sajjangarh landscape and protects forests around the former royal retreat.",

  image:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Entry charges apply",

  timings: "8:00 AM - 6:00 PM",

  nearby: [
    "Monsoon Palace",
    "Lake Pichola",
    "Fateh Sagar Lake",
    "City Palace"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Sajjangarh+Wildlife+Sanctuary+Udaipur"
},

{
  name: "Chausath Yogini Temple Bhedaghat",
  state: "Madhya Pradesh",
  city: "Bhedaghat",
  category: "Religious",

  description:
    "Chausath Yogini Temple is an ancient hilltop temple offering panoramic views of the Narmada River and surrounding marble landscape.",

  historicalSignificance:
    "The temple is believed to date back to the 10th century and is dedicated to the sixty-four Yoginis of Hindu tradition.",

  image:
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Free entry",

  timings: "7:00 AM - 7:00 PM",

  nearby: [
    "Marble Rocks",
    "Dhuandhar Falls",
    "Narmada River",
    "Bhedaghat"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Chausath+Yogini+Temple+Bhedaghat"
},

{
  name: "Panna National Park",
  state: "Madhya Pradesh",
  city: "Panna",
  category: "Nature",

  description:
    "Panna National Park is a scenic wildlife reserve known for forests, waterfalls, the Ken River and tiger conservation.",

  historicalSignificance:
    "The region became a major tiger conservation area after intensive wildlife protection efforts helped restore its tiger population.",

  image:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to June",

  fee: "Safari and entry charges apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Ken River",
    "Pandav Falls",
    "Raneh Falls",
    "Khajuraho"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Panna+National+Park+Madhya+Pradesh"
},

{
  name: "Raneh Falls",
  state: "Madhya Pradesh",
  city: "Khajuraho",
  category: "Nature",

  description:
    "Raneh Falls is a spectacular canyon on the Ken River featuring colorful granite rocks, waterfalls and deep gorges.",

  historicalSignificance:
    "The canyon is a remarkable geological formation created over millions of years by the flow of the Ken River.",

  image:
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "July to March",

  fee: "Entry fee may apply",

  timings: "7:00 AM - 6:00 PM",

  nearby: [
    "Panna National Park",
    "Pandav Falls",
    "Khajuraho Temples",
    "Ken Gharial Sanctuary"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Raneh+Falls+Madhya+Pradesh"
},

{
  name: "Orchha Wildlife Sanctuary",
  state: "Madhya Pradesh",
  city: "Orchha",
  category: "Nature",

  description:
    "Orchha Wildlife Sanctuary is a peaceful riverside forest area along the Betwa River, home to birds and diverse wildlife.",

  historicalSignificance:
    "The sanctuary was established to protect the natural landscape surrounding the historic town of Orchha and the Betwa River.",

  image:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Entry charges may apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Orchha Fort",
    "Betwa River",
    "Ram Raja Temple",
    "Chaturbhuj Temple"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Orchha+Wildlife+Sanctuary+Madhya+Pradesh"
},

{
  name: "Tamia",
  state: "Madhya Pradesh",
  city: "Tamia",
  category: "Nature",

  description:
    "Tamia is a quiet hill destination known for deep valleys, forested hills, waterfalls and spectacular sunset viewpoints.",

  historicalSignificance:
    "Tamia developed as a hill retreat during the colonial period and remains one of Madhya Pradesh's lesser-known mountain destinations.",

  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Free entry",

  timings: "Open throughout the day",

  nearby: [
    "Patalkot",
    "Tamia Viewpoint",
    "Pench Tiger Reserve",
    "Chhindwara"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Tamia+Madhya+Pradesh"
},

{
  name: "Patalkot",
  state: "Madhya Pradesh",
  city: "Tamia",
  category: "Adventure",

  description:
    "Patalkot is a dramatic forested valley surrounded by steep cliffs and villages, offering spectacular views and trekking opportunities.",

  historicalSignificance:
    "The valley has traditionally been home to indigenous communities and is known for its distinctive cultural and natural heritage.",

  image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Free entry; local guide charges may apply",

  timings: "Daylight hours",

  nearby: [
    "Tamia",
    "Pachmarhi",
    "Chhindwara",
    "Satpura National Park"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Patalkot+Madhya+Pradesh"
},

{
  name: "Satpura National Park",
  state: "Madhya Pradesh",
  city: "Pachmarhi",
  category: "Adventure",

  description:
    "Satpura National Park is a beautiful forest reserve featuring rugged hills, deep valleys, rivers and diverse wildlife.",

  historicalSignificance:
    "The park forms part of the Satpura landscape and has been protected as an important wildlife conservation area since the 20th century.",

  image:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to June",

  fee: "Safari and entry charges apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Pachmarhi",
    "Denwa River",
    "Tawa Reservoir",
    "Bori Wildlife Sanctuary"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Satpura+National+Park+Madhya+Pradesh"
},

{
  name: "Tawa Reservoir",
  state: "Madhya Pradesh",
  city: "Itarsi",
  category: "Nature",

  description:
    "Tawa Reservoir is a vast scenic water body surrounded by forests and hills, offering boating, birdwatching and peaceful landscapes.",

  historicalSignificance:
    "The reservoir was created by the Tawa Dam as part of a major irrigation and water-management project in central India.",

  image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Boating charges may apply",

  timings: "8:00 AM - 6:00 PM",

  nearby: [
    "Satpura National Park",
    "Tawa Dam",
    "Pachmarhi",
    "Bori Wildlife Sanctuary"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Tawa+Reservoir+Madhya+Pradesh"
},

{
  name: "Bori Wildlife Sanctuary",
  state: "Madhya Pradesh",
  city: "Hoshangabad",
  category: "Nature",

  description:
    "Bori Wildlife Sanctuary is an important forest reserve with teak forests, wildlife and scenic hills in the Satpura region.",

  historicalSignificance:
    "Bori is associated with one of India's oldest formally protected forest areas, established during the 19th century.",

  image:
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "October to March",

  fee: "Forest entry and permit charges may apply",

  timings: "6:00 AM - 6:00 PM",

  nearby: [
    "Satpura National Park",
    "Tawa Reservoir",
    "Pachmarhi",
    "Denwa River"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Bori+Wildlife+Sanctuary+Madhya+Pradesh"
},

{
  name: "Chandubi Lake",
  state: "Assam",
  city: "Kamrup",
  category: "Nature",

  description:
    "Chandubi Lake is a peaceful natural lake surrounded by forests and hills, known for birdwatching, boating and village tourism.",

  historicalSignificance:
    "The lake was formed following the 1897 Assam earthquake and has since become an important local ecological area.",

  image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "November to April",

  fee: "Boating and local activity charges may apply",

  timings: "7:00 AM - 6:00 PM",

  nearby: [
    "Guwahati",
    "Rani Reserve Forest",
    "Umananda Island",
    "Pobitora Wildlife Sanctuary"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Chandubi+Lake+Assam"
},

{
  name: "Pobitora Wildlife Sanctuary",
  state: "Assam",
  city: "Morigaon",
  category: "Nature",

  description:
    "Pobitora Wildlife Sanctuary is a compact wildlife reserve famous for its population of one-horned rhinoceroses, wetlands and grasslands.",

  historicalSignificance:
    "The sanctuary was established to protect the area's important rhinoceros habitat and wetland ecosystem.",

  image:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "November to March",

  fee: "Safari and entry charges apply",

  timings: "6:00 AM - 5:00 PM",

  nearby: [
    "Chandubi Lake",
    "Guwahati",
    "Brahmaputra River",
    "Mayong"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Pobitora+Wildlife+Sanctuary+Assam"
},

{
  name: "Madhabkunda Waterfall",
  state: "Sylhet",
  city: "Moulvibazar",
  category: "Nature",

  description:
    "Madhabkunda Waterfall is a spectacular waterfall surrounded by rocky terrain and greenery, popular for its scenic beauty and hiking trails.",

  historicalSignificance:
    "The waterfall is associated with the cultural landscape of the Barlekha region and has long been a popular natural attraction.",

  image:
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80",

  images: [
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
  ],

  bestTime: "June to February",

  fee: "Local entry charges may apply",

  timings: "8:00 AM - 6:00 PM",

  nearby: [
    "Madhabkunda Eco Park",
    "Barlekha",
    "Kulaura",
    "Moulvibazar"
  ],

  location:
    "https://www.google.com/maps/search/?api=1&query=Madhabkunda+Waterfall"
},

  {
    name: "Dooars",
    city: "Jalpaiguri",
    state: "West Bengal",
    category: "Nature",

    description:
      "Dooars is a scenic region at the foothills of the eastern Himalayas known for forests, rivers, tea gardens and rich wildlife.",

    historicalSignificance:
      "The Dooars region has historically been an important gateway between the Himalayan foothills and the plains of eastern India.",

    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on safari and attraction",

    nearby: [
      "Jaldapara National Park",
      "Gorumara National Park",
      "Buxa Tiger Reserve"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dooars+West+Bengal"
  },

  {
    name: "Bishnupur Terracotta Temples",
    city: "Bishnupur",
    state: "West Bengal",
    category: "Heritage",

    description:
      "Bishnupur is famous for its terracotta temples, distinctive architecture, traditional crafts and rich cultural heritage.",

    historicalSignificance:
      "The temples were largely built by the Malla rulers between the 17th and 18th centuries and represent a distinctive school of Bengal temple architecture.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies by monument",

    timings: "Usually daytime",

    nearby: [
      "Rasmancha",
      "Jor Bangla Temple",
      "Madanmohan Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bishnupur+Terracotta+Temples+West+Bengal"
  },


  // ============================================================
  // 2. RAJASTHAN
  // ============================================================

  {
    name: "Hawa Mahal",
    state: "Rajasthan",
    city: "Jaipur",
    category: "Heritage",

    description:
      "Hawa Mahal is one of Jaipur's most recognizable landmarks, famous for its distinctive pink sandstone facade and numerous small windows.",

    historicalSignificance:
      "Hawa Mahal was built in 1799 by Maharaja Sawai Pratap Singh and was designed to allow royal women to observe street life while maintaining privacy.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "9:00 AM - 5:00 PM",

    nearby: [
      "City Palace",
      "Jantar Mantar",
      "Albert Hall Museum"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Hawa+Mahal+Jaipur+Rajasthan"
  },

  {
    name: "Jaisalmer Fort",
    state: "Rajasthan",
    city: "Jaisalmer",
    category: "Heritage",

    description:
      "Jaisalmer Fort is a magnificent golden sandstone fort rising from the Thar Desert and containing historic streets, temples and residences.",

    historicalSignificance:
      "The fort was founded in 1156 by Rawal Jaisal and has remained an important center of the region's history and culture.",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free entry; some attractions have separate charges",

    timings: "Open throughout the day",

    nearby: [
      "Patwon Ki Haveli",
      "Gadisar Lake",
      "Salim Singh Ki Haveli"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Jaisalmer+Fort+Rajasthan"
  },

  {
    name: "Chittorgarh Fort",
    state: "Rajasthan",
    city: "Chittorgarh",
    category: "Heritage",

    description:
      "Chittorgarh Fort is one of India's largest historic forts, featuring massive walls, towers, palaces and temples.",

    historicalSignificance:
      "The fort was a major stronghold of the Mewar kingdom and is associated with important chapters of Rajput history.",

    image:
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "9:30 AM - 5:00 PM",

    nearby: [
      "Vijay Stambh",
      "Kirti Stambh",
      "Rana Kumbha Palace",
      "Padmini Palace"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Chittorgarh+Fort+Rajasthan"
  },


  // ============================================================
  // 3. MAHARASHTRA
  // ============================================================

  {
    name: "Mahabaleshwar",
    state: "Maharashtra",
    city: "Mahabaleshwar",
    category: "Nature",

    description:
      "Mahabaleshwar is a scenic hill station known for green valleys, viewpoints, forests, waterfalls and strawberry farms.",

    historicalSignificance:
      "Mahabaleshwar developed as an important hill retreat during the colonial period and has long been associated with the history of the Western Ghats.",

    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to June",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Arthur's Seat",
      "Venna Lake",
      "Pratapgad Fort",
      "Elephant's Head Point"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Mahabaleshwar+Maharashtra"
  },

  {
    name: "Elephanta Caves",
    state: "Maharashtra",
    city: "Mumbai",
    category: "Heritage",

    description:
      "Elephanta Caves are a group of ancient rock-cut caves on Elephanta Island featuring impressive sculptures and temple architecture.",

    historicalSignificance:
      "The caves date mainly from the early medieval period and are recognized as a UNESCO World Heritage Site.",

    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to February",

    fee: "Entry fee varies; ferry charges separate",

    timings: "Usually 9:30 AM - 5:30 PM; closed on Mondays",

    nearby: [
      "Gateway of India",
      "Colaba Causeway",
      "Marine Drive"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Elephanta+Caves+Mumbai+Maharashtra"
  },


  // ============================================================
  // 4. TAMIL NADU
  // ============================================================

  {
    name: "Hogenakkal Falls",
    state: "Tamil Nadu",
    city: "Dharmapuri",
    category: "Nature",

    description:
      "Hogenakkal Falls is a spectacular waterfall on the Kaveri River surrounded by rocky landscapes and lush greenery.",

    historicalSignificance:
      "The waterfall and surrounding Kaveri region have long been important to local communities and traditional river-based activities.",

    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by activity",

    timings: "Usually daytime",

    nearby: [
      "Kaveri River",
      "Pennagaram",
      "Melagiri Hills"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Hogenakkal+Falls+Tamil+Nadu"
  },

  {
    name: "Rameswaram",
    state: "Tamil Nadu",
    city: "Rameswaram",
    category: "Religious",

    description:
      "Rameswaram is an important pilgrimage destination known for Ramanathaswamy Temple, coastal scenery and its connection with the Ramayana tradition.",

    historicalSignificance:
      "Rameswaram has been an important Hindu pilgrimage center for centuries and is traditionally associated with Lord Rama.",

    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to April",

    fee: "Temple entry generally free; special services may have charges",

    timings: "Depends on temple schedule",

    nearby: [
      "Ramanathaswamy Temple",
      "Dhanushkodi",
      "Pamban Bridge",
      "Agni Theertham"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Rameswaram+Tamil+Nadu"
  },

  {
    name: "Kodaikanal",
    state: "Tamil Nadu",
    city: "Kodaikanal",
    category: "Nature",

    description:
      "Kodaikanal is a beautiful hill station known for its lake, forests, waterfalls, viewpoints and pleasant mountain climate.",

    historicalSignificance:
      "Kodaikanal developed as a hill retreat during the colonial period and became one of southern India's best-known mountain destinations.",

    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to June",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Kodaikanal Lake",
      "Coaker's Walk",
      "Bryant Park",
      "Pillar Rocks"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kodaikanal+Tamil+Nadu"
  },

  {
    name: "Kanyakumari",
    city: "Kanyakumari",
    state: "Tamil Nadu",
    category: "Nature",

    description:
      "Kanyakumari is a scenic coastal destination at the southern tip of mainland India, known for its beaches, ocean views and spectacular sunrises.",

    historicalSignificance:
      "Kanyakumari has been an important pilgrimage and cultural center for centuries and is associated with the goddess Kanyakumari.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f0107c8d0c25?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f0107c8d0c25?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f0107c8d0c25?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f0107c8d0c25?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f0107c8d0c25?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free; attractions may have separate charges",

    timings: "Depends on attraction",

    nearby: [
      "Vivekananda Rock Memorial",
      "Thiruvalluvar Statue",
      "Kanyakumari Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kanyakumari+Tamil+Nadu"
  },

  {
    name: "Mahabalipuram",
    city: "Mahabalipuram",
    state: "Tamil Nadu",
    category: "Heritage",

    description:
      "Mahabalipuram is a historic coastal town famous for its ancient temples, rock-cut monuments and Shore Temple.",

    historicalSignificance:
      "The monuments were largely created during the Pallava period and are recognized as a UNESCO World Heritage Site.",

    image:
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Shore Temple",
      "Pancha Rathas",
      "Arjuna's Penance",
      "Krishna's Butter Ball"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Mahabalipuram+Tamil+Nadu"
  },


  // ============================================================
  // 5. ODISHA
  // ============================================================

  {
    name: "Puri Jagannath Temple",
    city: "Puri",
    state: "Odisha",
    category: "Religious",

    description:
      "Jagannath Temple in Puri is one of India's most important Hindu pilgrimage sites and is famous for the annual Rath Yatra.",

    historicalSignificance:
      "The present temple complex dates mainly to the 12th century and is a major center of the Jagannath tradition.",

    image:
      "https://images.unsplash.com/photo-1609766418204-94aae0ecf08c?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1609766418204-94aae0ecf08c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609766418204-94aae0ecf08c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609766418204-94aae0ecf08c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609766418204-94aae0ecf08c?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free entry",

    timings: "Varies according to temple rituals",

    nearby: [
      "Puri Beach",
      "Gundicha Temple",
      "Raghurajpur"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Jagannath+Temple+Puri+Odisha"
  },

  {
    name: "Daringbadi",
    city: "Daringbadi",
    state: "Odisha",
    category: "Nature",

    description:
      "Daringbadi is a scenic hill destination in Odisha known for forests, valleys, waterfalls, coffee plantations and cool mountain weather.",

    historicalSignificance:
      "Daringbadi is known for its distinctive hill culture and natural landscape in the Kandhamal region of Odisha.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Belghar",
      "Putudi Waterfall",
      "Hill View Park"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Daringbadi+Odisha"
  },

  {
    name: "Gopalpur Beach",
    city: "Gopalpur",
    state: "Odisha",
    category: "Nature",

    description:
      "Gopalpur Beach is a peaceful coastal destination known for its sandy shoreline, sea views and relaxed atmosphere.",

    historicalSignificance:
      "Gopalpur developed as an important coastal trading settlement and later became a popular seaside destination.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free entry",

    timings: "Open throughout the day",

    nearby: [
      "Gopalpur Lighthouse",
      "Taptapani",
      "Chilika Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Gopalpur+Beach+Odisha"
  },


  // ============================================================
  // 6. KERALA
  // ============================================================

  {
    name: "Varkala",
    city: "Varkala",
    state: "Kerala",
    category: "Nature",

    description:
      "Varkala is a coastal destination famous for its dramatic cliffs, Arabian Sea views, beaches and peaceful atmosphere.",

    historicalSignificance:
      "Varkala is also an important pilgrimage destination associated with the ancient Janardhana Swamy Temple.",

    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free; activities may have separate charges",

    timings: "Open throughout the day",

    nearby: [
      "Varkala Beach",
      "Janardhana Swamy Temple",
      "Kappil Beach",
      "Sivagiri Mutt"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Varkala+Kerala"
  },

  {
    name: "Bekal Fort",
    city: "Bekal",
    state: "Kerala",
    category: "Heritage",

    description:
      "Bekal Fort is a massive seaside fort in Kerala offering panoramic views of the Arabian Sea and surrounding coastline.",

    historicalSignificance:
      "Bekal Fort is one of Kerala's important historic forts and played a strategic role in the region's coastal history.",

    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Bekal Beach",
      "Kappil Beach",
      "Chandragiri Fort",
      "Kasaragod"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bekal+Fort+Kerala"
  },

  {
    name: "Alappuzha",
    city: "Alappuzha",
    state: "Kerala",
    category: "Nature",

    description:
      "Alappuzha is a beautiful Kerala destination famous for its backwaters, houseboats, canals and peaceful coastal landscapes.",

    historicalSignificance:
      "Alappuzha developed as an important trading and port center in Kerala and became closely associated with the state's backwater culture.",

    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by activity",

    timings: "Depends on attraction",

    nearby: [
      "Alappuzha Beach",
      "Vembanad Lake",
      "Kuttanad",
      "Pathiramanal Island"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Alappuzha+Kerala"
  },

  {
    name: "Thekkady",
    city: "Thekkady",
    state: "Kerala",
    category: "Nature",

    description:
      "Thekkady is a popular wildlife destination known for forests, elephants, boating and the rich biodiversity of the Western Ghats.",

    historicalSignificance:
      "The region is closely associated with the Periyar landscape and the conservation of Kerala's Western Ghats ecosystems.",

    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by activity",

    timings: "Depends on safari and boating schedule",

    nearby: [
      "Periyar National Park",
      "Periyar Lake",
      "Kumily",
      "Gavi"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Thekkady+Kerala"
  },

  {
    name: "Athirappilly Falls",
    city: "Athirappilly",
    state: "Kerala",
    category: "Nature",

    description:
      "Athirappilly Falls is Kerala's famous waterfall on the Chalakudy River, surrounded by dense tropical forests.",

    historicalSignificance:
      "The waterfall and surrounding forests form an important part of Kerala's Western Ghats landscape and biodiversity.",

    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "June to January",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Vazhachal Falls",
      "Sholayar Forest",
      "Charpa Falls",
      "Chalakudy River"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Athirappilly+Falls+Kerala"
  },

  {
    name: "Wayanad",
    city: "Kalpetta",
    state: "Kerala",
    category: "Adventure",

    description:
      "Wayanad is a scenic hill region known for forests, waterfalls, caves, wildlife and trekking opportunities.",

    historicalSignificance:
      "Wayanad has a long history of tribal communities, ancient settlements and trade routes through the Western Ghats.",

    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Edakkal Caves",
      "Soochipara Falls",
      "Banasura Sagar Dam",
      "Chembra Peak"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Wayanad+Kerala"
  },


  // ============================================================
  // 7. KARNATAKA
  // ============================================================

  {
    name: "Gokarna",
    city: "Gokarna",
    state: "Karnataka",
    category: "Religious",

    description:
      "Gokarna is a coastal town known for its ancient temples, peaceful beaches and strong spiritual traditions.",

    historicalSignificance:
      "Gokarna is an ancient pilgrimage center associated with the Mahabaleshwar Temple and the worship of Lord Shiva.",

    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on temple and attraction",

    nearby: [
      "Om Beach",
      "Kudle Beach",
      "Mahabaleshwar Temple",
      "Half Moon Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Gokarna+Karnataka"
  },

  {
    name: "Coorg",
    city: "Madikeri",
    state: "Karnataka",
    category: "Nature",

    description:
      "Coorg, also known as Kodagu, is a beautiful hill region famous for coffee plantations, forests, waterfalls and misty landscapes.",

    historicalSignificance:
      "Kodagu has a distinct cultural heritage and a long history associated with the Kodava people and the region's historic kingdoms.",

    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Abbey Falls",
      "Raja's Seat",
      "Dubare Elephant Camp",
      "Mandalpatti"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Coorg+Madikeri+Karnataka"
  },

  {
    name: "Badami Caves",
    city: "Badami",
    state: "Karnataka",
    category: "Heritage",

    description:
      "Badami Caves are remarkable rock-cut cave temples featuring ancient sculptures, pillars and historic architecture carved into sandstone cliffs.",

    historicalSignificance:
      "The caves were developed during the Chalukyan period and are important examples of early Indian rock-cut architecture.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Agastya Lake",
      "Badami Fort",
      "Pattadakal",
      "Aihole"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Badami+Caves+Karnataka"
  },

  {
    name: "Pattadakal",
    city: "Pattadakal",
    state: "Karnataka",
    category: "Heritage",

    description:
      "Pattadakal is a historic temple complex famous for its blend of northern and southern Indian architectural styles.",

    historicalSignificance:
      "Pattadakal was an important center of Chalukyan architecture and is recognized as a UNESCO World Heritage Site.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Virupaksha Temple",
      "Badami",
      "Aihole",
      "Mallikarjuna Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Pattadakal+Karnataka"
  },

  {
    name: "Aihole",
    city: "Aihole",
    state: "Karnataka",
    category: "Heritage",

    description:
      "Aihole is an ancient temple town known for its remarkable collection of early Chalukyan temples and architectural experiments.",

    historicalSignificance:
      "Aihole was an important early center of Chalukyan architecture and is often associated with the development of Indian temple design.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Durga Temple",
      "Lad Khan Temple",
      "Pattadakal",
      "Badami"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Aihole+Karnataka"
  },

  {
    name: "Hampi Bazaar",
    city: "Hampi",
    state: "Karnataka",
    category: "Heritage",

    description:
      "Hampi Bazaar is a historic street in the ancient city of Hampi, surrounded by monumental ruins and historic temples.",

    historicalSignificance:
      "The bazaar was an important commercial center of the Vijayanagara Empire and reflects the city's historic urban design.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f010e4c6f5b1?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Free; nearby monuments may charge entry fees",

    timings: "Daytime",

    nearby: [
      "Virupaksha Temple",
      "Vittala Temple",
      "Matanga Hill"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Hampi+Bazaar+Karnataka"
  },

  {
    name: "Dandeli",
    city: "Dandeli",
    state: "Karnataka",
    category: "Adventure",

    description:
      "Dandeli is a forest destination known for wildlife, river rafting, caves and outdoor adventure activities.",

    historicalSignificance:
      "The region's forests and Kali River have long supported local communities and are now important for wildlife conservation and eco-tourism.",

    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by activity",

    timings: "Depends on activity",

    nearby: [
      "Kali River",
      "Dandeli Wildlife Sanctuary",
      "Syntheri Rocks",
      "Kavala Caves"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dandeli+Karnataka"
  },

  {
    name: "Jog Falls",
    city: "Sagara",
    state: "Karnataka",
    category: "Nature",

    description:
      "Jog Falls is one of India's most spectacular waterfalls, where the Sharavathi River drops dramatically through the Western Ghats.",

    historicalSignificance:
      "Jog Falls is an important natural landmark of Karnataka and has long attracted visitors to the Western Ghats.",

    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "July to January",

    fee: "Varies by viewpoint",

    timings: "Daytime",

    nearby: [
      "Sharavathi River",
      "Linganamakki Dam",
      "Sagara",
      "Kodachadri"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Jog+Falls+Karnataka"
  },

  {
    name: "Kodachadri",
    city: "Kollur",
    state: "Karnataka",
    category: "Adventure",

    description:
      "Kodachadri is a scenic mountain peak in the Western Ghats known for trekking trails, forests and panoramic views.",

    historicalSignificance:
      "Kodachadri has spiritual importance because of its association with the ancient Mookambika tradition and surrounding forests.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to February",

    fee: "Varies by activity",

    timings: "Daytime",

    nearby: [
      "Mookambika Temple",
      "Hidlumane Falls",
      "Kollur",
      "Arasinagundi Falls"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kodachadri+Karnataka"
  },


  // ============================================================
  // 8. GUJARAT
  // ============================================================

  {
    name: "Gir National Park",
    city: "Sasan Gir",
    state: "Gujarat",
    category: "Nature",

    description:
      "Gir National Park is famous for its Asiatic lions and is one of India's most important wildlife conservation areas.",

    historicalSignificance:
      "Gir played a crucial role in the conservation of the Asiatic lion, whose population survives primarily in this region.",

    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to June",

    fee: "Safari and entry fees vary",

    timings: "Depends on safari schedule",

    nearby: [
      "Devalia Safari Park",
      "Somnath Temple",
      "Kankai Mata Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Gir+National+Park+Sasan+Gir+Gujarat"
  },

  {
    name: "Madhavpur Beach",
    city: "Madhavpur",
    state: "Gujarat",
    category: "Nature",

    description:
      "Madhavpur Beach is a peaceful coastal destination in Gujarat known for its long sandy shoreline and Arabian Sea views.",

    historicalSignificance:
      "Madhavpur has cultural and religious associations with the traditional stories of Lord Krishna and Rukmini.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free",

    timings: "Open throughout the day",

    nearby: [
      "Porbandar",
      "Somnath",
      "Madhavrai Temple",
      "Gorakhmadi"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Madhavpur+Beach+Gujarat"
  },

  {
    name: "Modhera Sun Temple",
    city: "Modhera",
    state: "Gujarat",
    category: "Heritage",

    description:
      "Modhera Sun Temple is a magnificent historic temple complex dedicated to the Sun God, famous for its intricate carvings and stepped tank.",

    historicalSignificance:
      "The temple was built during the Solanki period in the 11th century and is one of India's finest examples of medieval temple architecture.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Surya Kund",
      "Rani Ki Vav",
      "Patan",
      "Mehsana"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Modhera+Sun+Temple+Gujarat"
  },

  {
    name: "Rani Ki Vav",
    city: "Patan",
    state: "Gujarat",
    category: "Heritage",

    description:
      "Rani Ki Vav is an extraordinary stepwell decorated with hundreds of sculptures and intricate architectural details.",

    historicalSignificance:
      "The stepwell was constructed in the 11th century and is recognized as a UNESCO World Heritage Site.",

    image:
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Sahasralinga Talav",
      "Modhera Sun Temple",
      "Patan",
      "Siddhpur"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Rani+Ki+Vav+Patan+Gujarat"
  },

  {
    name: "Saputara",
    city: "Saputara",
    state: "Gujarat",
    category: "Nature",

    description:
      "Saputara is a scenic hill station in Gujarat known for forests, viewpoints, waterfalls and a pleasant mountain climate.",

    historicalSignificance:
      "Saputara is located in the traditional homeland of tribal communities and has become Gujarat's best-known hill destination.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Saputara Lake",
      "Sunset Point",
      "Gira Falls",
      "Artist Village"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Saputara+Gujarat"
  },


  // ============================================================
  // 9. UTTARAKHAND
  // ============================================================

  {
    name: "Kedarnath Temple",
    city: "Kedarnath",
    state: "Uttarakhand",
    category: "Religious",

    description:
      "Kedarnath Temple is one of India's most revered Hindu temples, located in the Himalayan mountains of Uttarakhand and dedicated to Lord Shiva.",

    historicalSignificance:
      "Kedarnath is one of the twelve Jyotirlinga shrines of Lord Shiva and is an important pilgrimage destination in the Char Dham tradition.",

    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "May to October",

    fee: "Free entry",

    timings: "Varies according to temple schedule",

    nearby: [
      "Gaurikund",
      "Bhairavnath Temple",
      "Vasuki Tal"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kedarnath+Temple+Uttarakhand"
  },

  {
    name: "Jim Corbett National Park",
    city: "Ramnagar",
    state: "Uttarakhand",
    category: "Nature",

    description:
      "Jim Corbett National Park is India's oldest national park and is famous for its forests, wildlife and Bengal tiger population.",

    historicalSignificance:
      "Established in 1936 as Hailey National Park, it was later renamed in honor of conservationist and author Jim Corbett.",

    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "November to June",

    fee: "Varies by safari zone and permit",

    timings: "Depends on safari schedule",

    nearby: [
      "Garjiya Devi Temple",
      "Corbett Waterfall",
      "Sitabani Wildlife Reserve"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Jim+Corbett+National+Park+Ramnagar+Uttarakhand"
  },

  {
    name: "Chopta",
    city: "Chopta",
    state: "Uttarakhand",
    category: "Adventure",

    description:
      "Chopta is a beautiful Himalayan destination surrounded by forests and mountain peaks, known as a starting point for several trekking routes.",

    historicalSignificance:
      "Chopta is part of the traditional Himalayan pilgrimage and trekking routes of Uttarakhand.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to November",

    fee: "Varies by local activities",

    timings: "Daytime",

    nearby: [
      "Tungnath Temple",
      "Chandrashila",
      "Deoria Tal",
      "Ukhimath"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Chopta+Uttarakhand"
  },

  {
    name: "Valley of Flowers National Park",
    city: "Chamoli",
    state: "Uttarakhand",
    category: "Nature",

    description:
      "Valley of Flowers National Park is a spectacular Himalayan valley famous for alpine flowers, dramatic mountains and rich biodiversity.",

    historicalSignificance:
      "The valley is part of the Nanda Devi Biosphere Reserve and is recognized internationally for its exceptional Himalayan biodiversity.",

    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "July to September",

    fee: "Entry fee varies",

    timings: "Daytime; subject to park regulations",

    nearby: [
      "Govindghat",
      "Ghangaria",
      "Hemkund Sahib",
      "Nanda Devi National Park"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Valley+of+Flowers+National+Park+Uttarakhand"
  },

  {
    name: "Bhimtal",
    city: "Bhimtal",
    state: "Uttarakhand",
    category: "Nature",

    description:
      "Bhimtal is a peaceful hill destination centered around a scenic lake and surrounded by forested Himalayan hills.",

    historicalSignificance:
      "Bhimtal is an old settlement in the Kumaon region and is traditionally associated with the Mahabharata-era figure Bhima.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to December",

    fee: "Varies by attraction",

    timings: "Daytime",

    nearby: [
      "Bhimtal Lake",
      "Victoria Dam",
      "Sattal",
      "Naukuchiatal"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bhimtal+Uttarakhand"
  },

  {
    name: "Naukuchiatal",
    city: "Naukuchiatal",
    state: "Uttarakhand",
    category: "Nature",

    description:
      "Naukuchiatal is a scenic Himalayan lake destination known for its peaceful surroundings, boating and lush green hills.",

    historicalSignificance:
      "The lake is one of the traditional attractions of the Kumaon region and has become an important leisure destination in Uttarakhand.",

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to November",

    fee: "Varies by activity",

    timings: "Daytime",

    nearby: [
      "Bhimtal",
      "Sattal",
      "Nainital",
      "Jungliagaon"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Naukuchiatal+Uttarakhand"
  },


  // ============================================================
  // 10. MADHYA PRADESH
  // ============================================================

  {
    name: "Sanchi Stupa",
    city: "Sanchi",
    state: "Madhya Pradesh",
    category: "Heritage",

    description:
      "Sanchi Stupa is an ancient Buddhist monument famous for its historic stupas, gateways and stone carvings.",

    historicalSignificance:
      "The Great Stupa at Sanchi was originally commissioned by Emperor Ashoka and became an important Buddhist center.",

    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually 6:30 AM - 6:30 PM",

    nearby: [
      "Sanchi Archaeological Museum",
      "Vidisha",
      "Udayagiri Caves"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Sanchi+Stupa+Madhya+Pradesh"
  },

  {
    name: "Pench National Park",
    city: "Seoni",
    state: "Madhya Pradesh",
    category: "Nature",

    description:
      "Pench National Park is a wildlife destination known for forests, tigers, leopards, deer and diverse birdlife.",

    historicalSignificance:
      "The park and its landscape are associated with the forests described in Rudyard Kipling's The Jungle Book.",

    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to June",

    fee: "Safari and entry fees vary",

    timings: "Depends on safari schedule",

    nearby: [
      "Pench Tiger Reserve",
      "Totladoh Dam",
      "Karmajhiri"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Pench+National+Park+Seoni+Madhya+Pradesh"
  },

  {
    name: "Mandu",
    city: "Mandu",
    state: "Madhya Pradesh",
    category: "Heritage",

    description:
      "Mandu is a historic city known for magnificent Afghan-style architecture, palaces, gateways and ancient monuments.",

    historicalSignificance:
      "Mandu developed as an important medieval fortified city and is known for its Afghan-influenced architecture and historic monuments.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f0105d6d8f15?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1600100397608-f0105d6d8f15?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f0105d6d8f15?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f0105d6d8f15?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600100397608-f0105d6d8f15?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by monument",

    timings: "Usually daytime",

    nearby: [
      "Jahaz Mahal",
      "Hindola Mahal",
      "Rani Roopmati Pavilion"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Mandu+Madhya+Pradesh"
  },

  {
    name: "Pachmarhi",
    city: "Pachmarhi",
    state: "Madhya Pradesh",
    category: "Nature",

    description:
      "Pachmarhi is a scenic hill station surrounded by forests, waterfalls, caves and beautiful viewpoints.",

    historicalSignificance:
      "Pachmarhi developed as a hill retreat and is also associated with ancient cave sites and religious traditions.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to June",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Bee Falls",
      "Jata Shankar Cave",
      "Dhoopgarh",
      "Pandav Caves"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Pachmarhi+Madhya+Pradesh"
  },

  {
    name: "Orchha",
    city: "Orchha",
    state: "Madhya Pradesh",
    category: "Heritage",

    description:
      "Orchha is a historic town famous for grand palaces, temples, cenotaphs and medieval Bundela architecture.",

    historicalSignificance:
      "Orchha was founded by the Bundela Rajputs and became an important center of medieval architecture and culture.",

    image:
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Orchha Fort",
      "Jahangir Mahal",
      "Ram Raja Temple",
      "Chaturbhuj Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Orchha+Madhya+Pradesh"
  },

  {
    name: "Bhedaghat",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    category: "Nature",

    description:
      "Bhedaghat is famous for towering marble rocks along the Narmada River and the spectacular Dhuandhar Falls.",

    historicalSignificance:
      "Bhedaghat has long been an important natural and cultural landmark along the Narmada River.",

    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by activity",

    timings: "Usually daytime",

    nearby: [
      "Dhuandhar Falls",
      "Marble Rocks",
      "Narmada River",
      "Chausath Yogini Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bhedaghat+Jabalpur+Madhya+Pradesh"
  },


  // ============================================================
  // 11. RAJASTHAN - ADDITIONAL
  // ============================================================

  {
    name: "Mount Abu",
    city: "Mount Abu",
    state: "Rajasthan",
    category: "Nature",

    description:
      "Mount Abu is Rajasthan's only major hill station, known for its cool climate, forests, lakes and scenic viewpoints.",

    historicalSignificance:
      "Mount Abu has long been associated with religious traditions and is home to the famous Dilwara Jain Temples.",

    image:
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Dilwara Temples",
      "Nakki Lake",
      "Guru Shikhar",
      "Achalgarh Fort"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Mount+Abu+Rajasthan"
  },

  {
    name: "Bundi",
    city: "Bundi",
    state: "Rajasthan",
    category: "Heritage",

    description:
      "Bundi is a historic Rajasthan town famous for its fort, palaces, stepwells and distinctive miniature paintings.",

    historicalSignificance:
      "Bundi was an important Rajput kingdom and is renowned for its historic architecture and Bundi school of miniature painting.",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Taragarh Fort",
      "Garh Palace",
      "Raniji Ki Baori",
      "Nawal Sagar"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bundi+Rajasthan"
  },

  {
    name: "Pushkar",
    city: "Pushkar",
    state: "Rajasthan",
    category: "Religious",

    description:
      "Pushkar is a sacred town surrounding Pushkar Lake and is famous for its temples, ghats and annual camel fair.",

    historicalSignificance:
      "Pushkar is one of India's ancient pilgrimage centers and is especially known for the Brahma Temple and sacred Pushkar Lake.",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Free; some attractions may charge fees",

    timings: "Depends on temple and attraction",

    nearby: [
      "Pushkar Lake",
      "Brahma Temple",
      "Savitri Temple",
      "Ajmer"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Pushkar+Rajasthan"
  },

  {
    name: "Jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    category: "Heritage",

    description:
      "Jodhpur is the Blue City of Rajasthan, famous for its magnificent forts, palaces, blue-painted houses and desert culture.",

    historicalSignificance:
      "Jodhpur was founded in 1459 by Rao Jodha and became an important center of the Marwar kingdom.",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Mehrangarh Fort",
      "Jaswant Thada",
      "Umaid Bhawan Palace",
      "Mandore Gardens"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Jodhpur+Rajasthan"
  },

  {
    name: "Bikaner",
    city: "Bikaner",
    state: "Rajasthan",
    category: "Heritage",

    description:
      "Bikaner is a historic desert city known for grand forts, palaces, havelis and traditional Rajasthani culture.",

    historicalSignificance:
      "Bikaner was founded in 1488 by Rao Bika and became an important Rajput kingdom and trading center.",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Junagarh Fort",
      "Lalgarh Palace",
      "Karni Mata Temple",
      "Rampuria Havelis"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Bikaner+Rajasthan"
  },

  {
    name: "Ranthambore National Park",
    city: "Sawai Madhopur",
    state: "Rajasthan",
    category: "Nature",

    description:
      "Ranthambore National Park is a famous wildlife destination known for Bengal tigers, forests, lakes and historic ruins.",

    historicalSignificance:
      "The park surrounds the historic Ranthambore Fort and forms an important tiger conservation landscape.",

    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to June",

    fee: "Safari and entry charges apply",

    timings: "Depends on safari schedule",

    nearby: [
      "Ranthambore Fort",
      "Padam Lake",
      "Surwal Lake",
      "Trinetra Ganesh Temple"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Ranthambore+National+Park+Rajasthan"
  },

  {
    name: "Kumbhalgarh Fort",
    city: "Kumbhalgarh",
    state: "Rajasthan",
    category: "Heritage",

    description:
      "Kumbhalgarh Fort is a massive hill fort famous for its long defensive walls, rugged landscape and historic architecture.",

    historicalSignificance:
      "The fort was built in the 15th century under Rana Kumbha and is an important part of Mewar's history.",

    image:
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime",

    nearby: [
      "Kumbhalgarh Wildlife Sanctuary",
      "Badal Mahal",
      "Ranakpur",
      "Haldi Ghati"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Kumbhalgarh+Fort+Rajasthan"
  },

  {
    name: "Ranakpur Jain Temple",
    city: "Ranakpur",
    state: "Rajasthan",
    category: "Religious",

    description:
      "Ranakpur Jain Temple is a magnificent marble temple complex famous for its intricate carvings and hundreds of beautifully decorated pillars.",

    historicalSignificance:
      "The temple was built during the 15th century and is one of the most important Jain architectural landmarks in Rajasthan.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry rules and charges vary",

    timings: "Depends on temple schedule",

    nearby: [
      "Kumbhalgarh",
      "Sadri",
      "Desuri",
      "Kumbhalgarh Wildlife Sanctuary"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Ranakpur+Jain+Temple+Rajasthan"
  },


  // ============================================================
  // 12. HIMACHAL PRADESH
  // ============================================================

  {
    name: "Spiti Valley",
    city: "Kaza",
    state: "Himachal Pradesh",
    category: "Adventure",

    description:
      "Spiti Valley is a high-altitude Himalayan valley known for dramatic mountains, ancient monasteries, remote villages and rugged landscapes.",

    historicalSignificance:
      "Spiti has been an important cultural and Buddhist region of the western Himalayas for centuries.",

    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "May to October",

    fee: "Varies by attraction",

    timings: "Depends on location and weather",

    nearby: [
      "Key Monastery",
      "Chandratal Lake",
      "Kibber"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Spiti+Valley+Himachal+Pradesh"
  },

  {
    name: "Tirthan Valley",
    city: "Banjar",
    state: "Himachal Pradesh",
    category: "Nature",

    description:
      "Tirthan Valley is a peaceful Himalayan destination known for rivers, forests, mountain villages and outdoor activities.",

    historicalSignificance:
      "The valley lies near the Great Himalayan National Park region and reflects the traditional mountain culture of Himachal Pradesh.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to June and September to November",

    fee: "Varies by activity",

    timings: "Depends on attraction",

    nearby: [
      "Great Himalayan National Park",
      "Jibhi",
      "Jalori Pass"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Tirthan+Valley+Himachal+Pradesh"
  },


  // ============================================================
  // 13. NORTHEAST INDIA
  // ============================================================

  {
    name: "Ziro Valley",
    city: "Ziro",
    state: "Arunachal Pradesh",
    category: "Nature",

    description:
      "Ziro Valley is a scenic Himalayan valley famous for green rice fields, pine forests, traditional villages and peaceful landscapes.",

    historicalSignificance:
      "Ziro is home to the Apatani cultural landscape, known for its distinctive traditions and sustainable agricultural practices.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "March to May and September to October",

    fee: "Varies by attraction",

    timings: "Daytime",

    nearby: [
      "Apatani Villages",
      "Talley Valley",
      "Hapoli"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Ziro+Valley+Arunachal+Pradesh"
  },

  {
    name: "Majuli Island",
    city: "Majuli",
    state: "Assam",
    category: "Nature",

    description:
      "Majuli is a large river island on the Brahmaputra known for its natural beauty, cultural traditions, satras and unique island lifestyle.",

    historicalSignificance:
      "Majuli became an important center of the Neo-Vaishnavite cultural tradition associated with Srimanta Sankardeva and his followers.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on local attractions",

    nearby: [
      "Kamalabari Satra",
      "Auniati Satra",
      "Samaguri Satra"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Majuli+Island+Assam"
  },

  {
    name: "Mawlynnong",
    city: "Mawlynnong",
    state: "Meghalaya",
    category: "Nature",

    description:
      "Mawlynnong is a picturesque village in Meghalaya known for its clean surroundings, lush greenery, living root bridges and beautiful views of the surrounding hills.",

    historicalSignificance:
      "Mawlynnong represents the traditional community-based environmental practices of Meghalaya and has become a popular destination for sustainable tourism.",

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by local attractions",

    timings: "Daytime",

    nearby: [
      "Living Root Bridges",
      "Balancing Rock",
      "Dawki",
      "Nongriat"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Mawlynnong+Meghalaya"
  },

  {
    name: "Dawki",
    city: "Dawki",
    state: "Meghalaya",
    category: "Adventure",

    description:
      "Dawki is a scenic border town famous for the crystal-clear Umngot River, surrounding hills and boating experiences.",

    historicalSignificance:
      "Dawki has historically been an important trade route between the Khasi Hills and present-day Bangladesh.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to April",

    fee: "Varies by activity",

    timings: "Daytime",

    nearby: [
      "Umngot River",
      "Mawlynnong",
      "Dawki Bridge",
      "Bangladesh Border"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Dawki+Meghalaya"
  },


  // ============================================================
  // 14. ANDAMAN
  // ============================================================

  {
    name: "Havelock Island",
    city: "Havelock Island",
    state: "Andaman and Nicobar Islands",
    category: "Adventure",

    description:
      "Havelock Island is a popular island destination known for tropical beaches, clear waters, coral reefs and water sports.",

    historicalSignificance:
      "The island is part of the Andaman archipelago and has developed into one of India's best-known destinations for marine tourism.",

    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Varies by activity",

    timings: "Depends on attraction and activity",

    nearby: [
      "Radhanagar Beach",
      "Elephant Beach",
      "Kalapathar Beach"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Havelock+Island+Andaman+Nicobar"
  },

  {
    name: "Andaman Cellular Jail",
    city: "Port Blair",
    state: "Andaman and Nicobar Islands",
    category: "Heritage",

    description:
      "Cellular Jail is a historic prison in Port Blair known for its important role in India's freedom struggle and its distinctive cellular architecture.",

    historicalSignificance:
      "The prison was built during the British colonial period and was used to imprison Indian freedom fighters.",

    image:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb9d94?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb9d94?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb9d94?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb9d94?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb9d94?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to May",

    fee: "Entry fee varies",

    timings: "Usually daytime; light and sound show timings vary",

    nearby: [
      "Corbyn's Cove Beach",
      "Ross Island",
      "Samudrika Naval Marine Museum"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Cellular+Jail+Port+Blair"
  },


  // ============================================================
  // 15. OTHER DESTINATIONS
  // ============================================================

  {
    name: "Diu Fort",
    city: "Diu",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    category: "Heritage",

    description:
      "Diu Fort is a historic coastal fortress overlooking the Arabian Sea, known for its massive walls, lighthouse and sea views.",

    historicalSignificance:
      "The fort was constructed by the Portuguese in the 16th century and remained an important defensive structure on the western coast.",

    image:
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Usually free entry",

    timings: "Daytime",

    nearby: [
      "Diu Beach",
      "Naida Caves",
      "St. Paul's Church"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Diu+Fort+Diu"
  },

  {
    name: "Mysore Palace",
    city: "Mysuru",
    state: "Karnataka",
    category: "Heritage",

    description:
      "Mysore Palace is one of India's most spectacular royal residences, famous for its grand architecture, interiors and illuminated evening displays.",

    historicalSignificance:
      "The palace was the residence of the Wadiyar dynasty and is a major symbol of Mysuru's royal heritage.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Entry fee varies",

    timings: "Usually daytime and evening illumination",

    nearby: [
      "Chamundi Hill",
      "Devaraja Market",
      "St. Philomena's Cathedral",
      "Karanji Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Mysore+Palace+Karnataka"
  },

  {
    name: "Thanjavur",
    city: "Thanjavur",
    state: "Tamil Nadu",
    category: "Heritage",

    description:
      "Thanjavur is a historic city famous for the Brihadisvara Temple, classical arts, traditional paintings and Chola heritage.",

    historicalSignificance:
      "Thanjavur was a major capital of the Chola Empire and is home to the UNESCO-listed Brihadisvara Temple.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Brihadisvara Temple",
      "Thanjavur Palace",
      "Saraswathi Mahal Library",
      "Gangaikonda Cholapuram"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Thanjavur+Tamil+Nadu"
  },

  {
    name: "Yercaud",
    city: "Yercaud",
    state: "Tamil Nadu",
    category: "Nature",

    description:
      "Yercaud is a peaceful hill station in the Eastern Ghats known for coffee plantations, forests, viewpoints and a scenic lake.",

    historicalSignificance:
      "Yercaud developed as a hill retreat during the colonial period and became an important plantation region.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "October to June",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Yercaud Lake",
      "Pagoda Point",
      "Lady's Seat",
      "Kiliyur Falls"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Yercaud+Tamil+Nadu"
  },

  {
    name: "Chikmagalur",
    city: "Chikmagalur",
    state: "Karnataka",
    category: "Nature",

    description:
      "Chikmagalur is a scenic hill destination known for coffee plantations, mountains, waterfalls and lush green landscapes.",

    historicalSignificance:
      "Chikmagalur is closely associated with the development of coffee cultivation in Karnataka and the Western Ghats.",

    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",

    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80"
    ],

    bestTime: "September to March",

    fee: "Varies by attraction",

    timings: "Depends on attraction",

    nearby: [
      "Mullayanagiri",
      "Baba Budangiri",
      "Jhari Falls",
      "Hirekolale Lake"
    ],

    location:
      "https://www.google.com/maps/search/?api=1&query=Chikmagalur+Karnataka"
  },

];


/*
|--------------------------------------------------------------------------
| NORMALIZE DESTINATION
|--------------------------------------------------------------------------
|
| This guarantees that every document has the fields required by your
| destination details page.
|
*/

function normalizeDestination(destination) {
  const normalized = {
    name: destination.name?.trim() || "Unknown Destination",

    state: destination.state?.trim() || "",

    city: destination.city?.trim() || "",

    category: destination.category?.trim() || "Other",

    description:
      destination.description?.trim() ||
      "Explore this beautiful destination in India.",

    historicalSignificance:
      destination.historicalSignificance?.trim() ||
      "This destination has cultural, historical or natural significance.",

    image:
      destination.image ||
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    images:
      Array.isArray(destination.images) &&
      destination.images.length > 0
        ? destination.images
        : [
            destination.image ||
              "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
          ],

    bestTime:
      destination.bestTime?.trim() ||
      "October to March",

    fee:
      destination.fee?.trim() ||
      "Entry fee varies",

    timings:
      destination.timings?.trim() ||
      "Depends on attraction",

    nearby:
      Array.isArray(destination.nearby)
        ? destination.nearby
        : [],

    location:
      destination.location ||
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${destination.name} ${destination.city} ${destination.state}`
      )}`
  };

  return normalized;
}


/*
|--------------------------------------------------------------------------
| SEED DATABASE
|--------------------------------------------------------------------------
*/

async function seedDatabase() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    console.log("Connecting to MongoDB Atlas...");

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "travelbharat",
    });

    console.log("MongoDB Atlas connected successfully");
    console.log("DATABASE NAME:", mongoose.connection.name);
    console.log("DATABASE HOST:", mongoose.connection.host);

    console.log("----------------------------------------");
    console.log("Starting destination seeding...");
    console.log("----------------------------------------");


    /*
    |--------------------------------------------------------------------------
    | Normalize all destinations first
    |--------------------------------------------------------------------------
    */

    const normalizedDestinations =
      destinations.map(normalizeDestination);


    /*
    |--------------------------------------------------------------------------
    | Remove duplicates from the input array
    |--------------------------------------------------------------------------
    |
    | Duplicate identity:
    | name + city + state
    |
    */

    const uniqueDestinations = [];

    const seen = new Set();

    for (const destination of normalizedDestinations) {
      const uniqueKey = [
        destination.name.toLowerCase().trim(),
        destination.city.toLowerCase().trim(),
        destination.state.toLowerCase().trim(),
      ].join("|");

      if (seen.has(uniqueKey)) {
        console.log(
          `Duplicate in seed array - skipped: ${destination.name}`
        );

        continue;
      }

      seen.add(uniqueKey);

      uniqueDestinations.push(destination);
    }


    /*
    |--------------------------------------------------------------------------
    | Insert destinations
    |--------------------------------------------------------------------------
    */

    let added = 0;
    let skipped = 0;

    for (const destination of uniqueDestinations) {

      const existing = await Destination.findOne({
        name: destination.name,
        city: destination.city,
        state: destination.state,
      });


      if (existing) {

        console.log(
          `Already exists - skipped: ${destination.name}`
        );

        skipped++;

      } else {

        await Destination.create(destination);

        console.log(
          `Added successfully: ${destination.name}`
        );

        added++;
      }
    }


    /*
    |--------------------------------------------------------------------------
    | Finished
    |--------------------------------------------------------------------------
    */

    console.log("----------------------------------------");
    console.log("SEEDING COMPLETED");
    console.log("----------------------------------------");

    console.log("Total in source array:", destinations.length);
    console.log("Unique destinations:", uniqueDestinations.length);
    console.log("Added:", added);
    console.log("Skipped:", skipped);

    console.log("----------------------------------------");


    await mongoose.connection.close();

    console.log("MongoDB connection closed successfully");

  } catch (error) {

    console.error("----------------------------------------");
    console.error("SEEDING ERROR");
    console.error("----------------------------------------");

    console.error(error.message);

    try {
      await mongoose.connection.close();
    } catch (closeError) {
      // Ignore connection close errors
    }

    process.exit(1);
  }
}


seedDatabase();
