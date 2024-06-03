var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviemanagementsystem"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO user (firstname, lastname,phone, password ) VALUES ('amanuel', 'amanuel',0912345,'123456')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(" record inserted"+ result.affectedRows);
  });
});