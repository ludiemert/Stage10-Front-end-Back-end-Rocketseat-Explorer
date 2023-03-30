const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class ClientAvatarController {
  async update(request, response) {
    const client_id = request.client.id;
    const avatarFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const client = await knex("clients")
      .where({ id: client_id }).first();

      if(!client) {
        throw new AppError("Only authenticated Clients can change avatar", 401);
      }

      if (client.avatar) {
        await diskStorage.deleteFile(client.avatar);
     }

      const filename = await diskStorage.saveFile(avatarFilename);
      client.avatar = filename;

      await knex("clients").update(client).where({ id: client_id });

      return response.json(client);

  }

}

module.exports = ClientAvatarController;

