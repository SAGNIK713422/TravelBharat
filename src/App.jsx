import { useEffect, useState } from "react";

import "./App.css";
import Admin from "./Admin";
import AdminLogin from "./AdminLogin";
const destinations = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const categories = ["Heritage", "Nature", "Religious", "Adventure"];

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [places, setPlaces] = useState(destinations);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

console.log("PLACES:", places);

 useEffect(() => {
  fetch("https://travelbharat-qb9n.onrender.com/api/destinations")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load destinations");
      }

      return response.json();
    })
    .then((data) => {
      setPlaces(data);
      setError("");
    })
    .catch((error) => {
      console.error("Failed to load destinations:", error);
      setError("Unable to load destinations. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

console.log("PLACE IDS:", places.map((place) => place._id));

  const filteredPlaces = places.filter((place) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      place.name.toLowerCase().includes(searchText) ||
      place.state.toLowerCase().includes(searchText) ||
      place.city.toLowerCase().includes(searchText) ||
      place.category.toLowerCase().includes(searchText);

    const matchesState =
      stateFilter === "" || place.state === stateFilter;
const matchesCity =
    cityFilter === "" || place.city === cityFilter;
    const matchesCategory =
      categoryFilter === "" ||
      place.category === categoryFilter;

    return (
    matchesSearch &&
    matchesState &&
    matchesCity &&
    matchesCategory
    );
  });

  function handleSearch(event) {
    event.preventDefault();

    document
      .getElementById("destinations")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }
  if (showAdmin) {
  // Show login page first
  if (!adminLoggedIn) {
    return (
      <div>
        <AdminLogin
          onLogin={() => setAdminLoggedIn(true)}
        />

        <button
          className="back-home-button"
          onClick={() => setShowAdmin(false)}
        >
          ← Back to TravelBharat
        </button>
      </div>
    );
  }

  // Show admin dashboard after successful login
  return (
    <div>
      <button
        className="back-home-button"
        onClick={() => {
          setAdminLoggedIn(false);
          setShowAdmin(false);
        }}
      >
        ← Back to TravelBharat
      </button>

      <Admin />
    </div>
  );
}

  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">✈ TravelBharat</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#states">States & UTs</a>
          <a href="#destinations">Destinations</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
          <button
    className="admin-nav-button"
  onClick={() => {
  setShowAdmin(true);
}}

  >
    Admin
  </button>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-content">

          <div className="hero-badge">
            🇮🇳 DISCOVER INCREDIBLE INDIA
          </div>

          <h1>
            Explore India,
            <br />
            <span>State by State.</span>
          </h1>

          <p>
            Discover tourist destinations, rich heritage,
            beautiful landscapes, culture and hidden gems
            from every state and union territory of India.
          </p>

          <form
            className="search-box"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search places, states or categories..."
            />

            <button type="submit">
              🔎 Search
            </button>
          </form>

        </div>
      </section>

      <section className="section" id="categories">

        <div className="section-heading">
          <p>DISCOVER YOUR EXPERIENCE</p>
          <h2>Explore by Category</h2>
        </div>

        <div className="category-grid">

          {categories.map((category) => (
            <button
              className={
                categoryFilter === category
                  ? "category-card active"
                  : "category-card"
              }
              key={category}
              onClick={() =>
                setCategoryFilter(category)
              }
            >
              <div className="category-icon">
                {category === "Heritage" && "🏛️"}
                {category === "Nature" && "🌿"}
                {category === "Religious" && "🛕"}
                {category === "Adventure" && "🏔️"}
              </div>

              <h3>{category}</h3>

              <p>
                Explore India's {category.toLowerCase()}
                {" "}destinations and experiences.
              </p>
            </button>
          ))}

        </div>
      </section>

      <section className="section" id="states">

        <div className="section-heading">
          <p>EXPLORE INDIA</p>
          <h2>States & Union Territories</h2>
        </div>

        <select
          className="state-select"
          value={stateFilter}
          onChange={(event) =>
            setStateFilter(event.target.value)
          }
        >
        
          <option value="">
            All States & Union Territories
          </option>

          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
  className="state-select"
  value={cityFilter}
  onChange={(event) =>
    setCityFilter(event.target.value)
  }
>
  <option value="">
    All Cities
  </option>

  {[...new Set(
    places
      .filter(
        (place) =>
          stateFilter === "" ||
          place.state === stateFilter
      )
      .map((place) => place.city)
  )]
    .sort()
    .map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
</select>


<button
  className="clear-button"
  onClick={() => {
    setSearch("");
    setStateFilter("");
    setCategoryFilter("");
  }}
>
  Clear All Filters
</button>

      </section>

      <section className="section" id="destinations">

        <div className="section-heading">
          <p>TRAVEL INSPIRATION</p>
          <h2>Tourist Destinations</h2>
        </div>
{loading && (
  <div className="admin-loading">
    Loading destinations...
  </div>
)}

{error && (
  <div className="no-results">
    <h3>⚠️ {error}</h3>
  </div>
)}

        <div className="result-count">
          {filteredPlaces.length} destination
          {filteredPlaces.length !== 1 ? "s" : ""} found
        </div>

        {filteredPlaces.length === 0 ? (
          <div className="no-results">
            <h3>🔎 No destinations found</h3>
            <p>
              Try searching another place, state or category.
            </p>
          </div>
        ) : (
          <div className="destination-grid">

            {filteredPlaces.map((place, index) => (
              <div
                className="destination-card"
                key={place._id || index}

              >

                <img
  src={place.image}
  alt={place.name}
  onError={(event) => {
    event.currentTarget.src =
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80";
  }}
/>


                <div className="destination-content">

                  <span className="category-label">
                    {place.category}
                  </span>

                  <h3>{place.name}</h3>

                  <p>
                    📍 {place.city}, {place.state}
                  </p>

                  <p>{place.description}</p>

                  <button
                    className="details-button"
                    onClick={() =>
                      setSelectedPlace(place)
                    }
                  >
                    View Details →
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}

      </section>

      <section className="section" id="about">

        <div className="section-heading">
          <p>WHY TRAVELBHARAT?</p>
          <h2>Everything You Need to Discover India</h2>
        </div>

        <div className="feature-grid">

          <div className="feature">
            <div>🇮🇳</div>
            <h3>State-wise Discovery</h3>
            <p>
              Browse tourist destinations organized by
              Indian states and union territories.
            </p>
          </div>

          <div className="feature">
            <div>🔎</div>
            <h3>Easy Search</h3>
            <p>
              Search destinations by place name, state,
              city or category.
            </p>
          </div>

          <div className="feature">
            <div>📸</div>
            <h3>Rich Galleries</h3>
            <p>
              Discover destinations through informative
              image galleries.
            </p>
          </div>

          <div className="feature">
            <div>🧭</div>
            <h3>Travel Information</h3>
            <p>
              Find timings, entry fees, best time to visit
              and nearby attractions.
            </p>
          </div>

        </div>
      </section>

      <footer>

        <div>
          <h3>✈ TravelBharat</h3>
          <p>Explore India, one state at a time.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <p>States & UTs</p>
          <p>Destinations</p>
          <p>Categories</p>
        </div>

        <div>
          <h4>Project</h4>
          <p>Tourism Information Platform</p>
        </div>

        <p>© 2026 TravelBharat</p>

      </footer>

      {selectedPlace && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPlace(null)}
        >

          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedPlace(null)
              }
            >
              ✕
            </button>

            {/* Main Image */}
<img
  src={selectedPlace.image}
  alt={selectedPlace.name}
  className="modal-image"
  onError={(event) => {
    event.currentTarget.src =
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80";
  }}
/>


{/* Gallery Images */}
{selectedPlace.images &&
  Array.isArray(selectedPlace.images) &&
  selectedPlace.images.length > 0 && (
    <div className="modal-gallery">
      <h3>Photo Gallery</h3>

      <div className="gallery-grid">
        {selectedPlace.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${selectedPlace.name} - Gallery ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  )}


            <div className="modal-content">

              <span className="category-label">
                {selectedPlace.category}
              </span>

              <h2>{selectedPlace.name}</h2>

              <p>
                📍 {selectedPlace.city},{" "}
                {selectedPlace.state}
              </p>

              <p>
                {selectedPlace.description}
              </p>
{selectedPlace.historicalSignificance && (
  <div className="historical-section">
    <h3>Historical Significance</h3>
    <p>{selectedPlace.historicalSignificance}</p>
  </div>
)}

              <div className="travel-details">

                <div>
                  <strong>Best Time</strong>
                  <span>
                    {selectedPlace.bestTime}
                  </span>
                </div>

                <div>
                  <strong>Entry Fee</strong>
                  <span>
                    {selectedPlace.fee}
                  </span>
                </div>

                <div>
                  <strong>Timings</strong>
                  <span>
                    {selectedPlace.timings}
                  </span>
                </div>

              </div>
{selectedPlace.nearby &&
  (Array.isArray(selectedPlace.nearby)
    ? selectedPlace.nearby.length > 0
    : selectedPlace.nearby.trim() !== "") && (
    <div className="nearby-section">
      <h3>Nearby Attractions</h3>

      <ul>
        {(Array.isArray(selectedPlace.nearby)
          ? selectedPlace.nearby
          : selectedPlace.nearby.split(",")
        ).map((place, index) => (
          <li key={index}>
            📍 {place.trim()}
          </li>
        ))}
      </ul>
    </div>
  )}


              <a
                className="map-button"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${selectedPlace.name}, ${selectedPlace.city}, ${selectedPlace.state}, India`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                📍 View Location on Map
              </a>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}

export default App;
