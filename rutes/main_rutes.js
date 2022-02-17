'use strict'
var express = require('express');

var main_controller = require('../controllers/main_controller');

var router = express.Router();

const pool = require('../database/database');

router.get('/test', main_controller.test);
router.get('/getAllProducts', main_controller.getAllProducts);
router.get('/getProductsByName', main_controller.selectProductByName);
router.get('/getProductsByCategory', main_controller.selectProductByCategory);

module.exports = router;