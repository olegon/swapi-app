module.exports = async (fetch, vehicleRepository) => {
    const allTheVehicles = [];

    let url = 'https://swapi.co/api/vehicles';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const vehicles = json.results;

        await vehicles.forEach(async (vehicle) => {
            console.log(`Storing: ${vehicle.name}`);

            const [ , id ] = /https:\/\/swapi\.co\/api\/vehicles\/(\d+)/.exec(vehicle.url);

            allTheVehicles.push(vehicle);
            
            await vehicleRepository.insert({
                id,
                ...vehicle
            });
        });

        url = json.next;
    } while (url != null);

    return allTheVehicles;
}