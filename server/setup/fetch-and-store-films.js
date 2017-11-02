module.exports = async (fetch, filmRepository) => {
    const allTheFilms = [];

    let url = 'https://swapi.co/api/films';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const films = json.results;

        await films.forEach(async (film) => {
            console.log(`Storing: ${film.title}`);
            
            const [ , id ] = /https:\/\/swapi\.co\/api\/films\/(\d+)/.exec(film.url);
            
            allTheFilms.push(film);
            
            await filmRepository.insert({
                id,
                ...film
            });
        });

        url = json.next;
    } while (url != null);

    return allTheFilms;
}