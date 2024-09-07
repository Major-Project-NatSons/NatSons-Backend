const countryController = require('../controllers/countryController');

const router = require('express').Router();

router.get('/', countryController.getAllCountries);

module.exports = router;