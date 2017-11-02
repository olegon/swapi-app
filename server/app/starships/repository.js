module.exports = function (db) {
    return {
        insert: function ({
            id,
            length = null,
            MGLT = null,
            consumables = null,
            name = null,
            passengers = null,
            manufacturer = null,
            hyperdrive_rating = null,
            max_atmosphering_speed = null,
            edited = null,
            starship_class = null,
            cost_in_credits = null,
            model = null,
            cargo_capacity = null,
            crew = null,
            created = null
        }) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into starships (id, length, MGLT, consumables, name, passengers, manufacturer, hyperdrive_rating, max_atmosphering_speed, edited, starship_class, cost_in_credits, model, cargo_capacity, crew, created)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
                [id, length, MGLT, consumables, name, passengers, manufacturer, hyperdrive_rating, max_atmosphering_speed, edited, starship_class, cost_in_credits, model, cargo_capacity, crew, created],
                function (err) {
                    if (err) return rej(err);
                    
                    res();
                });
            });
        },
        list: function () {
            return new Promise((res, rej) => {
                db.all(`
                    select id, length, MGLT, consumables, name, passengers, manufacturer, hyperdrive_rating, max_atmosphering_speed, edited, starship_class, cost_in_credits, model, cargo_capacity, crew, created
                    from starships;
                `, [], function (err, rows) {
                    if (err) return rej(err);

                    res(rows);
                });
            });
        }
    }
};