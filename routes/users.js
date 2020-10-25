const router = require('express').Router();
const { readUsers, readUser, createUser } = require('../controllers/users');

router.get('/users', readUsers);

router.get('/users/:_id', readUser);

router.post('/users', createUser);

module.exports = router;
