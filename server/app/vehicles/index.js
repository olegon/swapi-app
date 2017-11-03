const express = require('express');
const makeVehiclesRepository = require('./repository');

module.exports = function (db) {
    const vehiclesRepository = makeVehiclesRepository(db);
    const router = express.Router();

    router.get('/', (req, res) => {
        vehiclesRepository
        .list()
        .then(vehicles => res.status(200).json(vehicles))
        .catch(err => res.status(500).json({ error: err }));
    });

    return router;
}

