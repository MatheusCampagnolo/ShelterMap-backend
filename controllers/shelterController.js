const knex = require("../db/knex");

exports.createShelter = async (req, res) => {
  const { name, location, latitude, longitude } = req.body;
  const userId = req.user.id;

  try {
    const [shelterId] = await knex("shelters").insert({
      name,
      location,
      latitude,
      longitude,
      user_id: userId,
    })
    .returning("id");

    res
      .status(201)
      .json({ message: "Shelter created successfully", shelterId });
  } catch (error) {
    console.error("Error creating shelter:", error);
    res.status(500).json({ error: "Failed to create shelter" });
  }
};