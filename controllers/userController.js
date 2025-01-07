const userDataModel = require('../models/dbConfig').userDataModel;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
module.exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if user already exists
        const user = await userDataModel.findOne({ where: { email } });
        if (user) {
            return res.status(200).send({ status: false, message: 'User already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newUser = await userDataModel.create({ name, email, password: hashedPassword });
        const { password: _, id, ...userDetails } = newUser.dataValues; // Exclude sensitive fields
        res.status(201).send({ status: true, data: userDetails });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ status: false, message: 'Unable to create user' });
    }
};

// Login a user
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await userDataModel.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send({ status: false, message: 'User not found' });
        }
        // Check if the password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send({ status: false, message: 'Incorrect password' });
        }
        // Generate a JWT token
        const token = jwt.sign({ u_id: user.u_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ status: true, data: { token } });
    } catch (e) {
        console.error(e);
        res.status(500).send({ status: false, message: 'Unable to login' });
    }
};

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send({ status: false, message: 'No token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ status: false, message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
};


// Get user profile
module.exports.getProfile = async (req, res) => {
    try {
        const userUId = req.user.u_id;
        const user = await userDataModel.findOne({ where: { u_id: userUId } });
        if (!user) {
            return res.status(404).send({ status: false, message: 'User not found' });
        }
        const { password, id, ...userDetails } = user.dataValues; // Exclude sensitive fields
        res.status(200).send({ status: true, data: userDetails });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ status: false, message: 'Unable to get user profile' });
    }
};

// Update user profile
module.exports.updateProfile = async (req, res) => {
    try {
        const userUId = req.user.u_id;
        const user = await userDataModel.findOne({ where: { u_id: userUId } });
        if (!user) {
            return res.status(404).send({ status: false, message: 'User not found' });
        }
        await user.update(req.body);
        const { password, id, ...updatedUserDetails } = user.dataValues; // Exclude sensitive fields
        res.status(200).send({ status: true, data: updatedUserDetails });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ status: false, message: 'Unable to update user profile' });
    }
};

// Delete user profile
module.exports.deleteProfile = async (req, res) => {
    try {
        const userUId = req.user.u_id;
        const user = await userDataModel.findOne({ where: { u_id: userUId } });
        if (!user) {
            return res.status(404).send({ status: false, message: 'User not found' });
        }
        await user.destroy();
        res.status(200).send({ status: true, message: 'Profile deleted' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ status: false, message: 'Unable to delete user profile' });
    }
};

// Get all users
module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await userDataModel.findAll({
            attributes: { exclude: ['password', 'id'] } // Exclude sensitive fields for all users
        });
        res.status(200).send({ status: true, data: users });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: false, message: 'Server Error' });
    }
};
