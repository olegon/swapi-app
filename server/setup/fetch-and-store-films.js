module.exports = async (fetch, filmRepository, extractId) => {
    const rawFilms = [];

    let url = 'https://swapi.co/api/films';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const films = json.results;

        for (let film of films) {
            console.log(`Storing film: ${film.title}`);
            
            rawFilms.push(film);

            const id = extractId(film.url);
            
            await filmRepository.insert({
                id,
                ...film
            });

            const id_vehicles = film.vehicles.map(extractId);
            for (let id_vehicle of id_vehicles) {
                console.log(`Storing relation film x vehicle (${id}, ${id_vehicle})`);
                await filmRepository.insertVehicle(id, id_vehicle);
            }

            const id_starships = film.starships.map(extractId);
            for (let id_starship of id_starships) {
                console.log(`Storing relation film x starship (${id}, ${id_starship})`);
                await filmRepository.insertStarship(id, id_starship);
            }

            const id_planets = film.planets.map(extractId);
            for (let id_planet of id_planets) {
                console.log(`Storing relation film x planet (${id}, ${id_planet})`);
                await filmRepository.insertPlanet(id, id_planet);
            }

            const id_species = film.species.map(extractId);
            for (let id_specie of id_species) {
                console.log(`Storing relation film x specie (${id}, ${id_specie})`);
                await filmRepository.insertSpecie(id, id_specie);
            }
        }

       

        url = json.next;
    } while (url != null);

    return rawFilms;
}