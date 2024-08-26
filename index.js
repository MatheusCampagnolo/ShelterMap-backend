const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Routes imports
const authRoutes = require("./routes/auth");
const shelterRoutes = require("./routes/shelters");
const categoryRoutes = require('./routes/categoryRoutes');
const voteRoutes = require('./routes/voteRoutes');
const shelterCategoryRoutes = require('./routes/shelterCategoryRoutes');

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// API routes
app.use("/api", authRoutes);
app.use("/api/shelters", shelterRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/shelter-categories", shelterCategoryRoutes);

app.get("/", (req, res) => {
  res.send("ShelterMap Backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});