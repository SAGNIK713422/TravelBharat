import { useEffect, useState } from "react";
function getAuthHeaders() {
  const token = localStorage.getItem("adminToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
function Admin() {
    const token = localStorage.getItem("adminToken");

  if (!token) {
    window.location.href = "/admin-login";
    return null;
  }
    function handleLogout() {
  localStorage.removeItem("adminToken");
  window.location.href = "/admin-login";
}

  const [destinations, setDestinations] = useState([]);
const [loading, setLoading] = useState(true);


  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

useEffect(() => {
  fetch("http://localhost:5000/api/destinations")
    .then((response) => response.json())
    .then((data) => {
      console.log("GET DESTINATIONS:", data);
      setDestinations(data);
    })
    .catch((error) => {
      console.error("Failed to load destinations:", error);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);


const [newDestination, setNewDestination] = useState({
  name: "",
  state: "",
  city: "",
  category: "",
  description: "",
  historicalSignificance: "",
  image: "",
  images: "",
  bestTime: "",
  fee: "",
  timings: "",
  nearby: "",
  location: "",
});



  function handleChange(event) {
    setNewDestination({
      ...newDestination,
      [event.target.name]: event.target.value,
    });
  }

 async function addDestination(event) {
  event.preventDefault();

 if (
  !newDestination.name.trim() ||
  !newDestination.state.trim() ||
  !newDestination.city.trim() ||
  !newDestination.category ||
  !newDestination.description.trim() ||
  !newDestination.image.trim()
) {
  alert("Please fill all required fields.");
  return;
}

  try {
    const response = await fetch(
      "http://localhost:5000/api/destinations",
      {
        method: "POST",
        headers: getAuthHeaders(),

        body: JSON.stringify({
  ...newDestination,

  images: newDestination.images
    ? newDestination.images
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [],

  nearby: newDestination.nearby
    ? newDestination.nearby
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [],
}),


      }
    );

    if (!response.ok) {
      throw new Error("Failed to add destination");
    }

    const savedDestination = await response.json();

    setDestinations([
      ...destinations,
      savedDestination,
    ]);

    setNewDestination({
  name: "",
  state: "",
  city: "",
  category: "",
  description: "",
  historicalSignificance: "",
  image: "",
  bestTime: "",
  fee: "",
  timings: "",
  nearby: "",
  location: ""
});


    setShowForm(false);

    alert("Destination added successfully!");
  } catch (error) {
    console.error("Error adding destination:", error);
    alert("Failed to add destination.");
  }
}


async function editDestination(event) {
  event.preventDefault();

  if (
  !newDestination.name.trim() ||
  !newDestination.state.trim() ||
  !newDestination.city.trim() ||
  !newDestination.category ||
  !newDestination.description.trim() ||
  !newDestination.image.trim()
) {
  alert("Please fill all required fields.");
  return;
}


  try {
    console.log("Updating destination:", newDestination);

    const response = await fetch(
  `http://localhost:5000/api/destinations/${editingId}`,
  {
    method: "PUT",
   headers: getAuthHeaders(),

    body: JSON.stringify({
      ...newDestination,

      images: newDestination.images
        ? newDestination.images
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [],

      nearby: newDestination.nearby
        ? newDestination.nearby
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [],
    }),
  }
);

    if (!response.ok) {
      throw new Error("Failed to update destination");
    }

    const updatedDestination = await response.json();

    console.log("UPDATED RESPONSE:", updatedDestination);

    setDestinations(
      destinations.map((destination) =>
        destination._id === editingId
          ? updatedDestination
          : destination
      )
    );

    setNewDestination({
      name: "",
      state: "",
      city: "",
      category: "",
      description: "",
      historicalSignificance: "",
      image: "",
      bestTime: "",
      fee: "",
      timings: "",
      nearby: "",
      location: "",
    });

    setEditingId(null);
    setShowForm(false);

    alert("Destination updated successfully!");
  } catch (error) {
    console.error("Error updating destination:", error);
    alert("Failed to update destination.");
  }
}



function startEditing(destination) {
    console.log("EDIT DATA:", destination);
  setEditingId(destination._id);

  setNewDestination({
    name: destination.name || "",
    state: destination.state || "",
    city: destination.city || "",
    category: destination.category || "",
    description: destination.description || "",
    historicalSignificance: destination.historicalSignificance || "",
    image: destination.image || "",
    images: Array.isArray(destination.images)
  ? destination.images.join(", ")
  : destination.images || "",
    bestTime: destination.bestTime || "",
    fee: destination.fee || "",
    timings: destination.timings || "",
    nearby: Array.isArray(destination.nearby)
      ? destination.nearby.join(", ")
      : destination.nearby || "",
      location: destination.location || "",

  });

  setShowForm(true);
}

async function deleteDestination(id) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this destination?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:5000/api/destinations/${id}`,
      {
  method: "DELETE",
  headers: getAuthHeaders(),
}

    );

    if (!response.ok) {
      throw new Error("Failed to delete destination");
    }

    setDestinations((currentDestinations) =>
  currentDestinations.filter(
    (destination) => destination._id !== id
  )
);


    alert("Destination deleted successfully!");
  } catch (error) {
    console.error("Error deleting destination:", error);
    alert("Failed to delete destination.");
  }
}



  return (
    <div className="admin-page">

      <header className="admin-header">

        <div>
          <h1>🇮🇳 TravelBharat</h1>
          <p>Admin Dashboard</p>
        </div>
<button
  className="admin-logout-button"
  onClick={handleLogout}
>
  Logout
</button>

       <button
  className="admin-add-button"
  onClick={() => {
    setEditingId(null);

    setNewDestination({
      name: "",
      state: "",
      city: "",
      category: "",
      description: "",
      historicalSignificance: "",
      image: "",
      images: "",
      bestTime: "",
      fee: "",
      timings: "",
      nearby: "",
      location: "",
    });

    setShowForm(true);
  }}
>
  + Add Destination
</button>


      </header>

      <main className="admin-main">

        <div className="admin-stats">

          <div className="admin-stat">
            <span>📍</span>
            <div>
              <strong>
                {destinations.length}
              </strong>
              <p>Destinations</p>
            </div>
          </div>

          <div className="admin-stat">
            <span>🇮🇳</span>
            <div>
              <strong>36</strong>
              <p>States & UTs</p>
            </div>
          </div>

          <div className="admin-stat">
            <span>🏷️</span>
            <div>
              <strong>4</strong>
              <p>Categories</p>
            </div>
          </div>

        </div>

        {showForm && (
          <section className="admin-form-section">

            <h2>
  {editingId
    ? "Edit Destination"
    : "Add New Destination"}
</h2>


            <form
              className="admin-form"
              onSubmit={editingId ? editDestination : addDestination}
            >

              <input
                name="name"
                value={newDestination.name}
                onChange={handleChange}
                placeholder="Destination name"
              />

              <input
                name="state"
                value={newDestination.state}
                onChange={handleChange}
                placeholder="State / UT"
              />

              <input
                name="city"
                value={newDestination.city}
                onChange={handleChange}
                placeholder="City"
              />
<textarea
  name="description"
  value={newDestination.description}
  onChange={handleChange}
  placeholder="Description"
  rows="4"
  className="admin-description"
/>
<textarea
  name="historicalSignificance"
  value={newDestination.historicalSignificance || ""}
  onChange={handleChange}
  placeholder="Historical significance"
  rows="4"
  className="admin-description"
/>

<input
  name="bestTime"
  value={newDestination.bestTime || ""}
  onChange={handleChange}
  placeholder="Best time to visit"
/>

<input
  name="fee"
  value={newDestination.fee || ""}
  onChange={handleChange}
  placeholder="Entry fee"
/>

<input
  name="timings"
  value={newDestination.timings || ""}
  onChange={handleChange}
  placeholder="Timings"
/>
<textarea
  name="nearby"
  value={
    Array.isArray(newDestination.nearby)
      ? newDestination.nearby.join(", ")
      : newDestination.nearby || ""
  }
  onChange={(event) =>
    setNewDestination({
      ...newDestination,
      nearby: event.target.value,
    })
  }
  placeholder="Nearby attractions (comma separated)"
/>


<input
  name="image"
  value={newDestination.image}
  onChange={handleChange}
  placeholder="Image URL"
/>
<input
  name="location"
  value={newDestination.location || ""}
  onChange={handleChange}
  placeholder="Google Maps URL"
/>

<div className="gallery-input-group">
  <label className="gallery-label">
    Gallery Images
    <span>Paste image URLs, separated by commas</span>
  </label>

  <textarea
    name="images"
    value={
      Array.isArray(newDestination.images)
        ? newDestination.images.join(", ")
        : newDestination.images || ""
    }
    onChange={(event) =>
      setNewDestination({
        ...newDestination,
        images: event.target.value,
      })
    }
    placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
    rows={5}
    className="gallery-url-box"
  />
</div>


              <select
                name="category"
                value={newDestination.category}
                onChange={handleChange}
              >
                <option value="">
                  Select Category
                </option>

                <option value="Heritage">
                  Heritage
                </option>

                <option value="Nature">
                  Nature
                </option>

                <option value="Religious">
                  Religious
                </option>

                <option value="Adventure">
                  Adventure
                </option>
              </select>

              <div className="admin-form-buttons">

                <button
  type="submit"
  className="save-button"
>
  {editingId
    ? "Update Destination"
    : "Save Destination"}
</button>

<button
  type="button"
  className="cancel-button"
  onClick={() => {
    setShowForm(false);
    setEditingId(null);

    setNewDestination({
      name: "",
      state: "",
      city: "",
      category: "",
      description: "",
      historicalSignificance: "",
      image: "",
      images: "",
      bestTime: "",
      fee: "",
      timings: "",
      nearby: "",
      location: "",
    });
  }}
>
  Cancel
</button>

              

              </div>

            </form>

          </section>
        )}

        <section className="admin-table-section">

          <div className="admin-title">

            <div>
              <p>CONTENT MANAGEMENT</p>
              <h2>Tourist Destinations</h2>
            </div>

            <span>
              {destinations.length} records
            </span>

          </div>
<div className="table-container">

  {loading ? (
    <div className="admin-loading">
      Loading destinations...
    </div>
  ) : (
    <table>

      <thead>

         
                <tr>
                  <th>Destination</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

     {destinations.map((destination) => (
  <tr key={destination._id}>

    <td>
      <strong>
        {destination.name}
      </strong>
    </td>

    <td>
      {destination.city}
    </td>

    <td>
      {destination.state}
    </td>

    <td>
      <span className="admin-category">
        {destination.category}
      </span>
    </td>

   <td>
  <div className="admin-actions">

    <button
      type="button"
      className="edit-button"
      onClick={() => startEditing(destination)}
    >
      Edit
    </button>

    <button
      type="button"
      className="delete-button"
      onClick={() => deleteDestination(destination._id)}
    >
      Delete
    </button>

  </div>
</td>


  </tr>
))}


              </tbody>

            </table>
  )}
          </div>

        </section>

      </main>

    </div>
  );
}

export default Admin;
