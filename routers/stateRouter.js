const stateController = require('../controllers/stateController');

const router = require('express').Router();

router.post('/add-new-state',stateController.addNewState);
router.get('/get-all-states', stateController.getAllStates);
router.get('/get-states-by-country/:countryId', stateController.getStatesByCountry);
router.get('/get-state-by-id/:stateId', stateController.getStateById);

module.exports = router;