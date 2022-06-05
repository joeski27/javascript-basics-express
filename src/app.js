const express = require('express');
const numbersRoute = require('./routes/numbers-route');
const stringsRoute = require('./routes/strings-route');
const arraysRoute = require('./routes/arrays-route');
const booleansRoute = require('./routes/booleans-route');

const app = express();

app.use(express.json());
app.use('/numbers', numbersRoute);
app.use('/strings', stringsRoute);
app.use('/arrays', arraysRoute);
app.use('/booleans', booleansRoute);
module.exports = app;
