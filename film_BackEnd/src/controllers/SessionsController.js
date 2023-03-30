const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

const { compare } = require("bcryptjs");

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const client = await knex("clients").where({ email }).first();
    if (!client) {
      throw new AppError("Email or password incorrect", 401);
    }

    const passwordMatched = await compare(password, client.password);
    if (!passwordMatched) {
      throw new AppError("Password incorrect", 401); //or use throw new AppError("Email or password incorrect", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(client.id),
      expiresIn
    })

    return response.json({ client, token } );
  }
}

module.exports = SessionsController;