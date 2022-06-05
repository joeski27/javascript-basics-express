const express = require('express');

const router = express.Router();

const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

router.get('/add/:num1/and/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const number1 = parseInt(num1, 10);
  const number2 = parseInt(num2, 10);
  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200);
  res.send({ result: add(number1, number2) });
});

router.get('/subtract/:number1/from/:number2', (req, res) => {
  const { number1, number2 } = req.params;
  const num1 = parseInt(number1, 10);
  const num2 = parseInt(number2, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200);
  res.send({ result: subtract(num2, num1) });
});

router.post('/multiply', (req, res) => {
  res.status(200);
  let { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" are required.' });
  }

  if (typeof a === 'string') {
    a = parseInt(a, 10);
  }

  if (typeof a === 'string') {
    b = parseInt(b, 10);
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }

  res.send({ result: multiply(a, b) });
});

router.post('/divide', (req, res) => {
  res.status(200);
  let { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" are required.' });
  }

  if (typeof a === 'string') {
    a = parseInt(a, 10);
  }

  if (typeof a === 'string') {
    b = parseInt(b, 10);
  }

  if (b === 0) {
    res.status(400);
    res.send({ error: 'Unable to divide by 0.' });
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }

  res.send({ result: divide(a, b) });
});

router.post('/remainder', (req, res) => {
  res.status(200);
  let { a, b } = req.body;

  if (a === undefined || b === undefined) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" are required.' });
  }

  if (typeof a === 'string') {
    a = parseInt(a, 10);
  }

  if (typeof a === 'string') {
    b = parseInt(b, 10);
  }

  if (b === 0) {
    res.status(400);
    res.send({ error: 'Unable to divide by 0.' });
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }

  res.send({ result: remainder(a, b) });
});

module.exports = router;