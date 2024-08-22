exports.up = function (knex) {
  return knex.schema.createTable("categories", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};