module.exports = function (db) {
    return {
        insert: function ({
            id,
            id_planets_homeworld = null,
            edited = '',
            skin_color = '',
            name = '',
            birth_year = '',
            height = '',
            eye_color = '',
            gender = '',
            created = new Date().toISOString(),
            hair_color = '',
            mass = ''
        }) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into people (id, id_planets_homeworld, edited, skin_color, name, birth_year, height, eye_color, gender, created, hair_color, mass)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
                [id, id_planets_homeworld, edited, skin_color, name, birth_year, height, eye_color, gender, created, hair_color, mass],
                function (err) {
                    if (err) return rej(err);
                    
                    res();
                });
            });
        },
        get: function (id) {
            return new Promise((res, rej) => {
                db.get(`
                    select
                        id, id_planets_homeworld, edited, skin_color, name, birth_year, height, eye_color, gender, created, hair_color, mass
                    from people
                    where id = ?;
                `, [id], function (err, row) {
                    if (err) return rej(err);
                    
                    res(row);
                });
            });
        },
        list: function () {
            return new Promise((res, rej) => {
                db.all(`
                    select
                        id, name, gender
                    from people;
                `, [], function (err, rows) {
                    if (err) return rej(err);

                    res(rows);
                });
            });
        },
        insertSpecie: function (id_person, id_specie) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into people_species (id_people, id_species)
                    values (?, ?);
                `,
                [ id_person, id_specie ],
                function (err) {
                    if (err) return rej(err);

                    res();
                });
            });
        },
        insertFilm: function (id_person, id_film) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into people_films (id_people, id_films)
                    values (?, ?);
                `,
                [ id_person, id_film ],
                function (err) {
                    if (err) return rej(err);

                    res();
                });
            });
        },
        insertStarship: function (id_person, id_starship) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into people_starships (id_people, id_starships)
                    values (?, ?);
                `,
                [ id_person, id_starship ],
                function (err) {
                    if (err) return rej(err);

                    res();
                });
            });
        },
        insertVehicle: function (id_person, id_vehicle) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into people_vehicles (id_people, id_vehicles)
                    values (?, ?);
                `,
                [ id_person, id_vehicle ],
                function (err) {
                    if (err) return rej(err);

                    res();
                });
            });
        }
    }
};