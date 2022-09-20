const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const authenticateToken = async (req, res, next) => {
  try {
    // here we get token which is passed to the header of our request
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET);
    console.log(decoded);

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    // here we added user to the req so that the (req,res) function of the route can access this property of the req
    req.token = token;
    req.user = user;
    // console.log(user);

    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

module.exports = authenticateToken;
