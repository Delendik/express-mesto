const User = require('../models/user');

const checkError = (error, res) => {
  if (error.name === 'CastError' || error.name === 'ValidationError') {
    res.status(400).send({ message: 'Некорректные данные' });
  } else {
    res.status(500).send({ message: 'Ошибка на сервере' });
  }
};

module.exports.readUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (error) {
    console.log('err = ', error.message);
    checkError(error, res);
  }
};

module.exports.readUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);
    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    checkError(error, res);
  }
};

module.exports.createUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const user = await User.create({ name, about, avatar });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
    checkError(error, res);
  }
};

module.exports.updateUserInfo = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findByIdAndUpdate(req.user._id, { name },
      {
        new: true,
        runValidators: true,
        upsert: true,
      });
    res.send({ data: user });
  } catch (error) {
    console.log('err = ', error.message);
    checkError(error, res);
  }
};
