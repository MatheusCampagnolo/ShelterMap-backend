exports.up = function (knex) {
  return knex.schema.createTable("shelters", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("location").notNullable();
    table.float("latitude");
    table.float("longitude");
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("shelters");
};
