const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('/tmp/swapi-db');
const makePlanetsRoute = require('./planets');
const makePeopleRoute = require('./people');

const app = express();

app.use('/api/v1/planets', makePlanetsRoute(db));

module.exports = app;
