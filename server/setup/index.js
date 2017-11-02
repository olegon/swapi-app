const sqlite3 = require('sqlite3').verbose();
const fetch = require('node-fetch');

const db = new sqlite3.Database('/tmp/swapi-db');

const createDatabaseSchema = require('./create-database-schema');

const planetRepository = require('../app/planets/repository')(db);
const fetchAndStorePlanets = require('./fetch-and-store-planets');

const peopleRepository = require('../app/people/repository')(db);
const fetchAndStorePeople = require('./fetch-and-store-people');

(async () => {
    await createDatabaseSchema(db);

    const planets = await fetchAndStorePlanets(fetch, planetRepository);
    console.log(planets);
    
})();
