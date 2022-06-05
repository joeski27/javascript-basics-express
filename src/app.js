const express = require('express');

const stringsRoute = require('./routes/strings-route');

const app = express();

app.use(express.json());

app.use('/strings', stringsRoute);

module.exports = app;
