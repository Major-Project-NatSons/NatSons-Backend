const plotController = require('../controllers/plotController');

const router = require('express').Router();

router.post('/addNewPlot',plotController.addNewPlot);
router.get('/getAllPlots',plotController.getAllPlots);
router.get('/getPlotById/:plot_id',plotController.getPlotById);
router.get('/getPlotsByCountry/:country_id',plotController.getPlotsByCountry);
router.get('/getPlotsByState/:state_id',plotController.getPlotsByState);
router.put('/updatePlotDetails/:plot_id',plotController.updatePlot);

module.exports = router;