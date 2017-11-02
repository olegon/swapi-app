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

(async () => {
    await createDatabaseSchema(db);

    // const planets = await fetchAndStorePlanets(fetch, planetRepository);
    // console.log(planets);

    // const people = await fetchAndStorePeople(fetch, peopleRepository);
    // console.log(people);

    // const films = await fetchAndStoreFilms(fetch, filmsRepository);
    // console.log(films);

    // const species = await fetchAndStoreSpecies(fetch, speciesRepository);
    // console.log(species);

    const starships = await fetchAndStoreStarships(fetch, starshipsRepository);
    console.log(starships);
    
})();
