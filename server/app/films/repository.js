module.exports = function (db) {
    return {
        insert: function ({
            id,
            release_date = null,
            director = null,
            title = null,
            edited = null,
            producer = null,
            episode_id = null,
            created = null,
            opening_crawl = null
        }) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into films (id, release_date, director, title, edited, producer, episode_id, created, opening_crawl)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
                [id, release_date, director, title, edited, producer, episode_id, created, opening_crawl],
                function (err) {
                    if (err) return rej(err);
                    
                    res();
                });
            });
        },
        list: function () {
            return new Promise((res, rej) => {
                db.all(`
                    select id, release_date, director, title, edited, producer, episode_id, created, opening_crawl
                    from films;
                `, [], function (err, rows) {
                    if (err) return rej(err);

                    res(rows);
                });
            });
        },
        insertVehicle: function (id_film, id_vehicle) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into films_vehicles (id_films, id_vehicles)
                    values (?, ?);
                `,
                [ id_film, id_vehicle ],
                function (err) {
                    if (err) return rej(err);

                    res();
                });
            });
        },
        insertStarship: function (id_film, id_starship) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into films_starships (id_films, id_starships)
                    values (?, ?);
                `,
                [ id_film, id_starship ],
                function (err) {
                    if (err) return rej(err);

                    res();
                });
            });
        },
        insertPlanet: function (id_film, id_planet) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into films_planets (id_films, id_planets)
                    values (?, ?);
                `,
                [ id_film, id_planet ],
                function (err) {
                    if (err) return rej(err);

                    res();
                });
            });
        },
        insertSpecie: function (id_film, id_specie) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into films_species (id_films, id_species)
                    values (?, ?);
                `,
                [ id_film, id_specie ],
                function (err) {
                    if (err) return rej(err);

                    res();
                });
            });
        }
    }
};