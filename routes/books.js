const express = require('express');
const router = express.Router();
const { Books } = require('../models');


router.get('/', async(req, res) => {
    console.log('API diakses pada ', new Date().toLocaleString());
    try {
        const books = await Books.findAll();
        res.json({status : 'OK', data: books});
    } catch (error) {
        res.status(500).json({error : error.message});
    }
})

module.exports = router;