exports.up = knex => knex.schema.createTable("movies", table => {
     //table fields
     table.increments("id") ;
     table.text("title");
     table.text("description");
     table.integer("rating");
     table.integer("client_id").references("id").inTable("clients");
 
     table.timestamp("created_at").default(knex.fn.now());
     table.timestamp("updated_at").default(knex.fn.now());
 });
 
    //down => delete table (drop)
    exports.down = knex => knex.schema.dropTable("movies");


