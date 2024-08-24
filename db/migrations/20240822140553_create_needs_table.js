exports.up = function (knex) {
  return knex.schema.createTable("needs", function (table) {
    table.increments("id").primary();
    table.string("description").notNullable();
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
  return knex.schema.dropTable("needs");
};
