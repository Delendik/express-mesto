const express = require('express');

const app = express();
const mongoose = require('mongoose');

const PORT = 3000;
const routes = require('./routes/index.js');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f9555a81c224a35985db71b',
  };

  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
