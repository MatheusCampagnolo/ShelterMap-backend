exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("needs")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("needs").insert([
        { name: "Food" },
        { name: "Water" },
        { name: "Clothing" },
        { name: "Medicine" },
        { name: "Shelter Supplies" },
      ]);
    });
};
