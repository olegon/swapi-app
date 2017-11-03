module.exports = async (fetch, vehicleRepository, extractId) => {
    const rawVehicles = [];

    let url = 'https://swapi.co/api/vehicles';
    do {
        console.log(`Fetching ${url}`);
        
        const response = await fetch(url);
        const json = await response.json();
        
        const vehicles = json.results;

        for (let vehicle of vehicles) {
            console.log(`Storing vehicle: ${vehicle.name}`);

            const id = extractId(vehicle.url);

            rawVehicles.push(vehicle);
            
            await vehicleRepository.insert({
                id,
                ...vehicle
            });
        }

        url = json.next;
    } while (url != null);

    return rawVehicles;
}