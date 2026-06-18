import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";

import About from "./About";
import Dashboard from "./Dashboard";
import Login from "./Login";

function Home() {
  return (
    <>
      <Hero />

      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h2>Why Choose PahadiAI?</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
          }}
        >
          PahadiAI helps local tourism businesses grow digitally through
          AI-powered solutions, smart recommendations, and data-driven
          insights.
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
        <Card
          title="Homestays"
          description="Book authentic mountain stays."
        />

        <Card
          title="Eco Tourism"
          description="Explore nature responsibly."
        />

        <Card
          title="Local Guides"
          description="Connect with experienced guides."
        />

        <Card
          title="AI Analytics"
          description="Track tourism business growth."
        />

        <Card
          title="Smart Recommendations"
          description="AI-powered travel suggestions."
        />
        <Card
           title="AI Analytics"
           description="Smart insights for local businesses."
         />

        <Card
          title="Digital Marketing"
          description="Help local businesses reach more visitors."
        />
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "50px",
          background: "#111827",
        }}
      >
        <h2>Our Impact</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div>
            <h1>150+</h1>
            <p>Homestays</p>
          </div>

          <div>
            <h1>75+</h1>
            <p>Local Guides</p>
          </div>

          <div>
            <h1>5000+</h1>
            <p>Monthly Visitors</p>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

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