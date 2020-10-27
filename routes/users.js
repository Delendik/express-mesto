const router = require('express').Router();
const {
  readUsers, readUser, createUser, updateUserInfo, updateAvatarInfo,
} = require('../controllers/users');

router.get('/users', readUsers);

router.get('/users/:_id', readUser);

router.post('/users', createUser);

router.patch('/users/me', updateUserInfo);

router.patch('/users/me/avatar', updateAvatarInfo);

module.exports = router;
