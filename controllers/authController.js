const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const knex = require("../db/knex");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [userId] = await knex("users")
      .insert({
        name,
        email,
        password: hashedPassword,
      })
      .returning("id");

    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Generated User ID:", userId);
    res.status(201).json({ token });
  } catch (error) {
    console.error("Registration Error: ", error);
    res.status(400).json({ error: "Failed to register user" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await knex("users").where({ email }).first();

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (error) {
    console.error("Login Error: ", error);
    res.status(500).json({ error: "Failed to login" });
  }
};
