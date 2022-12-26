const {FlightsRepository, AirplaneRepository} = require('../repository/index');


class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightsRepository = new FlightsRepository();
    }
     async createFlight(data){
        try{
            
                const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
                const flight = await this.flightsRepository.createFlight({
                    ...data, totalSeats:airplane.capacity
                });
                return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
     }

     async getFlightData() {

     }
}
module.exports = FlightService;
/**
 * {
 * //flight number,
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * DepatureTime
 * Price
 * totalSit--->fatch from airplane
 * }
 */