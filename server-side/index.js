

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviemanagementsystem",
});

app.post("/create", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const password = req.body.password;
 

  db.query(
    "INSERT INTO userregistration(firstname,lastname,username,password) VALUES(?,?,?,?)",
    [firstname, lastname, username, password],
    function (err, result) {
      if (err) throw err;
      res.send("user added");
    }
  );
});

app.get("/check_username/:username", (req, res) => {
  const username = req.params.username;

  db.query("SELECT COUNT(*) as count FROM userregistration WHERE username = ?", [username], function (err, result) {
    if (err) throw err;

    const exists = result[0].count > 0;
    res.send({ exists: exists });
  });
});

// getting all list of user 
app.get("/userlist", (req, res) => {
  db.query("SELECT * FROM userregistration", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});