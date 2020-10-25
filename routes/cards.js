const router = require('express').Router();
const { readCards } = require('../controllers/cards');

router.get('/cards', readCards);

module.exports = router;
