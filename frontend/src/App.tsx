import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";
import Login from "./Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";

function Home() {
  return (
    <>
      <Hero />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <Card title="Homestays" />
        <Card title="Eco Tourism" />
        <Card title="Local Guides" />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "15px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;