
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('strength_stats').del()
    .then(function () {
      // Inserts seed entries
      return knex('strength_stats').insert([
        {
          "date": "2018-04-06",
          "bench": 145,
          "squat": 200,
          "deadlift": 400
        },
        {
          "date": "2018-05-06",
          "bench": 150,
          "squat": 210,
          "deadlift": 415
        },
        {
          "date": "2018-06-06",
          "bench": 145,
          "squat": 200,
          "deadlift": 400
        }

      ]);
    });
};
