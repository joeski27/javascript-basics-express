const router = require('express').Router();
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

router.post('/element-at-index/:index', (req, res) => {
  const { array } = req.body;
  const { index } = req.params;

  res.status(200).json({ result: getNthElement(index, array) });
});

router.post('/to-string', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: arrayToCSVString(array) });
});

router.post('/append', (req, res) => {
  const { array } = req.body;
  const { value } = req.body;

  res.status(200).json({ result: addToArray2(value, array) });
});

router.post('/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

router.post('/remove-element/', (req, res) => {
  const { array } = req.body;
  const index = parseInt(req.query.index, 10);

  return !index
    ? res.status(200).json({
        result: removeNthElement2(0, array),
      })
    : res.status(200).json({
        result: removeNthElement2(index, array),
      });
});

module.exports = router;
