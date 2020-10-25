const User = require('../models/user');

// сделать на async await

module.exports.readUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (error) {
    console.log('err = ', error.message);
    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.readUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);
    console.log(req.params);
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    return res.status(200).send(user);
  } catch (error) {
    console.log('err = ', error.message);
    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, about, avatar } = req.body;
    const user = await User.create({ name, about, avatar });
    res.send({ data: user });
  } catch (error) {
    console.log('err = ', error.message);
    res.status(500).send({ message: 'Произошла ошибка' });
  }
};