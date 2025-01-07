const docModel = require('../models/dbConfig').db.homeDocsModel;

// Create and Save a new HomeDocs
module.exports.createHomeDoc = (req, res) => {
    // Validate request
    if (!req.body.home_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a HomeDocs
    const homeDocs = {
        home_id: req.body.home_id,
        registry_doc: req.body.registry_doc,
        affidavit: req.body.affidavit,
        tax_reciepty: req.body.tax_reciepty,
        property_noc: req.body.property_noc,
        seller_aadhar: req.body.seller_aadhar,
        seller_pan: req.body.seller_pan
    };

    // Save HomeDocs in the database
    docModel.create(homeDocs)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the HomeDocs."
            });
        });
};

// Retrieve all HomeDocs from the database.
module.exports.getAllHomeDocs = (req, res) => {
    docModel.find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving HomeDocs."
        });
    }
    );
}

// Find a single HomeDocs with an id
module.exports.getHomeDocById = (req, res) => {
    const id = req.params.id;

    docModel.findById(id)
    .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found HomeDocs with id " + id });
        else res.send(data);
    })
    .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving HomeDocs with id=" + id });
    });
}

// Update a HomeDocs by the id in the request   
module.exports.updateHomeDoc = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    docModel.findByIdAndUpdate(id, req.body, { new: true })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update HomeDocs with id=${id}. Maybe HomeDocs was not found!`
            });
        } else res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating HomeDocs with id=" + id
            });
        }
    );
}

// Delete a HomeDocs with the specified id in the request
module.exports.deleteHomeDoc = (req, res) => {
    const id = req.params.id;

    docModel.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete HomeDocs with id=${id}. Maybe HomeDocs was not found!`
            });
        } else {
            res.send({
                message: "HomeDocs was deleted successfully!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete HomeDocs with id=" + id
        });
    });
}


