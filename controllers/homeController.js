const homeModel = require('../models/dbConfig').db.homeModel;
const { Op } = require('sequelize');
// Get all homes
module.exports.getAllHomes = async (req, res) => {
    try {
        const homes = await homeModel.findAll();
        res.status(200).send({status:true, data: homes});
    } catch (error) {
        console.error(error);
        res.status(500).send({status:false, message: "Server Error" });
    }
};

// Get a single home
module.exports.getHomeById = async (req, res) => {
    try {
        const home = await homeModel.findByPk(req.params.id);
        if (!home) {
            return res.status(200).send({ status: false ,message: "No data found" });
        }
        res.status(200).send({status: true,message: "Data found",data: home});
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:false, message: "Server Error" });
    }
};

// Create a new home
module.exports.createHome = async (req, res) => {
    try {
        const home = await homeModel.create(req.body);
        res.status(201).send({status: true, message: "Details Added"});
    } catch (error) {
        console.error(error);
        res.status(500).send({status: false, message: "Server Error" });
    }
};

// Update a home
module.exports.updateHome = async (req, res) => {
    try {
        const home = await homeModel.findByPk(req.params.id);
        if (!home) {
            return res.status(200).send({status:false, message: "Home details not found" });
        }
        await home.update(req.body);
        res.status(200).send({status: true, message: "Home details updated"});
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Server Error" });
    }
};

// Delete a home
module.exports.deleteHome = async (req, res) => {
    try {
        const home = await homeModel.findByPk(req.params.id);
        if (!home) {
            return res.status(200).send({status: false, message: "Home not found" });
        }
        await home.destroy();
        res.status(200).send({status:true, message: "Home details deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({status:false, message: "Server Error" });
    }
}

// Get all homes in a specific country
module.exports.getHomesByCountry = async (req, res) => {
    try {
        const homes = await homeModel.findAll({
            where: {
                country_id: req.params.country_id
            }
        });
        res.status(200).send({status: true,message: "Data found", data: homes});
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: false, message: "Server Error" });
    }
}

// Get all homes in a specific state
module.exports.getHomesByState = async (req, res) => {
    try {
        const homes = await homeModel.findAll({
            where: {
                state_id: req.params.state_id
            }
        });
        res.send(homes);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server Error" });
    }
}

// Get all homes in a specific city
module.exports.getHomesByCity = async (req, res) => {
    try {
        const homes = await homeModel.findAll({
            where: {
                city: req.params.city
            }
        });
        res.send(homes);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server Error" });
    }
}

// Get all homes of a specific property type
module.exports.getHomesByPropertyType = async (req, res) => {
    try {
        const homes = await homeModel.findAll({
            where: {
                property_type: req.params.property_type
            }
        });
        res.send(homes);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server Error" });
    }
}

// Get all homes with a price less than or equal to a specific price

module.exports.getHomesByPrice = async (req, res) => {
    try {
        const homes = await homeModel.findAll({
            where: {
                price: {
                    [Op.lte]: req.params.price
                }
            }
        });
        res.send(homes);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server Error" });
    }
}