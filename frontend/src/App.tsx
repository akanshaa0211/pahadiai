import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";

import About from "./About";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Showcase from "./Showcase";

function Home() {
  return (
    <>
      <Hero />

      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2>Why Choose PahadiAI?</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          PahadiAI helps local tourism businesses grow digitally through
          AI-powered solutions, smart recommendations, and data-driven insights.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        <Card title="Homestays" description="Book authentic mountain stays." />
        <Card title="Eco Tourism" description="Explore nature responsibly." />
        <Card title="Local Guides" description="Connect with experienced guides." />
        <Card title="AI Analytics" description="Track tourism business growth." />
        <Card title="Smart Recommendations" description="AI-powered travel suggestions." />
        <Card title="Digital Marketing" description="Help local businesses reach more visitors." />
      </div>
    </>
  );
}

function App() {
  const savedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(savedTheme !== "light");

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#111827" : "#f8fafc",
        color: darkMode ? "white" : "#111827",
      }}
    >
      <Navbar />

      <div style={{ textAlign: "center", padding: "15px" }}>
        <button onClick={toggleTheme}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;