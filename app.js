require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app  = express();
app.use(cors);
app.use(express.urlencoded({extended: true}));

app.use(express.json());

const countryRouter = require('./routers/countryRouter');
const stateRouter = require('./routers/stateRouter');
const homeRouter = require('./routers/homeRouter');
const plotRouter = require('./routers/plotRouter');

app.use('/api/countrys', countryRouter);
app.use('/api/states', stateRouter);
app.use('/api/homes', homeRouter);
app.use('/api/plots', plotRouter);

app.get('/', (req, res) => {
    res.send('Server is Up and Running.....!');
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`${PORT} Server is up and running!`);
});
