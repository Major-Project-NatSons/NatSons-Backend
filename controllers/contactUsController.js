const contactUsModel = require('../models/dbConfig').db.contactUsModel;

module.exports.addContactMessage = async (req, res) => {
    try {
        // Create a new contact message using request body
        const newMessage = await contactUsModel.create(req.body);
        res.status(201).send({ status: true, msg: 'Contact message added successfully.', data: newMessage });
    } catch (error) {
        res.status(500).send({ status: false, msg: 'An error occurred while adding the contact message.', error: error.message });
    }
};

module.exports.getAllContactMessages = async (req, res) => {
    try {
        const messages = await contactUsModel.findAll();
        res.status(200).send({ status: true, data: messages });
    } catch (error) {
        res.status(500).send({ status: false, msg: 'An error occurred while fetching contact messages.', error: error.message });
    }
};