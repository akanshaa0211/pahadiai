function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
        borderRadius: "20px",
        margin: "20px",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          margin: "0 auto 30px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #22c55e, #3b82f6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "60px",
          boxShadow: "0 0 40px rgba(34,197,94,0.4)",
        }}
      >
        🏔️
      </div>

      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "20px",
        }}
      >
        Discover Uttarakhand with AI
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "1.2rem",
          lineHeight: "1.8",
        }}
      >
        Helping travelers discover hidden destinations, authentic
        homestays, local guides and eco-tourism experiences through
        AI-powered recommendations.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "35px",
        }}
      >
        <button
          style={{
            padding: "12px 25px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Explore Tourism
        </button>

        <button
          style={{
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;