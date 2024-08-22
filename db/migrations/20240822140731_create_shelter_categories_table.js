exports.up = function (knex) {
  return knex.schema.createTable("shelter_categories", function (table) {
    table.increments("id").primary();
    table
      .integer("shelter_id")
      .unsigned()
      .references("id")
      .inTable("shelters")
      .onDelete("CASCADE");
    table
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("shelter_categories");
};
