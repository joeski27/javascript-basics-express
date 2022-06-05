const router = require('express').Router();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

router.get('/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});
router.get('/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

router.get('/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

router.get('/first-characters/:string', (req, res) => {
  const nCharacters = req.query.length;
  res.status(200);
  return nCharacters
    ? res.json({ result: firstCharacters(req.params.string, nCharacters) })
    : res.json({ result: firstCharacter(req.params.string) });
});
module.exports = router;
