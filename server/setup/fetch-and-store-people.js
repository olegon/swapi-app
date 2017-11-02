module.exports = async (fetch, peopleRepository) => {
    const allThePeople = [];

    let url = 'https://swapi.co/api/people';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const people = json.results;

        await people.forEach(async (person) => {
            console.log(`Storing: ${person.name}`);
            
            const [ , id ] = /https:\/\/swapi\.co\/api\/people\/(\d+)/.exec(person.url);
            
            let id_planet_homeworld = null;
            try {
                id_planet_homeworld = /https:\/\/swapi\.co\/api\/planets\/(\d+)/.exec(specie.homeworld)[1];
            }
            catch (err) { }
            
            allThePeople.push(person);
            
            await peopleRepository.insert({
                id,
                id_planet_homeworld,
                ...person
            });
        });

        url = json.next;
    } while (url != null);

    return allThePeople;
}