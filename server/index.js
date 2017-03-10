var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');

var mongoose = require('mongoose');
//Database connection
//mongoose.connect('mongodb://localhost:shoppinglist/shoppinglsit');

app.use(bodyParser.json({ type: '*/*'}));
router(app);

var port = process.env.PORT || 3000;

var server = http.createServer(app);

server.listen(port);
	console.log('Server is listening on ' + port);