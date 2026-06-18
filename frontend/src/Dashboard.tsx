function Dashboard() {
  const cardStyle = {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    width: "220px",
    textAlign: "center" as const,
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 20px",
      }}
    >
      <h1>PahadiAI Dashboard</h1>

      <p>
        AI-powered analytics for tourism and local businesses.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div style={cardStyle}>
          <h2>150</h2>
          <p>Total Homestays</p>
        </div>

        <div style={cardStyle}>
          <h2>75</h2>
          <p>Registered Guides</p>
        </div>

        <div style={cardStyle}>
          <h2>5,000</h2>
          <p>Monthly Visitors</p>
        </div>

        <div style={cardStyle}>
          <h2>1,250</h2>
          <p>AI Recommendations</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h2>Platform Overview</h2>

        <p>
          PahadiAI connects tourists with local homestays, guides,
          eco-tourism experiences, and AI-powered travel planning tools.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;