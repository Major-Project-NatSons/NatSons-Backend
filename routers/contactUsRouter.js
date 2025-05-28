const contactUsController =  require('../controllers/contactUsController');
const router = require('express').Router();

router.post("/add-contact-message", contactUsController.addContactMessage);
router.get("/get-all-contact-messages", contactUsController.getAllContactMessages);

module.exports = router;