const express = require('express');
const makeStarshipsRepository = require('./repository');

module.exports = function (db) {
    const starshipsRepository = makeStarshipsRepository(db);
    const router = express.Router();

    router.get('/', (req, res) => {
        starshipsRepository
        .list()
        .then(species => res.status(200).json(species))
        .catch(err => res.status(500).json({ error: err }));
    });

    return router;
}

