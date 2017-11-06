const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('/tmp/swapi.db');

const planetsRoute = require('./planets')(db);
const peopleRoute = require('./people')(db);
const filmsRoute = require('./films')(db);
const speciesRoute = require('./species')(db);
const starshipsRoute = require('./starships')(db);
const vehiclesRoute = require('./vehicles')(db);

const app = express();

const apiRouter = express.Router();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    
    next();
});

apiRouter.use('/planets', planetsRoute);
apiRouter.use('/people', peopleRoute);
apiRouter.use('/films', filmsRoute);
apiRouter.use('/species', speciesRoute);
apiRouter.use('/starships', starshipsRoute);
apiRouter.use('/vehicles', vehiclesRoute);

app.use('/api/v1', apiRouter);

module.exports = app;
