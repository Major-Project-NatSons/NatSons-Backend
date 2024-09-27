require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

// Apply CORS middleware (correct usage)
app.use(cors());

// Middleware to parse incoming JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routers
const countryRouter = require('./routers/countryRouter');
const stateRouter = require('./routers/stateRouter');
const homeRouter = require('./routers/homeRouter');
const plotRouter = require('./routers/plotRouter');
const cdnRouter = require('./routers/CDNRouter');

// Use routers for different API routes
app.use('/api/countries', countryRouter);
app.use('/api/states', stateRouter);
app.use('/api/homes', homeRouter);
app.use('/api/plots', plotRouter);
app.use('/api/cdn', cdnRouter);

// Root endpoint to verify server is running
app.get('/', (req, res) => {
    res.send('Server is Up and Running.....!');
});

// Get PORT from environment variables (with a default fallback)
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
