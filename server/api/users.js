const express = require("express");
const router = express.Router();
const { Users } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
