const express = require('express');
const carsRouter = require('./cars/carsRouter.js');

const server = express();

server.use(express.json());


 server.use('/cars', carsRouter);

server.get('/', (req,res) => {
    res.status(200).send('<h1>Node-db2-project</h2>');
});

module.exports = server;