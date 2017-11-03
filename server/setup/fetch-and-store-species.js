module.exports = async (fetch, speciesRepository, extractId) => {
    const rawSpecies = [];

    let url = 'https://swapi.co/api/species';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const species = json.results;

        for (let specie of species) {
            console.log(`Storing specie: ${specie.name}`);

            const id = extractId(specie.url);
            
            let id_planets_homeworld = null;
            try {
                id_planets_homeworld = extractId(specie.homeworld);
            }
            catch (err) { }

            rawSpecies.push(specie);

            await speciesRepository.insert({
                id,
                id_planets_homeworld,
                ...specie
            });
        };
        
        url = json.next;
    } while (url != null);

    return rawSpecies;
}