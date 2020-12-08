exports.up = function(knex) {
    return knex.schema.createTable('car-dealer', table => {
        // id: primary key, unique, not null, integers that auto-increment
        table.increments();

        //make: not null
        table.text('make', 128).notNullable();

        //model: not null

        //vin: unique, not null
        // table.text('vin', 128).unique().notNullable();

        //transmissionType: can be null

        //titleStatus: can be null
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('car-dealer');
  };
  