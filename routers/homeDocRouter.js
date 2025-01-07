const homeDocController = require('../controllers/homeDocController');

const router = require('express').Router();

router.post('/addhomeDocs', homeDocController.createHomeDoc);
router.get('/getAllhomeDocs', homeDocController.getAllHomeDocs);
router.get('/gethomeDocsId/:id', homeDocController.getHomeDocById);
router.delete('/homeDocs/:id', homeDocController.deleteHomeDoc);
module.exports = router;