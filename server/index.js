const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/user-auths");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate email" });
  }
});
app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "seceret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});
app.get("/api/users", (req, res) => {
  User.find().then((users) => {
    res.json(users);
  });
});

app.listen(1336, () => {
  console.log("server Started at 1336");
});
