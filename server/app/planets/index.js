const express = require('express');
const makePlanetsRepository = require('./repository');

module.exports = function (db) {
    const planetsRepository = makePlanetsRepository(db);
    const router = express.Router();

    router.get('/', (req, res) => {
        planetsRepository
        .list()
        .then(planets => res.status(200).json(planets))
        .catch(err => res.status(500).json({ error: err }));
    });

    return router;
}

