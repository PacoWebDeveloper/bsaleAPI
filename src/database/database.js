var mysql = require('mysql');
/**
 * Requires databse module from databaseKeys.js file
 * @name database
 */
var { database } = require('./databaseKeys');
/**
 * Requires promisify from utilities module.
 * It is basically used to convert a method that returns responses using a callback function to return responses in a promise object
 * @name promisify
 */
const { promisify } = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) /* connection.release(); */
    console.log('Database is Connected');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;