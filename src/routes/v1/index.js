const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller')


const router = express.Router();

router.post('/city', CityController.create);
router.get('/city', CityController.getAll);
router.delete('/city/:id', CityController.destory);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);


router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll);

module.exports = router;