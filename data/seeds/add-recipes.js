exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'borscht' },
        { name: 'pizza' },
        { name: 'macncheese' },
        { name: 'soup' },
        { name: 'pho' },
      ]);
    });
};
