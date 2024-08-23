const express = require("express");
const router = express.Router();
const { createShelter } = require("../controllers/shelterController");
const authMiddleware = require("../Middlewares/authMiddleware");

router.post("/", authMiddleware, createShelter);

module.exports = router;