exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { steps: 'pour water on floor' },
        { steps: 'mop floor with marks face' },
        { steps: 'dump marks face into toilet' },
        { steps: 'apoligize to mark' },
      ]);
    });
};
