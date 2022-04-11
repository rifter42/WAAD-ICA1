const express = require('express');
const mysql = require("mysql");
const app = express();

// Create parameters for database connection. The parameters have be set
// with environment variables
const connection = mysql.createConnection({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpass,
  database: process.env.db,
});

// Connect to the database
connection.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Execute creating the table we're using if it does not exist in db
connection.query("CREATE TABLE IF NOT EXISTS posts (id int NOT NULL, title varchar(255) NOT NULL, PRIMARY KEY (id))",
  (err, rows, fields) => {
    // If an error occured, throw an exception
    // If not, display "connected"
    if (err) throw err
    console.log("Connected");
});

app.post('/posts', (req, res) => {
    // On post request to /posts, we insert into the table, expecting that
    // id and title parameters will be provided in the post request
    connection.query(
    "INSERT INTO posts(id, title) VALUES(?, ?)",
    [req.body.id, req.body.title],
    (err, rows, fields) => {
      if (err) {
        // On error, return 500 and throw an expection
        res.status(500).send("Couldn't create a post");
        throw err;
      } else {
        // If no error occured, inform the user that post is created
        res.send("Post is created");
      }
  });
});

app.listen(3000, () => {
  console.log('Server running');
});
