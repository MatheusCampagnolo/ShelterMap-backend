const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Insert seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "User One",
          email: "user1@example.com",
          password: bcrypt.hashSync("password1", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "User Two",
          email: "user2@example.com",
          password: bcrypt.hashSync("password2", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        // Add more users here if needed
      ]);
    });
};
