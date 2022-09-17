const jwt = require("jsonwebtoken");

const jwtTokens = ({ id, firstname, lastname, email }) => {
  const user = { id, firstname, lastname, email };
  console.log(user);
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "336h",
  });
  return { accessToken, refreshToken };
};

module.exports = jwtTokens;
