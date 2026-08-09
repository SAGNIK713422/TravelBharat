import { useState } from "react";

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

async function handleLogin(event) {
  event.preventDefault();

  setError("");

  try {
    const response = await fetch(
      "http://localhost:5000/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password,
        }),
      }
    );

    const data = await response.json();

    console.log("LOGIN RESPONSE:", data);

    if (!response.ok) {
      setError(data.message || "Invalid username or password");
      return;
    }
localStorage.setItem("adminToken", data.token);
    onLogin();

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    setError("Unable to connect to server");
  }
}


  return (
    <div className="admin-login-page">
      <div className="admin-login-box">

        <div className="admin-login-logo">
          🇮🇳
        </div>

        <h1>TravelBharat</h1>

        <p className="admin-login-subtitle">
          Admin Login
        </p>

        <form onSubmit={handleLogin}>

          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            placeholder="Enter username"
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter password"
          />

          {error && (
            <p className="admin-login-error">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <button
          className="login-back-button"
          onClick={() => window.location.reload()}
        >
          ← Back
        </button>

      </div>
    </div>
  );
}

export default AdminLogin;
