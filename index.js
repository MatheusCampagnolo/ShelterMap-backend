const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth"); // Importing the auth routes

const app = express(); // Creating the express app

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Conecting the auth routes to the app
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("ShelterMap Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});