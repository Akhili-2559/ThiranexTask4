const router = require("express").Router();
const db = require("../database");

/* CREATE POST */

router.post("/", (req, res) => {

  const {
    title,
    content,
    author,
    image,
    category
  } = req.body;

  db.run(
    `INSERT INTO posts
    (title,content,author,image,category)
     VALUES(?,?,?,?,?)`,
    [
      title,
      content,
      author,
      image,
      category
    ],

    function(err) {

      if(err){
        return res.status(400).json(err.message);
      }

      res.json("Post Created");

    }
  );

});

/* GET POSTS */

router.get("/", (req, res) => {

  db.all(
    `SELECT * FROM posts`,
    [],
    (err, rows) => {

      res.json(rows);

    }
  );

});

/* GET SINGLE POST */

router.get("/:id", (req, res) => {

  db.get(
    `SELECT * FROM posts WHERE id=?`,
    [req.params.id],
    (err, row) => {

      res.json(row);

    }
  );

});

/* UPDATE POST */

router.put("/:id", (req, res) => {

  const {
    title,
    content,
    image,
    category,
    likes
  } = req.body;

  db.run(
    `UPDATE posts
     SET
     title=?,
     content=?,
     image=?,
     category=?,
     likes=?
     WHERE id=?`,

    [
      title,
      content,
      image,
      category,
      likes,
      req.params.id
    ],

    function(err) {

      if(err){
        return res.status(400).json(err.message);
      }

      res.json("Post Updated");

    }
  );

});

/* DELETE POST */

router.delete("/:id", (req, res) => {

  db.run(
    `DELETE FROM posts WHERE id=?`,
    [req.params.id],
    function(err) {

      if(err){
        return res.status(400).json(err.message);
      }

      res.json("Post Deleted");

    }
  );

});

module.exports = router;