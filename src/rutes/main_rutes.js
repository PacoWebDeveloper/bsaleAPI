'use strict'
var express = require('express');
/**
 * Requires the main_controller.js file where all the configurations about queries to database are located
 */
var main_controller = require('../controllers/main_controller');
/**
 * Gets router module from express framework, it makes routes possible
 */
var router = express.Router();
/**
 * Router get sets the next route part and the corresponding controller to make an especific action
 * @example
 * router.get('/test', main_controller.test);
 * Indicate "/test" is the following to /api(remember /api is the main part of all our routes) so, the route now is the following
 * /api/test and then we have "main_controller.test", with this code we call to test controller configured on main_controller.js file
 * On the next code lines we find the other configuration for all the others controllers
 */
router.get('/test', main_controller.test);
router.get('/getAllProducts', main_controller.getAllProducts);
router.get('/getProductsByName', main_controller.selectProductByName);
router.get('/getProductsByCategory', main_controller.selectProductByCategory);

module.exports = router;