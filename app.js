/*
var sql = require('mssql');

var dbConfig={
    server:"DESKTOP-V1R87J2\SQLEXPRESS",
    database:"OBDdata",
    user:"",
    password:"",
    port:8000
}

function getData(){
    var con=new sql.Connection(dbConfig);
    var req=new sql.Request(con);
    con.connect(function (err){
        if(err){
            console.log(err);
            return;
        }
        req.query('select * from newData', function(err,recordset){
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log(recordset);
            }
            con.close();
        });
    });
}getData();
*/
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/dpdata',{useMongoClient:true});
require("./src/app/shared/models/product");
