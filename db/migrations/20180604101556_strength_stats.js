
exports.up = (knex, Promise) => {
  return knex.schema.createTable('strength_stats', (table) => {
    table.increments();
    table.date('date');
    table.decimal('bench');
    table.decimal('squat');
    table.decimal('deadlift');
    table.timestamps(true, true);
  })

};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('strength_stats')


};
