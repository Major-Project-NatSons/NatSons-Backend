const homeController = require('../controllers/homeController');

const router = require('express').Router();

router.post('/addNewHome',homeController.addNewHome);
router.get('/getAllHomes',homeController.getAllHomes);
router.get('/getHomeById/:home_id',homeController.getHomeById);
router.get('/getHomesByCountry/:country_id',homeController.getHomesByCountry);
router.put('/updsatHomeData/:home_id',homeController.updateHome);

module.exports = router;