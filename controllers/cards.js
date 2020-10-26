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

module.exports.createCard = async (req, res) => {
  try {
    const { name, link } = req.body;
    const card = await Card.create({ name, link, owner: req.user._id });
    res.send({ data: card });
  } catch (error) {
    console.log('err = ', error.message);
    res.status(400).send({ message: 'Некорректные данные' });
  }
};

module.exports.deleteCard = async (req, res) => {
  try {
    const { _id } = req.params;
    const card = await Card.findOneAndRemove(_id);
    if (!card) {
      return res.status(404).send({ message: 'Нет карточки с таким id' });
    }
    return res.status(200).send(card);
  } catch (error) {
    console.log('err = ', error.message);
    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};