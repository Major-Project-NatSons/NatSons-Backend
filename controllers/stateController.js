const stateModel  = require('../models/dbConfig');

module.exports.addNewState = async(req,res)=>{
    try {
        const data = {
            state_name: req.body.stateName,
            country_id: req.body.countryId,
        }
        const newState = await stateModel.db.stateModel.create(data);
        res.status(201).send({status: true, msg: 'New State added.'});
    } catch (error) {
        res.status(500).send({status: false, msg: 'An error occured while adding a new state.'});
    }
}

module.exports.getAllStates = async (req, res) => {
    try {
        const states = await stateModel.db.stateModel.findAll();
        res.status(200).send({status: true,data: states});
    } catch (error) {
        res.status(500).send({status: false, msg: 'An error occured while searching the states.'});
    }
}

module.exports.getStatesByCountry = async (req, res) => {
    try {
        const countryId = req.params.countryId;
        const states = await stateModel.db.stateModel.findAll({
            where: {
                country_id: countryId
            }
        });
        res.status(200).send({status: true, data: states});
    } catch (error) {
        res.status(500).send({status: false, msg: 'An error occured while searching the states.'});
    }
}

module.exports.getStateById = async (req, res) => {
    try {
        const stateId = req.params.stateId;
        const state = await stateModel.db.stateModel.findOne({
            where: {
                state_id: stateId
            }
        });
        res.status(200).send({status: true, data: state});
    } catch (error) {
        res.status(500).send({status: false, msg: 'An error occured while searching the state.'});
    }
}