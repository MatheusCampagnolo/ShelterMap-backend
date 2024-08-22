exports.up = function (knex) {
  return knex.schema.createTable("votes", function (table) {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("shelter_id")
      .unsigned()
      .references("id")
      .inTable("shelters")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("votes");
};