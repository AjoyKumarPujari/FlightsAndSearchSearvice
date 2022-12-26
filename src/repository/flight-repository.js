const {Flights} = require('../models/index');


class FlightsRepository {
    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            console.log(flight.data);
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports = FlightsRepository; 