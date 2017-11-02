module.exports = function createDatabaseSchema (db) {
    return new Promise((res, rej) => {
        db.serialize(() => {
            db.run(
                `create table people (
                    id int primary key not null,
                    id_planet_homeworld int,
                    edited text,
                    skin_color text,
                    name text,
                    birth_year text,
                    height text,
                    eye_color text,
                    gender text,
                    created text,
                    hair_color text,
                    mass text
                );`
            );

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

            db.run(
                `create table films (
                    id int primary key not null,
                    release_date text,
                    director text,
                    title text,
                    edited text,
                    producer text,
                    episode_id int,
                    created text,
                    opening_crawl text
                );`
            );

            db.run(
                `create table species (
                    id int primary key not null,
                    id_planet_homeworld int,
                    language text,
                    skin_colors text,
                    designation text,
                    name text,
                    average_height text,
                    classification text,
                    eye_colors text,
                    average_lifespan text,
                    edited text,
                    hair_colors text,
                    created text
                );`
            );

            res();
        });
    });
}