const router = require('express').Router()
const readFile = require('../utils/read-file')
const path = require('path')
const jsonDataPath = path.join(__dirname, '..', 'data', 'users.json')

router.get('/users', (req, res) => {
  readFile(jsonDataPath)
    .then(data => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err);
    });
})

router.get('/users/:_id', (req, res) => {
  const {_id} = req.params
  readFile(jsonDataPath)
    .then(data =>{
      const findUser = data.find(user => user._id === _id)
      return findUser
    })
    .then(user =>{
      if(!user){
        return res.status(404).send({message:'Нет пользователя с таким id'})
      }
      res.send(user)
    })
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router