const countryModel = require('../models/dbConfig').db.countryModel;

/**
 * Add a new country to the database
 */
module.exports.addNewCountry = async (req, res) => {
    try {
        // Create a new country record using request body
        const newCountry = await countryModel.create(req.body);
        res.status(201).send({ status: true, msg: 'New Country added.' });
    } catch (error) {
        res.status(500).send({ status: false, msg: 'An error occurred while adding a new country.' });
    }
};

/**
 * Get all countries from the database
 */
module.exports.getAllCountries = async (req, res) => {
    try {
        const countries = await countryModel.findAll();
        res.status(200).send({ status: true, data: countries });
    } catch (error) {
        res.status(500).send({ status: false, msg: 'An error occurred while fetching countries.' });
    }
};

/**
 * Get a country by its ID
 */
module.exports.getCountryById = async (req, res) => {
    try {
        const country = await countryModel.findByPk(req.params.id);
        if (!country) {
            return res.status(404).send({ status: false, msg: 'Country not found.' });
        }
        res.status(200).send({ status: true, data: country });
    } catch (error) {
        res.status(500).send({ status: false, msg: 'An error occurred while fetching the country.' });
    }
};
