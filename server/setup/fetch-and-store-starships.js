module.exports = async (fetch, starshipsRepository, extractId) => {
    const rawStarships = [];

    let url = 'https://swapi.co/api/starships';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const starships = json.results;

        for (let starship of starships) {
            console.log(`Storing starship: ${starship.name}`);

            const id = extractId(starship.url);

            rawStarships.push(starship);
            
            await starshipsRepository.insert({
                id,
                ...starship
            });
        }

        url = json.next;
    } while (url != null);

    return rawStarships;
}