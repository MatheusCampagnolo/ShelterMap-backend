exports.seed = function (knex) {
  // Delete ALL existing entries
  return knex("shelters")
    .del()
    .then(function () {
      // Insert seed entries
      return knex("shelters").insert([
        {
          id: 1,
          name: "Shelter One",
          location: "Location One",
          latitude: 40.7128,
          longitude: -74.006,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "Shelter Two",
          location: "Location Two",
          latitude: 34.0522,
          longitude: -118.2437,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        // Add more shelters here if needed
      ]);
    });
};
