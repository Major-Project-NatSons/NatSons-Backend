const { userController } = require('../controllers');
const countryController = require('../controllers/countryController');

const router = require('express').Router();

router.post('/add-new-country',userController.verifyToken,countryController.addNewCountry);
router.get('/get-all-countries', countryController.getAllCountries);
router.get('/get-country-by-id/:id', countryController.getCountryById);

module.exports = router;