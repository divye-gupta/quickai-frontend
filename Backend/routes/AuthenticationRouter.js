const express = require("express");
const client = require("../db/connect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtTokens = require("../utils/jwt-helpers");

const router = new express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const users = await client.query("select * from users where email=$1", [
      email,
    ]);

    // console.log(users.rows[0]);

    // email check
    if (users.rows.length === 0)
      return res.status(401).json({ error: "Email is incorrect" });
    console.log("Here");
    // password check
    const validPassword = await bcrypt.compare(
      password,
      users.rows[0].password
    );

    // console.log(validPassword);

    // console.log("Here");
    if (!validPassword)
      return res.status(401).json({ error: "Invalid email or password" });

    let tokens = jwtTokens(users.rows[0]);
    // console.log(tokens);

    const userObject = users.rows[0];
    userObject.username = userObject.firstname;
    delete userObject.id;
    delete userObject.password;

    // res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
    res.json({ tokens, user: userObject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/refresh_token", (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;

    if (refreshToken === null)
      return res.status(401).json({ error: "Null Refresh Token" });
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, user) => {
        if (error) return res.status(403).json({ error: error.message });

        let tokens = jwtTokens(user);
        res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
        res.json(tokens);
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/refresh_token", (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(200).json({ message: "refresh token deleted." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
