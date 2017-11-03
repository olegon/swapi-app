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
            
            const id = extractId(film.url);
            
            rawFilms.push(film);
            
            await filmRepository.insert({
                id,
                ...film
            });
        }

        url = json.next;
    } while (url != null);

    return rawFilms;
}