const { request, response } = require("express");
const knex = require("../database/knex");

class MoviesController{
    async create(request, response){
        const { title, description, tags, links } = request.body;
        const client_id = request.client.id;

        const [movie_id] = await knex("movies").insert({
            title,
            description,
            client_id
        });

        const linksInsert = links.map(link => {
            return { 
                movie_id,
                url: link
            }
        });

        await knex("links").insert(linksInsert);

        const tagsInsert = tags.map(name => {
            return { 
                movie_id,
                name,
                client_id
            }
        });

        await knex("tags").insert(tagsInsert);

        return response.json();

    }

    async show(request, response){
        const { id } = request.params;

        const movie = await knex("movies").where({ id }).first();
        const tags = await knex("tags").where({ movie_id: id }).orderBy("name");
        const links = await knex("links").where({ movie_id: id }).orderBy("url");

        return response.json({
            ...movie,
            tags,
            links
        });

        return response.json(movie);

    }

    async delete(request, response){
        const { id } = request.params;

        await knex("movies").where({ id }).delete();

        return response.json();
    }

    async index(request, response) { 
        const { title, tags }= request.query;

        const client_id = request.client_id;

        let movies;
        
        if (tags) {
            const filterTags = tags.split(',').map(tag => tag.trim());

            movies = await knex("tags")
            .select([
                "movies.id",
                "movies.title",
                "movies.client_id",
            ])
             .where("movies.client_id", client_id)
             .whereLike("movies.title", `%${title}%`)
             .whereIn("name", filterTags)
             .innerJoin("movies", "movies.id", "tags.movie_id")
             .groupBy("movies.id")
             .orderBy("movies.title")
        
        } else {
            movies = await knex("movies")
            .where({ client_id })
            .whereLike("title", `%${title}%`)
            .orderBy("title");
        }

        const clientTags = await knex("tags").where({ client_id });
        const moviesWithTags = movies.map(movie => {
            const movieTags = clientTags.filter(tag => tag.movie_id === movie.id);

            return {
                ...movie,
                tags: movieTags
            }
        });

    return response.json(moviesWithTags);
    }
}

module.exports = MoviesController;

