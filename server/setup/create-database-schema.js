module.exports = function createDatabaseSchema (db) {
    return new Promise((res, rej) => {
        db.serialize(() => {
            db.run(
                `create table planets (
                    id int primary key not null,
                    surface_water text,
                    gravity text,
                    name text,
                    climate text,
                    population text,
                    rotation_period text,
                    diameter text,
                    edited text,
                    terrain text,
                    orbital_period text,
                    created text
                );`
            );
            
            res();
        });
    });
}