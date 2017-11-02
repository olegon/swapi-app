module.exports = async (fetch, speciesRepository) => {
    const allTheSpecies = [];

    let url = 'https://swapi.co/api/species';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const species = json.results;

        await species.forEach(async (specie) => {
            console.log(`Storing: ${specie.name}`);

            const [ , id ] = /https:\/\/swapi\.co\/api\/species\/(\d+)/.exec(specie.url);
            
            let id_planet_homeworld = null;
            try {
                id_planet_homeworld = /https:\/\/swapi\.co\/api\/planets\/(\d+)/.exec(specie.homeworld)[1];
            }
            catch (err) { }

            allTheSpecies.push(specie);

            await speciesRepository.insert({
                id,
                id_planet_homeworld,
                ...specie
            });
        });
        
        url = json.next;
    } while (url != null);

    return allTheSpecies;
}