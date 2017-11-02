const express = require('express');
const makeFilmsRepository = require('./repository');

module.exports = function (db) {
    const filmsRepository = makeFilmsRepository(db);
    const router = express.Router();

    router.get('/', (req, res) => {
        filmsRepository
        .list()
        .then(films => res.status(200).json(films))
        .catch(err => res.status(500).json({ error: err }));
    });

    return router;
}

