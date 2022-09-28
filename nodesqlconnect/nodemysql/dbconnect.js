var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apidb"
  });
  con.connect(function(err){
    if(err)
        return err;
    return "Connected";
  });

//console.log(con)
module.exports.connection = con;


/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("SELECT * FROM booking", function (err, result, fields) {
        if (err) throw err;
        console.log(result);});
  });
*/