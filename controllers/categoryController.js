const knex = require("../db/knex");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await knex("categories").select("*");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const [id] = await knex("categories").insert({ name }).returning("id");
    res.status(201).json({ id, name });
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await knex("categories").where({ id }).update({ name });
    res.status(200).json({ message: "Category updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update category" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await knex("categories").where({ id }).del();
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};