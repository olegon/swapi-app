module.exports = function (db) {
    return {
        insert: function ({
            id,
            model = null,
            consumables = null,
            vehicle_class = null,
            passengers = null,
            edited = null,
            crew = null,
            length = null,
            cargo_capacity = null,
            manufacturer = null,
            cost_in_credits = null,
            max_atmosphering_speed = null,
            created = null,
            name = null
        }) {
            return new Promise((res, rej) => {
                db.run(`
                    insert into vehicles (id, model, consumables, vehicle_class, passengers, edited, crew, length, cargo_capacity, manufacturer, cost_in_credits, max_atmosphering_speed, created, name)
                    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                `,
                [id, model, consumables, vehicle_class, passengers, edited, crew, length, cargo_capacity, manufacturer, cost_in_credits, max_atmosphering_speed, created, name],
                function (err) {
                    if (err) return rej(err);
                    
                    res();
                });
            });
        },
        list: function () {
            return new Promise((res, rej) => {
                db.all(`
                    select id, model, consumables, vehicle_class, passengers, edited, crew, length, cargo_capacity, manufacturer, cost_in_credits, max_atmosphering_speed, created, name
                    from vehicles;
                `, [], function (err, rows) {
                    if (err) return rej(err);

                    res(rows);
                });
            });
        }
    }
};