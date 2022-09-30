const jwt = require("jsonwebtoken");

const jwtTokens = ({ _id, name, email }) => {
  const user = { _id, name, email };
  console.log(user);
  const accessToken = jwt.sign(user, "quickaibackend@2022", {
    expiresIn: "1h",
  });
  const refreshToken = jwt.sign(user, "quickaibackend@2022", {
    expiresIn: "336h",
  });
  return { accessToken, refreshToken };
};

module.exports = jwtTokens;
