'use strict'
/**
 * Gets express framework
 */
var express = require('express');
/**
 * Gets CORS module
 */
var cors = require('cors');
/**
 * Sets express on "app" variable
 */
var app = express();
//Route archives
/**
 * Call to main_routes.js file, this file is where there all the configured routes are
 */
var main_routes = require('./rutes/main_rutes');

//MIDDELWARES
/**
 * Indicates CORS is going to be used by app and CORS is set in blank allowing any source, this is important to configure only with the sources that
 * can access to the API
 */
app.use(cors());

//Routes
/**
 * Indicates the initial part of our routes, and sets the main_routes.js file where all the routes configured for this API are located
 */
app.use('/api', main_routes);

module.exports = app;