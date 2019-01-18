var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.listen(8000);
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./server/routes')(app);

