# 🏙️ NeighborFit – Neighborhood-Lifestyle Matcher

NeighborFit is a full-stack web application that helps users find neighborhoods that best match their lifestyle preferences, such as safety, greenery, and affordability.

---

## 📌 Features

- 🎯 Collects user preferences via sliders (React frontend)
- 🤖 Matches neighborhoods using a weighted algorithm (Express backend)
- 📊 Ranks and displays results in real-time
- 💡 Designed with free-tier tools and minimal data to simulate real-world problem-solving

---

## 🚀 Tech Stack

| Layer     | Technology          |
|-----------|---------------------|
| Frontend  | React + Tailwind CSS |
| Backend   | Node.js + Express   |
| API Comm  | Axios               |
| Hosting   |  Netlify / Render |

---

## 🧠 Matching Algorithm

Each neighborhood has 3 parameters:
- safety (1–10)
- greenery (1–10)
- affordability (1–10)

User input weights these preferences, and the app computes a **weighted average** score for each neighborhood:

score = (
safety_input × safety_score +
greenery_input × greenery_score +
affordability_input × affordability_score
) / total_input_weight

---

## 🖥️ How to Run Locally

### 📦 Backend (Express)

1. Navigate to the server folder:
    bash
    cd server

2. Install dependencies:
    bash
    npm install

3. Start the backend server:
    bash
    npm start
   Server runs at: [http://localhost:5000](http://localhost:5000)

---

### 🌐 Frontend (React)

1. Navigate to the client folder:
    bash
    cd client

2. Install dependencies:
    bash
    npm install

3. Start the React app:
    bash
    npm start

4. Open your browser at: [http://localhost:3000](http://localhost:3000)

---

## 📦 API Endpoint

### `POST /api/match`

**Description:** Returns ranked neighborhoods based on user lifestyle preferences.

**Request Body:**

{
  "safety": 7,
  "greenery": 5,
  "affordability": 8
}
Response:

[
  { "name": "Lajpat Nagar", "score": 6.7 },
  { "name": "Green Park", "score": 6.3 },
  { "name": "Cyber Hub", "score": 4.9 }
]


📁 Project Structure

neighborfit-app/
│
├── client/     # React frontend (with Tailwind)
│   └── src/
│       ├── App.js
│       ├── index.js
│       └── index.css
│
├── server/     # Express backend
│   ├── index.js
│   └── package.json


🌐 Deployment 
Frontend: Netlify

Backend: Render


📬 Author
Niharika Shrivastava