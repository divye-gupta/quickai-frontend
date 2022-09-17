const express = require("express");
const client = require("../db/connect");
const bcrypt = require("bcrypt");

const router = new express.Router();
const auth = require("../middleware/authorization");

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
  const { user } = req;
  try {
    const response = await client.query(`select * from users where email=$1`, [
      user.email,
    ]);

    const userObject = response.rows[0];
    delete userObject.password;
    delete userObject.id;

    res.json({ user: userObject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log("inside signup");
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await client.query(
      `INSERT INTO users (firstname,lastname,organization,email,password) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [
        req.body.firstname,
        req.body.lastname,
        req.body.organization,
        req.body.email,
        hashedPassword,
      ]
    );
    res.json({ user: newUser.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
