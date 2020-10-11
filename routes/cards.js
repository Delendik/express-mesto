const router = require('express').Router()
const readFile = require('../utils/read-file')
const path = require('path')
const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json')

router.get('/cards', (req, res) => {
  readFile(jsonDataPath)
    .then(data => res.send(data))
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router