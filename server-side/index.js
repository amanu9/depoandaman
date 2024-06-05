
// module required
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const jwt = require('jsonwebtoken')

// setting connection to sql serve 
app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviemanagementsystem",
});
// creating end point for user registsration 
const bcrypt = require('bcrypt');
app.post("/create", async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const password = req.body.password;

  try {
    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    db.query(
      "INSERT INTO userregistration(firstname,lastname,username,password) VALUES(?,?,?,?)",
      [firstname, lastname, username, hashedPassword],
      function (err, result) {
        if (err) throw err;
        res.send("user added");
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});
app.get("/check_username/:username", (req, res) => {
  const username = req.params.username;

  db.query("SELECT COUNT(*) as count FROM userregistration WHERE username = ?", [username], function (err, result) {
    if (err) throw err;

    const exists = result[0].count > 0;
    res.send({ exists: exists });
  });
});

// end point for getting all list of user 
app.get("/userlist", (req, res) => {
  db.query("SELECT * FROM userregistration", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
// end of it
 
// end point for delete user 
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM userregistration WHERE id=?", [id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting record");
    } else {
      res.send("User Data deleted");
    }
  });
});

//end of delete 


// end point for login

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM userregistration WHERE username = ?";

  db.query(sql, [req.body.username], (err, data) => {
    if (err) {
      return res.json("error");
    }

    if (data.length > 0) {
      const hashedPassword = data[0].password;
      // to generate token
      const token = jwt.sign({id:data[0].id},"Tewo Tecnology Solution");
//encript password
      bcrypt.compare(req.body.password, hashedPassword, (err, result) => {
        if (err) {
          return res.status(500).json("Internal  server error");
        }

        if (result) {
          // return res.json("success");
          
          return res.status(200).send({
            role:data[0].role,
            data:"success",
            token:token
          });
        } else {
          return res.status(401).send({
            token:null
          });
        }
      });
    } else {
      return res.status(500).json("Internal  server error");
    }
  });
});

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});