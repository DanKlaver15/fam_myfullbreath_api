const jwt = require("jsonwebtoken");
const secretStrings = require("./../config/retrieveSecrets");

async function auth(req, res, next) {
  const token = req.header("x-auth-token");
	const secretString = await secretStrings("MyFullBreath_authSecret");

  if (!token)
    return res.status(401).send({ error: "Access denied. No token provided" });

  try {
    req.user = jwt.verify(token, secretString);

    return next();
  } catch (err) {
    return res.status(400).send({ error: `Invalid token.   ${secretString}` });
  }
}

module.exports = auth;
