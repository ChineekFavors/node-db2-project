const express = require('express');
const db = require('../data/db-config.js');

const router = express();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        res.json(cars);
    } catch(err){
        res.status(500).json({errorMessage: 'there was a problem retrieving cars data from database'});
    }
});

router.get('/:id', async (req,res) => {
    const {id} = req.params;
    try {
        car = await db('cars',).where('id', id);
        res.json(car);
    } catch(err){
        res.status(500).json({errorMessage: 'there was a problem retrieving data from database'})
    }
})


module.exports = router;