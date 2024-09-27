const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Set up disk storage for uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/'); // Directory to save files
    },
    filename: function(req, file, cb){
        cb(null, file.originalname); // Save file with original name
    }
});

// Filter for allowed file types
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);  // Accept file
    } else {
        cb(null, false); // Reject file
    }
};

// Multer setup with 2MB file size limit
const uploads = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 2 // 2MB file size limit
    },
    fileFilter: fileFilter
});

// Middleware to serve static files from 'uploads'
const serveFile = (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', fileName);

    // Check if file exists
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath); // Serve the file if it exists
    } else {
        res.status(404).send('File not found');
    }
};

module.exports = {
    uploads,
    serveFile
};
