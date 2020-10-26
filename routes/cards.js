const router = require('express').Router();
const { readCards, createCard, deleteCard } = require('../controllers/cards');

router.get('/cards', readCards);

router.post('/cards', createCard);

router.delete('/cards/:_id', deleteCard);

module.exports = router;
