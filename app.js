const express = require('express');

const app = express();
const mongoose = require('mongoose');

const PORT = 3000;
const path = require('path');
const routes = require('./routes/index.js');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
