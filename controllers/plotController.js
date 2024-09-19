const plotDataModel = require('../models/dbConfig').db.plotData;

// Get all plots

module.exports.getAllPlots = async (req, res) => {
    try {
        const plots = await plotDataModel.findAll();
        res.status(200).send({ status: true, data: plots });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Server Error" });
    }
}

// Get plot by ID
module.exports.getPlotById = async (req, res) => {
    try {
        const plot = await plotDataModel.findByPk(req.params.plot_id);
        if (!plot) {
            return res.status(404).send({ status: false, message: 'Plot not found' });
        }
        res.status(200).send({ status: true, data: plot });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Server Error" });
    }
}

// Get all plots in a specific country
module.exports.getPlotsByCountry = async (req, res) => {
    try {
        const plots = await plotDataModel.findAll({
            where: {
                country_id: req.params.country_id
            }
        });
        res.status(200).send({ status: true, data: plots });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Server Error" });
    }
}

// Get all plots in a specific state
module.exports.getPlotsByState = async (req, res) => {
    try {
        const plots = await plotDataModel.findAll({
            where: {
                state_id: req.params.state_id
            }
        });
        res.status(200).send({ status: true, data: plots });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Server Error" });
    }
}


//Add new plot data

module.exports.addNewPlot = async (req, res) => {
    try {
        const newPlot = await plotDataModel.create(req.body);
        res.status(201).send({ status: true, msg: 'New Plot added.' });
    } catch (error) {
        res.status(500).send({ status: false, msg: 'An error occured while adding a new plot.' });
    }
}

// Update plot data

module.exports.updatePlot = async (req, res) => {
    try {
        const plot = await plotDataModel.findByPk(req.params.plot_id);
        if (!plot) {
            return res.status(404).send({ status: false, msg: 'Plot not found.' });
        }
        await plot.update(req.body);
        res.status(200).send({ status: true, msg: 'Plot updated.' });
    } catch (error) {
        res.status(500).send({ status: false, msg: 'An error occured while updating the plot.' });
    }
}

// Delete plot data

module.exports.deletePlot = async (req, res) => {
    try {
        const plot = await plotDataModel.findByPk(req.params.plot_id);
        if (!plot) {
            return res.status(404).send({ status: false, msg: 'Plot not found.' });
        }
        await plot.destroy();
        res.status(200).send({ status: true, msg: 'Plot deleted.' });
    } catch (error) {
        res.status(500).send({ status: false, msg: 'An error occured while deleting the plot.' });
    }
}

