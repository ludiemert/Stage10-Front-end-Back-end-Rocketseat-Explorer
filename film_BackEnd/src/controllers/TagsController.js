const knex = require("../database/knex");

class TagsController {
    async index(request, response) {
        const client_id = request.client.id;

        const tags = await knex("tags")
            .where({ client_id })
            .groupBy("name")

        return response.json(tags);
    }
}

module.exports = TagsController;