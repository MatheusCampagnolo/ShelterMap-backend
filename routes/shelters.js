const express = require("express");
const router = express.Router();
const shelterController = require("../controllers/shelterController");
const authMiddleware = require("../Middlewares/authMiddleware");

router.post("/", authMiddleware, shelterController.createShelter);
router.get("/", authMiddleware, shelterController.getAllShelters);
router.get("/:id", authMiddleware, shelterController.getShelterById);
router.put("/:id", authMiddleware, shelterController.updateShelter);
router.delete("/:id", authMiddleware, shelterController.deleteShelter);

module.exports = router;