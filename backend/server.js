require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample Data
let tasks = [
  {
    id: 1,
    title: "Build Backend",
    completed: false,
  },
  {
    id: 2,
    title: "Connect Frontend",
    completed: true,
  },
];

// ===================== HOME =====================
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to PahadiAI Backend API 🚀",
  });
});

// ===================== GET ALL TASKS =====================
app.get("/api/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// ===================== GET SINGLE TASK =====================
app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.status(200).json(task);
});

// ===================== CREATE TASK =====================
app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    data: newTask,
  });
});

// ===================== UPDATE TASK =====================
app.put("/api/tasks/:id", (req, res) => {
  const task = tasks.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.status(200).json({
    message: "Task updated successfully",
    data: task,
  });
});

// ===================== DELETE TASK =====================
app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter(
    (item) => item.id !== Number(req.params.id)
  );

  res.status(200).json({
    message: "Task deleted successfully",
  });
});

// ===================== SEARCH TASK =====================
app.get("/api/search", (req, res) => {
  const query = req.query.q || "";

  const result = tasks.filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(result);
});

// ===================== SERVER =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
