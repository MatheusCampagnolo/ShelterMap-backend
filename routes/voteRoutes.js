const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes to manage votes
router.post('/shelters/:shelterId', authMiddleware, voteController.castVote);
router.get('/shelters/:shelterId', voteController.getVotesForShelter);

module.exports = router;