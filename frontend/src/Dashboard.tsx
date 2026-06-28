import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data: Task[]) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

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
          <h2>5000</h2>
          <p>Monthly Visitors</p>
        </div>

        <div style={cardStyle}>
          <h2>1250</h2>
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

      <div
        style={{
          marginTop: "50px",
          background: "#111827",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2>Tasks from Backend</h2>

        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <table
            style={{
              margin: "20px auto",
              borderCollapse: "collapse",
              width: "80%",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid white", padding: "10px" }}>
                  ID
                </th>
                <th style={{ border: "1px solid white", padding: "10px" }}>
                  Title
                </th>
                <th style={{ border: "1px solid white", padding: "10px" }}>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td style={{ border: "1px solid white", padding: "10px" }}>
                    {task.id}
                  </td>

                  <td style={{ border: "1px solid white", padding: "10px" }}>
                    {task.title}
                  </td>

                  <td style={{ border: "1px solid white", padding: "10px" }}>
                    {task.completed ? "✅ Completed" : "⏳ Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;