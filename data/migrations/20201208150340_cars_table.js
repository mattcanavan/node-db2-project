exports.up = function(knex) {
    return knex.schema.createTable('car-dealer', table => {
        
        // id: primary key, unique, not null, integers that auto-increment
        table.increments();

        //vin: not null, unique 
        table.text('VIN', 128).unique().notNullable();

        //make: not null
        table.text('Make', 128).notNullable();

        //model: not null
        table.text('Model', 128).notNullable();

        //mileage: not null
        table.decimal('Mileage', 128).notNullable();

        //Transmission_Type: can be null
        table.text('Transmission_Type', 128);

        //Title_Status: can be null
        table.text('Title_Status', 128);

        //extra
        table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('car-dealer');
  };
  