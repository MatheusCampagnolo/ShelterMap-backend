const knex = require("../db/knex");

// Function to create a shelter
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

// Function to get all shelters
exports.getAllShelters = async (req, res) => {
  try {
    const shelters = await knex("shelters").select("*");
    res.status(200).json(shelters);
  } catch (error) {
    console.error("Error fetching shelters:", error);
    res.status(500).json({ error: "Failed to fetch shelters" });
  }
};


// Function to get a shelter by its ID
exports.getShelterById = async (req, res) => {
  const { id } = req.params;

  try {
    const shelter = await knex("shelters").where({ id }).first();

    if (!shelter) {
      return res.status(404).json({ error: "Shelter not found" });
    }

    res.status(200).json(shelter);
  } catch (error) {
    console.error("Error fetching shelter:", error);
    res.status(500).json({ error: "Failed to fetch shelter" });
  }
};

// Function to update a shelter by its ID
exports.updateShelter = async (req, res) => {
  const { id } = req.params;
  const { name, location, latitude, longitude } = req.body;

  try {
    const updatedRows = await knex("shelters").where({ id }).update({
      name,
      location,
      latitude,
      longitude,
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: "Shelter not found" });
    }

    res.status(200).json({ message: "Shelter updated successfully" });
  } catch (error) {
    console.error("Error updating shelter:", error);
    res.status(500).json({ error: "Failed to update shelter" });
  }
};

// Function to delete a shelter by its ID
exports.deleteShelter = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRows = await knex("shelters").where({ id }).del();

    if (deletedRows === 0) {
      return res.status(404).json({ error: "Shelter not found" });
    }

    res.status(200).json({ message: "Shelter deleted successfully" });
  } catch (error) {
    console.error("Error deleting shelter:", error);
    res.status(500).json({ error: "Failed to delete shelter" });
  }
};
