const express = require('express');
const numbersRoute = require('./routes/numbers-route');
const stringsRoute = require('./routes/strings-route');

const app = express();

app.use(express.json());
app.use('/numbers', numbersRoute);
app.use('/strings', stringsRoute);

module.exports = app;
