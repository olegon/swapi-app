module.exports = async (fetch, peopleRepository, extractId) => {
    const rawPeople = [];

    let url = 'https://swapi.co/api/people';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const people = json.results;

        for (let person of people) {
            console.log(`Storing person: ${person.name}`);
            
            rawPeople.push(person);

            const id = extractId(person.url);
            
            let id_planets_homeworld = null;
            try {
                id_planets_homeworld = extractId(person.homeworld);
            }
            catch (err) { }
            
            await peopleRepository.insert({
                id,
                id_planets_homeworld,
                ...person
            });

            const id_species = person.species.map(extractId);
            for (let id_especie of id_species) {
                console.log(`Storing relation person x specie (${id}, ${id_especie})`);
                await peopleRepository.insertSpecie(id, id_especie);
            }
            
            const id_films = person.films.map(extractId);
            for (let id_film of id_films) {
                console.log(`Storing relation person x film (${id}, ${id_film})`);
                await peopleRepository.insertFilm(id, id_film);
            }

            const id_starships = person.starships.map(extractId);
            for (let id_starship of id_starships) {
                console.log(`Storing relation person x starship (${id}, ${id_starship})`);
                await peopleRepository.insertStarship(id, id_starship);
            }

            const id_vehicles = person.vehicles.map(extractId);
            for (let id_vehicle of id_vehicles) {
                console.log(`Storing relation person x vehicle (${id}, ${id_vehicle})`);
                await peopleRepository.insertVehicle(id, id_vehicle);
            }
        }

        url = json.next;
    } while (url != null);

    return rawPeople;
}