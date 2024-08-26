const knex = require('../db/knex');

exports.castVote = async (req, res) => {
  try {
    const { shelterId } = req.params;
    const { userId } = req.user;
    await knex('votes').insert({ shelter_id: shelterId, user_id: userId });
    res.status(201).json({ message: 'Vote cast successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to cast vote' });
  }
};

exports.getVotesForShelter = async (req, res) => {
  try {
    const { shelterId } = req.params;
    const votes = await knex('votes').where({ shelter_id: shelterId }).count();
    res.json({ shelterId, votes: votes[0].count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch votes' });
  }
};
