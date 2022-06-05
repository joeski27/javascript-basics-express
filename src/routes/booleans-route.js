const router = require('express').Router();
const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

router.post('/negate', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: negate(value) });
});

router.post('/truthiness', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: truthiness(value) });
});

router.get('/is-odd/:a', (req, res) => {
  const a = parseInt(req.params.a, 10);

  return Number.isNaN(a)
    ? res.status(400).json({ error: 'Parameter must be a number.' })
    : res.status(200).json({ result: isOdd(a) });
});

router.get('/:a/starts-with/:b', (req, res) => {
  const { a } = req.params;
  const { b } = req.params;

  if (startsWith(b, a)) {
    res.status(200).json({ result: startsWith(b, a) });
  }
  if (b.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: false });
});

module.exports = router;
