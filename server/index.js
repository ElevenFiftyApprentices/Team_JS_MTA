var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

//created instance of express allowing us to access it
var app = express();

//import router.js
var router = require('./router');

//DB connection
mongoose.connect("mongodb://localhost:shoppinglist/shoppinglist")


//MIDDLEWARE

//cors is Cross Origin Resource Sharing
app.use(cors());

//unstingify incoming json requests
app.use(bodyParser.json({type: '*/*'}));

//call router function
router(app);

//define port on local machine
var port = process.env.Port || 3000;

//create node server and pass in express variable from above
var server = http.createServer(app);

//get server to listen for outside requests
server.listen(port);
console.log('Server listening on ' + port);

