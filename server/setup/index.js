const sqlite3 = require('sqlite3').verbose();
const fetch = require('node-fetch');

const db = new sqlite3.Database('/tmp/swapi-db');

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
    
    const rawPlanets = await fetchAndStorePlanets(fetch, planetRepository);

    const [
        rawPeople,
        rawFilms,
        rawSpecies,
        rawStarships,
        rawVehicles
    ] = await Promise.all([
        fetchAndStorePeople(fetch, peopleRepository),
        fetchAndStoreFilms(fetch, filmsRepository),
        fetchAndStoreSpecies(fetch, speciesRepository),
        fetchAndStoreStarships(fetch, starshipsRepository),
        fetchAndStoreVehicles(fetch, vehiclesRepository)
    ]);

    console.log(rawPlanets);
    console.log(rawPeople);
    console.log(rawFilms);
    console.log(rawSpecies);
    console.log(rawStarships);
    console.log(rawVehicles);

})();
