const router = require("express").Router();
const db = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "blogsecret";

router.post("/register", async (req, res) => {

  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users(name,email,password)
     VALUES(?,?,?)`,
    [name, email, hashedPassword],
    function(err) {

      if (err) {
        return res.status(400).json(err.message);
      }

      res.json("User Registered");
    }
  );

});

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  db.get(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    async (err, user) => {

      if (!user) {
        return res.status(400).json("User Not Found");
      }

      const validPassword = await bcrypt.compare(
        password,
        user.password
      );

      if (!validPassword) {
        return res.status(400).json("Wrong Password");
      }

      const token = jwt.sign(
        { id: user.id },
        SECRET
      );

      res.json({
        token,
        user
      });

    }
  );

});

module.exports = router;