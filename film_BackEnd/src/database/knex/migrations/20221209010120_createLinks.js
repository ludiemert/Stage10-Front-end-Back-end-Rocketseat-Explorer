exports.up = knex => knex.schema.createTable("links", table => {
    //table fields
    table.increments("id") ;
    table.text("url").notNullable();
    table.integer("movie_id").references("id").inTable("movies").onDelete("CASCADE");
});

   //down => delete table (drop)
   exports.down = knex => knex.schema.dropTable("links");


