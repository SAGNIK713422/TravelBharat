const destinations = [
  // =========================
  // WEST BENGAL
  // =========================

  {
    id: 1,
    name: "Victoria Memorial",
    state: "West Bengal",
    city: "Kolkata",
    category: "Heritage",
    description:
      "Victoria Memorial is a grand marble monument and museum in Kolkata, known for its architecture, galleries and collections related to India's colonial-era history.",
    historicalSignificance:
      "The monument was built in memory of Queen Victoria and was completed in the early twentieth century.",
    bestTimeToVisit: "October to March",
    entryFee: "Check current official ticket information",
    timings: "Generally closed on Mondays; timings may change",
    nearbyAttractions: [
      "Indian Museum",
      "St. Paul's Cathedral",
      "Maidan",
      "Birla Planetarium"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Victoria+Memorial+Kolkata",
    images: [
      "/victoria.jpg"
    ]
  },

  {
    id: 2,
    name: "Darjeeling Himalayan Railway",
    state: "West Bengal",
    city: "Darjeeling",
    category: "Heritage",
    description:
      "The Darjeeling Himalayan Railway is a historic mountain railway famous for its narrow-gauge route through the Himalayan foothills.",
    historicalSignificance:
      "The railway is a UNESCO World Heritage property and represents an important achievement in mountain railway engineering.",
    bestTimeToVisit: "October to December and March to May",
    entryFee: "Varies by train and service",
    timings: "Varies by service",
    nearbyAttractions: [
      "Batasia Loop",
      "Ghoom Monastery",
      "Tiger Hill",
      "Darjeeling Mall"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Darjeeling+Himalayan+Railway",
    images: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  {
    id: 3,
    name: "Sundarbans National Park",
    state: "West Bengal",
    city: "South 24 Parganas",
    category: "Nature",
    description:
      "Sundarbans National Park is a vast mangrove ecosystem famous for its waterways, biodiversity and Bengal tiger habitat.",
    historicalSignificance:
      "The Sundarbans form one of the world's most significant mangrove ecosystems and are recognized as a UNESCO World Heritage Site.",
    bestTimeToVisit: "November to February",
    entryFee: "Varies according to permit and tour",
    timings: "Depends on forest permissions and boat schedules",
    nearbyAttractions: [
      "Sajnekhali",
      "Sudhanyakhali",
      "Dobanki",
      "Gosaba"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Sundarbans+National+Park",
    images: [
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // RAJASTHAN
  // =========================

  {
    id: 4,
    name: "Amber Fort",
    state: "Rajasthan",
    city: "Jaipur",
    category: "Heritage",
    description:
      "Amber Fort is a spectacular hilltop fort known for its grand courtyards, palaces, gateways and views of the surrounding landscape.",
    historicalSignificance:
      "The fort complex reflects the architectural traditions of the Rajput rulers and later Mughal influences.",
    bestTimeToVisit: "October to March",
    entryFee: "Check current official ticket information",
    timings: "Generally daytime visiting hours",
    nearbyAttractions: [
      "Jaigarh Fort",
      "Jal Mahal",
      "Hawa Mahal",
      "City Palace"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Amber+Fort+Jaipur",
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  {
    id: 5,
    name: "Hawa Mahal",
    state: "Rajasthan",
    city: "Jaipur",
    category: "Heritage",
    description:
      "Hawa Mahal is one of Jaipur's most recognizable landmarks, famous for its distinctive honeycomb-like facade and numerous windows.",
    historicalSignificance:
      "The palace was built in the eighteenth century as an extension of the City Palace complex.",
    bestTimeToVisit: "October to March",
    entryFee: "Check current official ticket information",
    timings: "Generally daytime visiting hours",
    nearbyAttractions: [
      "City Palace",
      "Jantar Mantar",
      "Albert Hall Museum",
      "Amber Fort"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Hawa+Mahal+Jaipur",
    images: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // UTTAR PRADESH
  // =========================

  {
    id: 6,
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    city: "Agra",
    category: "Heritage",
    description:
      "The Taj Mahal is an iconic white marble mausoleum on the banks of the Yamuna River and one of India's most celebrated monuments.",
    historicalSignificance:
      "The monument was commissioned by Mughal emperor Shah Jahan in memory of Mumtaz Mahal and is recognized as a UNESCO World Heritage Site.",
    bestTimeToVisit: "October to March",
    entryFee: "Check current official ticket information",
    timings: "Generally closed on Fridays; timings can change",
    nearbyAttractions: [
      "Agra Fort",
      "Mehtab Bagh",
      "Itmad-ud-Daulah",
      "Agra Old City"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // KERALA
  // =========================

  {
    id: 7,
    name: "Munnar",
    state: "Kerala",
    city: "Idukki",
    category: "Nature",
    description:
      "Munnar is a scenic hill destination known for tea plantations, misty mountains, valleys and cool weather.",
    historicalSignificance:
      "The region developed as an important tea-growing area during the colonial period and remains closely associated with Kerala's plantation landscape.",
    bestTimeToVisit: "September to May",
    entryFee: "Varies by attraction",
    timings: "Varies by attraction",
    nearbyAttractions: [
      "Eravikulam National Park",
      "Mattupetty Dam",
      "Tea Museum",
      "Top Station"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Munnar+Kerala",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  {
    id: 8,
    name: "Alappuzha Backwaters",
    state: "Kerala",
    city: "Alappuzha",
    category: "Nature",
    description:
      "The Alappuzha backwaters offer a network of canals, lagoons and waterways surrounded by villages and lush landscapes.",
    historicalSignificance:
      "The backwater network has long supported local transport, agriculture, fishing and traditional life in Kerala.",
    bestTimeToVisit: "October to February",
    entryFee: "Varies by boat service",
    timings: "Depends on boat operator",
    nearbyAttractions: [
      "Alappuzha Beach",
      "Kuttanad",
      "Kumarakom",
      "Pathiramanal Island"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Alappuzha+Backwaters",
    images: [
      "https://images.unsplash.com/photo-1602307500694-2a7c9d2c0d13?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // GOA
  // =========================

  {
    id: 9,
    name: "Basilica of Bom Jesus",
    state: "Goa",
    city: "Old Goa",
    category: "Religious",
    description:
      "The Basilica of Bom Jesus is a historic church in Old Goa and an important example of Portuguese-era religious architecture.",
    historicalSignificance:
      "The basilica is associated with the life and remains of St. Francis Xavier and is part of the Churches and Convents of Goa UNESCO World Heritage property.",
    bestTimeToVisit: "November to February",
    entryFee: "Generally no standard entry fee for the basilica",
    timings: "May vary according to religious services",
    nearbyAttractions: [
      "Se Cathedral",
      "Church of St. Cajetan",
      "Archaeological Museum",
      "Old Goa churches"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Basilica+of+Bom+Jesus+Goa",
    images: [
      "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // HIMACHAL PRADESH
  // =========================

  {
    id: 10,
    name: "Shimla",
    state: "Himachal Pradesh",
    city: "Shimla",
    category: "Nature",
    description:
      "Shimla is a Himalayan hill station known for mountain scenery, colonial architecture and pleasant summer weather.",
    historicalSignificance:
      "Shimla served as the summer capital of British India and contains numerous buildings reflecting colonial-era architecture.",
    bestTimeToVisit: "March to June and October to December",
    entryFee: "Varies by attraction",
    timings: "Varies by attraction",
    nearbyAttractions: [
      "The Ridge",
      "Mall Road",
      "Jakhoo Temple",
      "Kufri"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Shimla+Himachal+Pradesh",
    images: [
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // JAMMU & KASHMIR
  // =========================

  {
    id: 11,
    name: "Dal Lake",
    state: "Jammu and Kashmir",
    city: "Srinagar",
    category: "Nature",
    description:
      "Dal Lake is one of Srinagar's most famous attractions, known for its houseboats, shikaras, floating gardens and mountain scenery.",
    historicalSignificance:
      "The lake has played an important role in the cultural, economic and tourism history of the Kashmir Valley.",
    bestTimeToVisit: "March to October",
    entryFee: "Varies by activity",
    timings: "Boat services vary",
    nearbyAttractions: [
      "Mughal Gardens",
      "Nigeen Lake",
      "Shankaracharya Temple",
      "Pari Mahal"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Dal+Lake+Srinagar",
    images: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // MAHARASHTRA
  // =========================

  {
    id: 12,
    name: "Gateway of India",
    state: "Maharashtra",
    city: "Mumbai",
    category: "Heritage",
    description:
      "The Gateway of India is a prominent waterfront monument overlooking Mumbai Harbour.",
    historicalSignificance:
      "The monument was constructed during the British period and became an important symbol of Mumbai's colonial-era history.",
    bestTimeToVisit: "October to March",
    entryFee: "No standard monument entry fee",
    timings: "Open area; access may vary",
    nearbyAttractions: [
      "Taj Mahal Palace",
      "Colaba Causeway",
      "Elephanta Caves",
      "Marine Drive"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Gateway+of+India+Mumbai",
    images: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // UTTARAKHAND
  // =========================

  {
    id: 13,
    name: "Valley of Flowers",
    state: "Uttarakhand",
    city: "Chamoli",
    category: "Adventure",
    description:
      "Valley of Flowers is a high-altitude Himalayan valley known for alpine flowers, dramatic landscapes and trekking opportunities.",
    historicalSignificance:
      "The valley is part of a protected Himalayan ecosystem and is recognized as a UNESCO World Heritage Site together with Nanda Devi National Park.",
    bestTimeToVisit: "July to September",
    entryFee: "Permit and park charges may apply",
    timings: "Subject to park regulations",
    nearbyAttractions: [
      "Hemkund Sahib",
      "Ghangaria",
      "Nanda Devi National Park"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Valley+of+Flowers+Uttarakhand",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // TAMIL NADU
  // =========================

  {
    id: 14,
    name: "Meenakshi Amman Temple",
    state: "Tamil Nadu",
    city: "Madurai",
    category: "Religious",
    description:
      "Meenakshi Amman Temple is a major Hindu temple complex famous for its elaborate towers, sculptures and vibrant architectural details.",
    historicalSignificance:
      "The temple complex has a long history and developed significantly under the Nayak rulers of Madurai.",
    bestTimeToVisit: "October to March",
    entryFee: "Check current temple guidelines",
    timings: "Varies according to worship schedules",
    nearbyAttractions: [
      "Thirumalai Nayakkar Palace",
      "Gandhi Memorial Museum",
      "Madurai markets"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Meenakshi+Amman+Temple+Madurai",
    images: [
      "https://images.unsplash.com/photo-1600100397608-f010cb8dba32?auto=format&fit=crop&w=1200&q=85"
    ]
  },

  // =========================
  // LADAKH
  // =========================

  {
    id: 15,
    name: "Pangong Lake",
    state: "Ladakh",
    city: "Leh",
    category: "Adventure",
    description:
      "Pangong Lake is a high-altitude Himalayan lake famous for its changing shades of blue and dramatic mountain surroundings.",
    historicalSignificance:
      "The lake region has long been part of the trans-Himalayan landscape and has gained international recognition as a major high-altitude destination.",
    bestTimeToVisit: "May to September",
    entryFee: "Permits may apply depending on the area",
    timings: "Subject to weather and local regulations",
    nearbyAttractions: [
      "Chang La",
      "Spangmik",
      "Man",
      "Merak"
    ],
    location:
      "https://www.google.com/maps/search/?api=1&query=Pangong+Lake+Ladakh",
    images: [
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1200&q=85"
    ]
  }
];

export default destinations;
