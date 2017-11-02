const express = require('express');
const makeSpeciesRepository = require('./repository');

module.exports = function (db) {
    const speciesRepository = makeSpeciesRepository(db);
    const router = express.Router();
    
    router.get('/', (req, res) => {
        speciesRepository
        .list()
        .then(species => res.status(200).json(species))
        .catch(err => res.status(500).json({ error: err }));
    });

    return router;
}

