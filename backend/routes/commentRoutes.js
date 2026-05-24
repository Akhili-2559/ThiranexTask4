const router = require("express").Router();
const db = require("../database");

router.post("/", (req, res) => {

  const { postId, user, text } = req.body;

  db.run(
    `INSERT INTO comments(postId,user,text)
     VALUES(?,?,?)`,
    [postId, user, text],
    function(err) {

      res.json("Comment Added");

    }
  );

});

router.get("/:postId", (req, res) => {

  db.all(
    `SELECT * FROM comments
     WHERE postId=?`,
    [req.params.postId],
    (err, rows) => {

      res.json(rows);

    }
  );

});

module.exports = router;