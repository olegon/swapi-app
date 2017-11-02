module.exports = function (db) {
    return {
        insert: function ({
            id,
            id_planet_homeworld = null,
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
                    insert into people (id, id_planet_homeworld, edited, skin_color, name, birth_year, height, eye_color, gender, created, hair_color, mass)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
                [id, id_planet_homeworld, edited, skin_color, name, birth_year, height, eye_color, gender, created, hair_color, mass],
                function (err) {
                    if (err) return rej(err);
                    
                    res();
                });
            });
        },
        list: function () {
            return new Promise((res, rej) => {
                db.all(`
                    select id, id_planet_homeworld, edited, skin_color, name, birth_year, height, eye_color, gender, created, hair_color, mass
                    from people;
                `, [], function (err, rows) {
                    if (err) return rej(err);

                    res(rows);
                });
            });
        }
    }
};