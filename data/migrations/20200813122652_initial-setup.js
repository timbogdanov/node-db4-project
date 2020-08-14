exports.up = function (knex) {
  return knex.schema
    .createTable('recipes', (table) => {
      table.increments('id');

      table.string('name', 255).notNullable();
    })
    .createTable('ingredients', (table) => {
      table.increments('id');

      table.string('name', 255).notNullable();
    })
    .createTable('recipe_ingredients', (table) => {
      table.increments('id');

      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {};
