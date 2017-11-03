module.exports = async (fetch, planetRepository, extractId)=> {
    const rawPlanets = [];

    let url = 'https://swapi.co/api/planets';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const planets = json.results;

        for (let planet of planets) {
            console.log(`Storing planet: ${planet.name}`);

            const id = extractId(planet.url);

            rawPlanets.push(planet);
            
            await planetRepository.insert({
                id,
                ...planet
            });
        }

        url = json.next;
    } while (url != null);

    return rawPlanets;
}