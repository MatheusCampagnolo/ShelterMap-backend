const knex = require("../db/knex");

exports.addCategoryToShelter = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const { shelterId } = req.params;
    await knex("shelter_categories").insert({
      shelter_id: shelterId,
      category_id: categoryId,
    });
    res.status(201).json({ message: "Category added to shelter successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add category to shelter" });
  }
};

exports.removeCategoryFromShelter = async (req, res) => {
  try {
    const { shelterId, categoryId } = req.params;
    await knex("shelter_categories")
      .where({ shelter_id: shelterId, category_id: categoryId })
      .del();
    res
      .status(200)
      .json({ message: "Category removed from shelter successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove category from shelter" });
  }
};

exports.getShelterCategories = async (req, res) => {
  try {
    const { shelterId } = req.params;
    const categories = await knex("shelter_categories")
      .join("categories", "shelter_categories.category_id", "categories.id")
      .where("shelter_categories.shelter_id", shelterId)
      .select("categories.name", "categories.id");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories for shelter" });
  }
};
