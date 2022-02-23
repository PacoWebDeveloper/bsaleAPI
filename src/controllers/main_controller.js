'use strict'
//@ts-check
/**
 * Requires POOL method from database.js file in which we have configured it
 */
const pool = require('../database/database');

/**
 * Contains all the controllers configured for the API
 * @type {Object}
 */
var controller = {
    /**
     * Test method is to test the connection with the API
     * @name test 
     * @function 
     * @param {Object} req Brings all data sent by user app (in this case is not working)
     * @param {Object} res Makes possible to generate a server response
     * @returns {Object} Returns the server response with a regards mesagge
     */
    test: (req, res) => {
        return res.status(200).send({
            message: 'Hola soy la API de Bsale'
        })
    },
    /**
     * Selects all the products listed in the database
     * @name getAllProducts
     * @function
     * @param {Object} req Brings all data sent by user app
     * @param {Object} res Makes possible to generate a server response
     * @returns {Object} Returns the server response with the message configurated
     */
    getAllProducts: async (req, res) => {
        /**
         * Is the SQL query
         * @type {String}
         */
        const sql = 'SELECT * FROM product';
        /**
         * @name Pool_query
         * @function
         * @param {String} sql Contains the query to be executed
         * @param {CallBack} arrowFunction 
         * know more in {@link arrowFunction}
         */
        /**
         * @name arrowFunction
         * @function
         * @param {Object} err 
         * @param {Object} results Contains the response from the database query
         * @returns Returns a response from the server with either the error or the results object
         */
        await pool.query(sql, (err, results) => {
            if (err) return res.status(400).send({message:'Error ocurred', err});

            if (results) return res.status(200).send({results});
            else return res.status(404).send({message: 'No results'});
        });
    },
    /**
     * Selects the products by name those are equal to the user request
     * @name selectProductByName
     * @function
     * @param {Object} req Brings all data sent by user app
     * @param {Object} res Makes possible to generate a server response
     * @returns {Object} Returns the server response with the message configurated
     */
    selectProductByName: async (req, res) => {
        const {name} = req.query;
        const sql = `SELECT * FROM product WHERE name LIKE '%${name}%'`;

        await pool.query(sql, (err, results) => {
            if (err) return res.status(400).send({message: 'Error ocurred', err});

            if (results) return res.status(200).send({results});
            else return res.status(404).send({message: 'No results'});
        });                
    },
    /**
     * Selects the products by category those are equal to the user request
     * @name selectProductByCategory
     * @function
     * @param {Object} req Brings all data sent by user app
     * @param {Object} res Makes possible to generate a server response
     * @returns {Object} Returns the server response with the message configurated
     */
    selectProductByCategory: async (req, res) => {
        const {category} = req.query;
        const sql = `SELECT * FROM product WHERE category = '${category}%'`;
        
        await pool.query(sql, (err, results) => {
            if (err) return res.status(400).send({message: 'Error ocurred', err});

            if (results) return res.status(200).send({results});
            else return res.status(404).send({message: 'No results'});
        })
    }
}

module.exports = controller;