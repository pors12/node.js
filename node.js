

const path = require('path');
var express = require('express');
var app = express();
const filepath = path.join(__dirname,"../public");

app.use(express.static("public"));
var server = app.listen(8080,function(){
    console.log("started server")
});
