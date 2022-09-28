const dbconn = require("./dbconnect");

if(dbconn=="connected");
{
    console.log("Connected");
    q = "SELECT * FROM student limit 1";
    dbconn.connection.query("SELECT * FROM student", function (err, result, fields) {
        if (err) throw err;
        console.log(result);});

}