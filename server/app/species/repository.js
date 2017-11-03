module.exports = function (db) {
    return {
        insert: function ({
            id,
            id_planets_homeworld = null,
            language = null,
            skin_colors = null,
            designation = null,
            name = null,
            average_height = null,
            classification = null,
            eye_colors = null,
            average_lifespan = null,
            edited = null,
            hair_colors = null,
            created = null
        }) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into species (id, id_planets_homeworld, language, skin_colors, designation, name, average_height, classification, eye_colors, average_lifespan, edited, hair_colors, created)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
                [id, id_planets_homeworld, language, skin_colors, designation, name, average_height, classification, eye_colors, average_lifespan, edited, hair_colors, created],
                function (err) {
                    if (err) return rej(err);
                    
                    res();
                });
            });
        },
        list: function () {
            return new Promise((res, rej) => {
                db.all(`
                    select id, id_planets_homeworld, language, skin_colors, designation, name, average_height, classification, eye_colors, average_lifespan, edited, hair_colors, created
                    from species;
                `, [], function (err, rows) {
                    if (err) return rej(err);

                    res(rows);
                });
            });
        }
    }
};