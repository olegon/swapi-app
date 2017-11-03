module.exports = function createDatabaseSchema(db) {
    return new Promise((res, rej) => {
        db.serialize(() => {
            db.run(
                `create table planets (
                    id integer primary key not null,
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
                `create table people (
                    id integer primary key not null,
                    id_planets_homeworld integer,
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
                `create table films (
                    id integer primary key not null,
                    release_date text,
                    director text,
                    title text,
                    edited text,
                    producer text,
                    episode_id integer,
                    created text,
                    opening_crawl text
                );`
            );

            db.run(
                `create table species (
                    id integer primary key not null,
                    id_planets_homeworld integer,
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

            db.run(
                `create table starships (
                    id integer primary key not null,
                    length text,
                    MGLT text,
                    consumables text,
                    name text,
                    passengers text,
                    manufacturer text,
                    hyperdrive_rating text,
                    max_atmosphering_speed text,
                    edited text,
                    starship_class text,
                    cost_in_credits text,
                    model text,
                    cargo_capacity text,
                    crew text,
                    created text
                );`
            );

            db.run(
                `create table vehicles (
                    id integer primary key not null,
                    model text,
                    consumables text,
                    vehicle_class text,
                    passengers text,
                    edited text,
                    crew text,
                    length text,
                    cargo_capacity text,
                    manufacturer text,
                    cost_in_credits text,
                    max_atmosphering_speed text,
                    created text,
                    name text
                );`
            );

            db.run(
                `create table people_species (
                    id_people integer not null,
                    id_species integer not null,
                    CONSTRAINT unique_people_species UNIQUE (id_people, id_species)
                );`
            );

            db.run(
                `create table people_films (
                    id_people integer not null,
                    id_films integer not null,
                    CONSTRAINT unique_people_films UNIQUE (id_people, id_films)
                );`
            );

            db.run(
                `create table people_starships (
                    id_people integer not null,
                    id_starships integer not null,
                    CONSTRAINT unique_people_starships UNIQUE (id_people, id_starships)
                );`
            );

            db.run(
                `create table people_vehicles (
                    id_people integer not null,
                    id_vehicles integer not null,
                    CONSTRAINT unique_people_vehicles UNIQUE (id_people, id_vehicles)
                );`
            );
            
            res();
        });
    });
}