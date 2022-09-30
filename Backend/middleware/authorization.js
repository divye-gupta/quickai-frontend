const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const authenticateToken = async (req, res, next) => {
  try {
    // here we get token which is passed to the header of our request
    const token = req.header("Authorization").replace("Bearer ", "");

    jwt.verify(token, "quickaibackend@2022", (error, user) => {
      console.log("Here", user);
      if (error) return res.status(403).json({ error: error.message });
      req.user = user;
      next();
    });
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = authenticateToken;
