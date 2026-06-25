const express = require("express");

const app = express();

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Enterprise Node API is running 🚀",
    status: "success"
  });
});

// Health check endpoint (VERY important in DevOps)
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    timestamp: new Date(),
    service: "enterprise-node-api"
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});