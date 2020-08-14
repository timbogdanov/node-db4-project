exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'borscht', instructions_id: '1' },
        { name: 'pizza', instructions_id: '2' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
        { name: 'hachapuri', instructions_id: '3' },
      ]);
    });
};
