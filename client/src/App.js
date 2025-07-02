import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    safety: 5,
    greenery: 5,
    affordability: 5,
  });
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://neighborfit-lanl.onrender.com/api/match", form);
    setResults(res.data);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">

      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">NeighborFit</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Find Your Perfect Neighborhood
          </h2>
          <p className="text-lg text-blue-700 mb-6">
            Discover the best places to live based on your lifestyle preferences.
          </p>
          <a href="#matcher">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Safety</h3>
          <p className="text-gray-600">Compare neighborhoods based on crime statistics and safety ratings.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Green Spaces</h3>
          <p className="text-gray-600">See how much greenery, parks, and open space each neighborhood offers.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Affordability</h3>
          <p className="text-gray-600">Find areas that match your budget with detailed housing cost analysis.</p>
        </div>
      </section>

      {/* Matcher Form Section */}
      <section id="matcher" className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            NeighborFit Matcher
          </h2>

          {/* Sliders */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {["safety", "greenery", "affordability"].map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {key.toUpperCase()}: <span className="font-semibold">{form[key]}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: +e.target.value })}
                  className="w-full h-2 bg-blue-200 rounded-full appearance-none cursor-pointer transition"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              🔍 Match My Neighborhood
            </button>
          </form>

          {/* Match Results */}
          {results.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                🏘️ Best Matches
              </h3>
              <div className="grid gap-4">
                {results.map((n, i) => (
                  <div
                    key={i}
                    className="bg-blue-100 rounded-lg p-4 shadow hover:shadow-md transition"
                  >
                    <h4 className="text-lg font-semibold text-blue-800">{n.name}</h4>
                    <p className="text-gray-700">Score: {n.score}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center border-t">
        <p className="text-gray-500">© 2025 NeighborFit. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
