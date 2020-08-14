exports.up = function (knex) {
  return knex.schema
    .createTable('instructions', (table) => {
      table.increments('id').unique();

      table.string('steps', 255).notNullable();
    })
    .table('recipes', (table) => {
      table
        .integer('instructions_id')
        .unsigned()
        .references('id')
        .inTable('instructions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('instructions');
};
