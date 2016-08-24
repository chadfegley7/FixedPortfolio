var express= require("express");
var path= require("path");
var bodyParser = require("body-parser");
var gumerPSN = require("gumer-psn");
var app = express();
require("./server/config/mongoose.js");

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require("mongoose");

require("./server/config/routes.js");



app.listen(8000, function(){
  console.log("Portfolio up and running!!!")
});
