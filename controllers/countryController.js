const countryModel = require('../models/dbConfig').db.countryModel;

module.exports.addNewCountry = async(req,res)=>{
    try {
        const data = {
            country_name: req.boudy.countryName
        }
        const newCountry = await countryModel.create(req.body);
        res.status(201).send({status: true, msg: 'New Country added.'});
    } catch (error) {
        res.status(500).send({status: false, msg: 'An error occured while adding a new country.'});
    }
}

module.exports.getAllCountries = async (req, res) => {
    try {
        const countries = await countryModel.findAll();
        res.status(200).send({status: true,data: countries});
    } catch (error) {
        res.status(500).send({status: false, msg: 'An error occured while searching the country.'});
    }
}
