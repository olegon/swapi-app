module.exports = async (fetch, starshipsRepository) => {
    const rawStarships = [];

    let url = 'https://swapi.co/api/starships';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const starships = json.results;

        await starships.forEach(async (starship) => {
            console.log(`Storing: ${starship.name}`);

            const [ , id ] = /https:\/\/swapi\.co\/api\/starships\/(\d+)/.exec(starship.url);

            rawStarships.push(starship);
            
            await starshipsRepository.insert({
                id,
                ...starship
            });
        });

        url = json.next;
    } while (url != null);

    return rawStarships;
}