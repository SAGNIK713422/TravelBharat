# 🇮🇳 TravelBharat – Explore India, State by State

A full-stack tourism information web platform that helps users discover tourist destinations across India.

## 🌐 Live Demo

https://travelbharat-frontend-1pw3.onrender.com

## 📂 GitHub Repository

https://github.com/SAGNIK713422/TravelBharat

---

## 📖 About the Project

TravelBharat is a tourism information platform developed to help users explore tourist destinations across India in a simple and organized way.

Users can search for destinations and explore places based on state, city, and category.

The platform provides destination details such as descriptions, images, best time to visit, entry fees, timings, nearby attractions, and Google Maps locations.

The project also includes an admin dashboard for managing destination information.

---

## ✨ Features

### User Features

- Search tourist destinations
- Filter by state
- Filter by city
- Filter by category
- View destination details
- View destination images
- View historical information
- View best time to visit
- View entry fees and timings
- View nearby attractions
- Open locations in Google Maps
- Responsive design

### Admin Features

- Admin login
- JWT authentication
- Admin dashboard
- Add destinations
- Edit destinations
- Delete destinations
- Manage destination information

---

## 🛠️ Technology Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Backend

- Node.js
- Express.js
- REST API
- JWT Authentication

### Database

- MongoDB
- MongoDB Atlas

### Deployment

- Render

---

## 📁 Project Structure

<pre>
TravelBharat/
│
├── public/
├── src/
│   └── React frontend files
│
├── server/
│   └── Node.js and Express backend
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
</pre>

---

## 🔐 Authentication & Security

TravelBharat uses JWT (JSON Web Token) authentication to secure administrative features.

The authentication system provides:

- Secure admin login
- JWT token generation
- Protected admin routes
- Token verification
- Secure password handling
- Environment variables for sensitive configuration

Sensitive information such as database credentials and JWT secrets is stored in environment variables and is not included in the GitHub repository.

---

## 🔌 API Overview

TravelBharat provides RESTful APIs for authentication and destination management.

### Public APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/destinations` | Retrieve all destinations |
| GET | `/api/destinations/:id` | Retrieve a specific destination |

### Authentication API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/admin/login` | Authenticate administrator |

### Protected APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/destinations` | Add a destination |
| PUT | `/api/destinations/:id` | Update a destination |
| DELETE | `/api/destinations/:id` | Delete a destination |

Protected APIs require a valid JWT token.

---

## 🗄️ Database

MongoDB is used to store destination and administrator-related data.

### Destination Information

Each destination can contain:

- Name
- State
- City
- Category
- Description
- Historical significance
- Images
- Best time to visit
- Entry fee
- Timings
- Nearby attractions
- Location

The deployed application uses MongoDB Atlas.

---

## 🧪 Testing

The application was tested for its major features, including:

- Admin authentication
- JWT authorization
- Destination creation
- Destination editing
- Destination deletion
- Destination search
- State filtering
- City filtering
- Category filtering
- Destination details
- Image display
- Nearby attractions
- Google Maps integration
- Responsive interface

---

## 📱 Responsive Design

TravelBharat is designed to provide a consistent experience across:

- Desktop
- Laptop
- Tablet
- Mobile devices

---

## 🚀 Future Enhancements

The platform can be extended with:

- Interactive India map
- Multilingual support
- Travel itinerary planner
- User reviews and ratings
- Hotel and transport integration
- Advanced destination search
- Personalized travel recommendations

---

## 🎓 Internship Project

**Organization:** Unified Mentor

**Internship:** 2-Month Full Stack Web Development Internship

**Project:** TravelBharat – Explore India, State by State

**Year:** 2026

---

## 👨‍💻 Developer

**Sagnik Chatterjee**

Full Stack Web Development Intern

---

## 📄 Project Documentation

A detailed project report has been prepared covering the project's objectives, features, architecture, database design, APIs, authentication, testing, limitations, and future enhancements.

---

## ⭐ Key Highlights

TravelBharat demonstrates practical experience in:

- Full-stack web development
- React.js frontend development
- Node.js and Express.js backend development
- REST API development
- MongoDB database integration
- JWT authentication
- CRUD operations
- Responsive web design
- Cloud deployment

---

## 📌 License

This project was developed for educational and internship purposes.
