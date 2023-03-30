exports.up = knex => knex.schema.createTable("tags", table => {
    //table fields
    table.increments("id") ;
    table.text("name").notNullable();
    table.integer("movie_id").references("id").inTable("movies").onDelete("CASCADE");
    table.integer("client_id").references("id").inTable("clients");  

});

   //down => delete table (drop)
   exports.down = knex => knex.schema.dropTable("tags");


