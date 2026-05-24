const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./blog.db",
  (err) => {

    if(err){
      console.log(err.message);
    }
    else{
      console.log("SQLite Connected");
    }

  }
);

db.serialize(() => {

  /* USERS */

  db.run(`
    CREATE TABLE IF NOT EXISTS users (

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      name TEXT,

      email TEXT UNIQUE,

      password TEXT

    )
  `);

  /* POSTS */

  db.run(`
    CREATE TABLE IF NOT EXISTS posts (

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      title TEXT,

      content TEXT,

      author TEXT,

      image TEXT,

      category TEXT,

      likes INTEGER DEFAULT 0

    )
  `);

  /* COMMENTS */

  db.run(`
    CREATE TABLE IF NOT EXISTS comments (

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      postId INTEGER,

      user TEXT,

      text TEXT

    )
  `);

});

module.exports = db;