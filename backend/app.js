var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cookieParser = require('cookie-parser');
var cors = require('cors');
var app = express();

app.use(cors())
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in movies.js
var notifications = require('./notifications.js');

//Use the Router on the sub route /movies
app.use('/api', notifications);

app.listen(5000);