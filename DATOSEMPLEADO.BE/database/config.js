const mysql2 = require("mysql2");

const mysqlConnection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "TEST"
});

mysqlConnection.connect(function (err){
    if(err) {
        console.log(err);
        return;
    }else {
        console.log("DB, Connected...");
    }
});

module.exports =  mysqlConnection;