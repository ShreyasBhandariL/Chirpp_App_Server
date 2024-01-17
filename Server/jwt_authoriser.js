const jwt = require("jsonwebtoken");
const jwtAuthoriser = (req, res, next) => {
  const token = req.cookies.token || null;
  if (!token) {
    return res.status(401).json({ error: "invalid token" });
  }
  jwt.verify(token, "chirrp", (error, admin) => {
    if (error) {
      return res.status(401).json({ error: "invalid token" });
    }
    req.admin = admin;
    next();
  });
};

module.exports = jwtAuthoriser;
