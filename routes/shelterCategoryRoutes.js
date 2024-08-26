const express = require('express');
const router = express.Router();
const shelterCategoryController = require('../controllers/shelterCategoryController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes to manage shelter categories
router.post('/:shelterId', authMiddleware, shelterCategoryController.addCategoryToShelter); 
router.delete('/:shelterId/:categoryId', authMiddleware, shelterCategoryController.removeCategoryFromShelter);
router.get('/:shelterId', shelterCategoryController.getShelterCategories); 

module.exports = router;
