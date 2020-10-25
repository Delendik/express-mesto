const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const path = require('path');
const routes = require('./routes/index.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
