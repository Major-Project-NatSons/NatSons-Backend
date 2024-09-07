const countryModel = require('../models/dbConfig').db.countryModel;

module.exports.getAllCountries = async (req, res) => {
    try {
        const countries = await countryModel.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}