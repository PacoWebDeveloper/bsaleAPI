'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
//Route archives
var main_routes = require('./rutes/main_rutes');

//MIDDELWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api', main_routes);

module.exports = app;