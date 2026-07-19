require("dotenv").config();

const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/generate", async (req, res) => {
  console.log("========== AI ROUTE HIT ==========");
  console.log("Request Body:", req.body);

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    console.log("Prompt:", prompt);
    console.log("Sending request to Gemini...");

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    console.log("Gemini Response:");
    console.log(result);

    return res.status(200).json({
      success: true,
      response: result.text,
    });

  } catch (err) {
    console.log("========== GEMINI ERROR ==========");
    console.error(err);
    console.log("=================================");

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;