exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("needs")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("needs").insert([
        { description: "Water", shelter_id: 1 },
        { description: "Food", shelter_id: 1 },
        { description: "Blankets", shelter_id: 2 },
        { description: "Clothing", shelter_id: 2 },
        { description: "Medical Supplies", shelter_id: 1 },
      ]);
    });
};