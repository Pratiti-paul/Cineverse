import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import "./App.css"; // ✅ Importing the CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<h2>Welcome to CineVerse 🎬</h2>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
