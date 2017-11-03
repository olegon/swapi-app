const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('/tmp/swapi.db');

const makePlanetsRoute = require('./planets');
const makePeopleRoute = require('./people');
const makeFilmsRoute = require('./films');
const makeSpeciesRoute = require('./species');
const makeStarshipsRoute = require('./starships');
const makeVehiclesRoute = require('./vehicles');

const app = express();

app.use('/api/v1/planets', makePlanetsRoute(db));
app.use('/api/v1/people', makePeopleRoute(db));
app.use('/api/v1/films', makeFilmsRoute(db));
app.use('/api/v1/species', makeSpeciesRoute(db));
app.use('/api/v1/starships', makeStarshipsRoute(db));
app.use('/api/v1/vehicles', makeVehiclesRoute(db));

module.exports = app;
