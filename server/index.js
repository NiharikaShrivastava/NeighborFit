/**
 * Accepts user lifestyle preferences (safety, greenery, affordability),
 * calculates a weighted score for each neighborhood, and returns
 * a ranked list of the best-matching neighborhoods.
 */

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

// Sample neighborhood dataset with lifestyle attributes
const neighborhoods = [
  { name: "Green Park", safety: 8, greenery: 9, affordability: 5 },
  { name: "Cyber Hub", safety: 7, greenery: 4, affordability: 3 },
  { name: "Lajpat Nagar", safety: 6, greenery: 6, affordability: 7 },
];

//Responds with a list of neighborhoods ranked by score based on user's preferences.

app.post("/api/match", (req, res) => {
  const { safety, greenery, affordability } = req.body;

  // Calculate a weighted score for each neighborhood based on user input
  const results = neighborhoods.map((n) => {
    const score =
      (n.safety * safety +
        n.greenery * greenery +
        n.affordability * affordability) /
      (safety + greenery + affordability);

    return {
      name: n.name,
      score: Math.round(score * 10) / 10, // Round to 1 decimal place
    };
  });

  // Sort neighborhoods by score in descending order and send as response
  res.json(results.sort((a, b) => b.score - a.score));
});

app.get("/", (req, res) => {
  res.send("NeighborFit API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});