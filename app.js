require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app  = express();
app.use(cors);
app.use(express.urlencoded({extended: true}));

app.use(express.json());

const countryRouter = require('./routers/countryRouter');

app.get('/', (req, res) => {
    res.send('Server is Up and Running.....!');
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`${PORT} Server is up and running!`);
});
