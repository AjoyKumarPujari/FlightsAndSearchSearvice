const express = require('express');
const { FlightMiddlewares} = require('../../middlewares/index')


const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.get('/city', CityController.getAll);
router.delete('/city/:id', CityController.destory);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);


router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight,
     FlightController.create
);
router.get('/flights',FlightController.getAll);

router.get('/flights/:id',FlightController.get);

router.post('/airports',AirportController.create);

router.get('/flights/:id',FlightController.get);

router.patch('/flights/:id',FlightController.update);
module.exports = router;