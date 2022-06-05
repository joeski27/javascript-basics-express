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

module.exports = router;
