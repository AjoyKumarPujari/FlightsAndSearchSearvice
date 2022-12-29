const { ClientErrors, ServerErrors, SuccessCodes} = require('../utils/error-codes');
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber  ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price    
    ){
        //if any of the body param missing we come inside the if
        return res.status(ClientErrors.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err: 'Missing Mendatory Property to create a flight'
        });
    }

    next();
}
module.exports = {
    validateCreateFlight
}