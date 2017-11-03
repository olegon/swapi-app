module.exports = async (fetch, planetRepository) => {
    const rawPlanets = [];

    let url = 'https://swapi.co/api/planets';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const planets = json.results;

        await planets.forEach(async (planet) => {
            console.log(`Storing: ${planet.name}`);

            const [ , id ] = /https:\/\/swapi\.co\/api\/planets\/(\d+)/.exec(planet.url);

            rawPlanets.push(planet);
            
            await planetRepository.insert({
                id,
                ...planet
            });
        });

        url = json.next;
    } while (url != null);

    return rawPlanets;
}