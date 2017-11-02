module.exports = function (db) {
    return {
        insert: function ({
            id,
            surface_water = '',
            gravity = '',
            name = '',
            climate = '',
            population = '',
            rotation_period = '',
            diameter = '',
            edited = '',
            terrain = '',
            orbital_period = '',
            created = new Date().toISOString()
        }) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into planets (id, surface_water, gravity, name, climate, population, rotation_period, diameter, edited, terrain, orbital_period, created)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
                [id, surface_water, gravity, name, climate, population, rotation_period, diameter, edited, terrain, orbital_period, created],
                function (err) {
                    if (err) return rej(err);
                    
                    res();
                });
            });
        },
        list: function () {
            return new Promise((res, rej) => {
                db.all(`
                    select id, surface_water, gravity, name, climate, population,
                        rotation_period, diameter, edited, terrain, orbital_period, created
                    from planets;
                `, [], function (err, rows) {
                    if (err) return rej(err);

                    res(rows);
                });
            });
        }
    }
};