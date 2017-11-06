const { SQLITE_FILEPATH } = process.env;

if (SQLITE_FILEPATH == null) throw new Error('Variável de ambiente SQLITE_FILEPATH não encontrada.');

const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const fetch = require('node-fetch');
const _ = require('lodash');

try {
	fs.unlinkSync(SQLITE_FILEPATH);
}
catch (e) {
	console.error(e);
}

const { extractId } = require('./util');

const db = new sqlite3.Database(SQLITE_FILEPATH);

const createDatabaseSchema = require('./create-database-schema');

const planetRepository = require('../app/planets/repository')(db);
const fetchAndStorePlanets = require('./fetch-and-store-planets');

const peopleRepository = require('../app/people/repository')(db);
const fetchAndStorePeople = require('./fetch-and-store-people');

const filmsRepository = require('../app/films/repository')(db);
const fetchAndStoreFilms = require('./fetch-and-store-films');

const speciesRepository = require('../app/species/repository')(db);
const fetchAndStoreSpecies = require('./fetch-and-store-species');

const starshipsRepository = require('../app/starships/repository')(db);
const fetchAndStoreStarships = require('./fetch-and-store-starships');

const vehiclesRepository = require('../app/vehicles/repository')(db);
const fetchAndStoreVehicles = require('./fetch-and-store-vehicles');

(async () => {
    await createDatabaseSchema(db);

    const [
        rawPeople,
        rawPlanets,
        rawFilms,
        rawSpecies,
        rawStarships,
        rawVehicles
    ] = await Promise.all([
        fetchAndStorePeople(fetch, peopleRepository, extractId),
        fetchAndStorePlanets(fetch, planetRepository, extractId),
        fetchAndStoreFilms(fetch, filmsRepository, extractId),
        fetchAndStoreSpecies(fetch, speciesRepository, extractId),
        fetchAndStoreStarships(fetch, starshipsRepository, extractId),
        fetchAndStoreVehicles(fetch, vehiclesRepository, extractId)
    ]);

    // console.log(rawPlanets);
    // console.log(rawPeople);
    // console.log(rawFilms);
    // console.log(rawSpecies);
    // console.log(rawStarships);
    // console.log(rawVehicles);

})();
