exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, name: "Food" },
        { id: 2, name: "Clothing" },
        { id: 3, name: "Medical Supplies" },
        { id: 4, name: "Hygiene Products" },
        { id: 5, name: "Shelter" },
      ]);
    });
};
