const router = require('express').Router();
const cdnController = require('../controllers/CDNController');
const serverURL = require('../constants').serverURL;  // Make sure serverURL is correctly defined

// Single Image Upload
router.post('/upload/single', cdnController.uploads.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send({
            message: 'No file uploaded or invalid file type',
        });
    }

    try {
        const url = `${serverURL}/uploads/${req.file.filename}`;
        console.log('Single file uploaded:', req.file.filename);
        res.status(201).send({
            imageUrl: url,
        });
    } catch (error) {
        console.error('Error uploading single file:', error);
        res.status(500).send({
            message: 'File upload failed',
        });
    }
});

// Multiple Image Upload
router.post('/upload/multiple', cdnController.uploads.array('images', 10), async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send({
            message: 'No files uploaded or invalid file types',
        });
    }

    try {
        const imageURLs = req.files.map(file => `${serverURL}/uploads/${file.filename}`);
        console.log('Multiple files uploaded:', imageURLs);
        res.status(201).json({
            imageURLs,
        });
    } catch (error) {
        console.error('Error uploading multiple files:', error);
        res.status(500).send({
            message: 'File uploads failed',
        });
    }
});

module.exports = router;
