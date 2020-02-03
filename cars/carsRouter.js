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
        const car = await db('cars',).where('id', id);
        res.json(car);
    } catch(err){
        res.status(500).json({errorMessage: 'there was a problem retrieving data from database'})
    }
});

router.post('/', async (req,res) => {
    const body = req.body;
    try {
        const postCar = await db('cars').insert(body);
        res.status(201).json(postCar);
    } catch(err) {
        res.status(500).json({errorMessage: 'there was a problem posting to database'});
    }
});

router.put('/:id', async (req,res) => {
    const {id} = req.params;
    const updateCar = req.body;
    try {
        const car = await db('cars').where('id', id).update(updateCar);
        res.status(201).json({updated: car});
    } catch(err) {
        res.status(500).json({errorMessage: 'there was a problem updating database'});    
    }    
});


module.exports = router;