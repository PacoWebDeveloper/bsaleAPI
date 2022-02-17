'use strict'

const pool = require('../database/database');

var controller = {

    test: (req, res) => {
        return res.status(200).send({
            message: 'Hola soy la API de Bsale'
        })
    },

    getAllProducts: async (req, res) => {
        /* const { limit } = req.query;
        let lowerLimit = limit - 8; */

        /* const sql = `SELECT * FROM product LIMIT ${lowerLimit},${limit}`; */

        const sql = 'SELECT * FROM product';
        
        await pool.query(sql, (err, results) => {
            if (err) return res.status(400).send({message:'Error ocurred', err});

            if (results) return res.status(200).send({results});
            else return res.status(404).send({message: 'No results'});
        });
    },

    selectProductByName: async (req, res) => {
        const {name} = req.query;
        const sql = `SELECT * FROM product WHERE name LIKE '%${name}%'`;

        await pool.query(sql, (err, results) => {
            if (err) return res.status(400).send({message: 'Error ocurred', err});

            if (results) return res.status(200).send({results});
            else return res.status(404).send({message: 'No results'});
        });                
    },

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