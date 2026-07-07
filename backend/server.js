require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to PahadiAI Backend API 🚀" });
});

app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

app.get("/api/tasks/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
});

app.post("/api/tasks", async (req, res) => {
  const newTask = await Task.create({
    title: req.body.title,
    completed: req.body.completed || false,
  });

  res.status(201).json({
    message: "Task created successfully",
    data: newTask,
  });
});

app.put("/api/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      completed: req.body.completed,
    },
    { new: true }
  );

  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({
    message: "Task updated successfully",
    data: updatedTask,
  });
});

app.delete("/api/tasks/:id", async (req, res) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id);

  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json({ message: "Task deleted successfully" });
});

app.get("/api/search", async (req, res) => {
  const query = req.query.q || "";

  const tasks = await Task.find({
    title: { $regex: query, $options: "i" },
  });

  res.status(200).json(tasks);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});