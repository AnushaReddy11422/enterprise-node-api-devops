require("dotenv").config();

const express = require("express");

const app = express();

// Read values from environment variables
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Enterprise Node API";
const APP_ENV = process.env.APP_ENV || "Development";
const API_KEY = process.env.API_KEY || "No API Key";

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: `${APP_NAME} is running 🚀`,
    environment: APP_ENV,
    status: "success"
  });
});

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date(),
    service: APP_NAME
  });
});

// Configuration Endpoint (Learning Purpose Only)
app.get("/config", (req, res) => {
  res.json({
    appName: APP_NAME,
    environment: APP_ENV,
    apiKey: API_KEY
  });
});

// Start Server
app.listen(PORT, () => {
  console.log("=================================");
  console.log(`${APP_NAME} Started Successfully`);
  console.log(`Environment : ${APP_ENV}`);
  console.log(`Server URL  : http://localhost:${PORT}`);
  console.log("=================================");
});