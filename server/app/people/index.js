const express = require('express');
const makePeopleRepository = require('./repository');

module.exports = function (db) {
    const peopleRepository = makePeopleRepository(db);
    const router = express.Router();

    router.get('/', (req, res) => {
        peopleRepository
        .list()
        .then(people => res.status(200).json(people))
        .catch(err => res.status(500).json({ error: err }));
    });

    router.get('/:id', (req, res) => {
        const { id } = req.params;
        
        peopleRepository
        .get(id)
        .then(person => res.status(200).json(person))
        .catch(err => res.status(500).json({ error: err }));
    });
    
    return router;
}

