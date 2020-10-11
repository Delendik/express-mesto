const router = require('express').Router()
const readFile = require('../utils/read-file')
const path = require('path')
const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json')

router.get('*', (req, res) => {
  readFile(jsonDataPath)
    .then(data => res.status(404).send({message:'Запрашиваемый ресурс не найден'}))
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router