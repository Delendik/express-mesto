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
    const user = await User.findOne({ _id: req.params._id });
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

module.exports.createUser = (req, res) => {
  console.log(req.body);
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.log('err = ', err.message);
      res.status(500).send({ message: 'Произошла ошибка' });
    });
};
