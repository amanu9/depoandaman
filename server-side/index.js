
// module required
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const jwt = require('jsonwebtoken')
const multer = require('multer');
const path = require('path');
// setting connection to sql serve 
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

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


//Movie Regstration


// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Generate a unique filename
  }
});

const upload = multer({
  storage: storage
})

app.post("/moviecreate", upload.single('image'), async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);

  const { title, director, genre } = req.body; // Get the values from the request body

  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).send("No image file uploaded");
  }

  try {
    db.query(
      "INSERT INTO movies(title, director, genre, image) VALUES(?, ?, ?, ?)",
      [title, director, genre, req.file.filename], // Use the filename instead of the entire image object
      function (err, result) {
        if (err) throw err;
        res.send("Movie added");
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating movie");
  }
});

// app.post("/moviecreate", async (req, res) => {
//   const title = req.body.title;
//   const director = req.body.director;
//   const genre = req.body.genre;

//   try {
    
//     db.query(
//       "INSERT INTO movies(title,director,genre) VALUES(?,?,?)",
//       [title, director, genre],
//       function (err, result) {
//         if (err) throw err;
//         res.send("Movie added");
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error creating Movie");
//   }
// });

//End of Movie Registration 

app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies ", function (err, result) {
    console.log(result);
    if (err) throw err;
    res.send(result);
  });
});




app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies WHERE genre = 'Drama' ", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies WHERE genre = 'Animation ' ", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies WHERE genre = 'Family ' ", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})
app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies WHERE genre = 'Mystery ' ", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})
app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies WHERE genre = 'Sci-Fi ' ", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})

app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies WHERE genre = 'Biography ' ", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})

app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies WHERE genre = 'Sport ' ", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})




app.get("/movielist", (req, res) => {
  db.query("SELECT * FROM movies WHERE genre = 'Horror ' ", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});
	

// Update profile endpoint
app.put('/api/profile/:userId', (req, res) => {
  const userId = req.params.userId;
  const { firstname,lastname,username } = req.body;

  // Update the user's profile in the database
  const query = 'UPDATE userregistration SET firstname = ?, lastname = ?, username = ? WHERE id = 13';
  db.query(query, [firstname, lastname, username], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update profile' });
    } else {
      res.json({ message: 'Profile updated successfully' });
    }
  });
});

app.get('/api/profileview/:userId', (req, res) => {
  const userId = req.params.userId;

  // Fetch the user's profile from the database
  const query = 'SELECT firstname, lastname, username FROM userregistration WHERE id = 13';
  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch profile' });
    } else {
      if (result.length > 0) {
        const user = result[0];
        res.json({
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          // other: user.other,
          // profileImage: user.profileImage
        });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    }
  });
});


///

// end point for delete user 
app.delete("/moviedelete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM movies WHERE id	=?", [id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting record");
    } else {
      res.send("User Data deleted");
    }
  });
});


//get Total movies 

app.get("/totalmovies", (req, res) => {
  db.query("SELECT COUNT(*) AS total_movies FROM movies", function (err, result) {
    if (err) throw err;
    res.send(result[0]);
    
    
  });
});

app.get("/totalusers", (req, res) => {
  db.query("SELECT COUNT(*) AS total_users FROM userregistration", function (err, result) {
    if (err) throw err;
    res.send(result[0]);
  });
});

app.get("/genres", (req, res) => {
  db.query("SELECT  genre FROM movies", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
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