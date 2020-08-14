exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'onion' },
        { name: 'tomato' },
        { name: 'mushroom' },
        { name: 'lettuce' },
        { name: 'eggs' },
      ]);
    });
};
