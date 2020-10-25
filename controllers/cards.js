const Card = require('../models/card');

module.exports.readCards = async (req, res) => {
  try {
    const card = await Card.find({});
    res.send(card);
  } catch (error) {
    console.log('err = ', error.message);
    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};
