const express = require("express");
// const client = require("../db/connect");
const bcrypt = require("bcrypt");

const router = new express.Router();
const auth = require("../middleware/authorization");
const User = require("../Model/User");

router.get("/", auth, async (req, res) => {
  try {
    console.log("Getting user : ", req.user);
    const users = await client.query("select * from users");
    return res.json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/me", auth, async (req, res) => {
  try {
    return res.status(201).send({ user: req.user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();

    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
