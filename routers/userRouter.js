const userController = require('../controllers/userController');

const router = require('express').Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.verifyToken ,userController.getProfile);
router.put('/profile', userController.verifyToken, userController.updateProfile);
router.delete('/profile', userController.verifyToken , userController.deleteProfile);

module.exports = router;