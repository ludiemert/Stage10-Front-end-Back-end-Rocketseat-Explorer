const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token uninformed", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: client_id } = verify(token, authConfig.jwt.secret);

    request.client = {
      id: Number(client_id),
    };

    return next();
  } catch {
    throw new AppError("JWT Token invalid", 401);
  }
}

module.exports = ensureAuthenticated;