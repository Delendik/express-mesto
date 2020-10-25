const Card = require('../models/card');

module.exports.readCards = (req, res) => {
  Card.find({})
    .then((data) => res.send(data))
    .catch((err) => {
      console.log('err = ', err.message);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
};
