const express = require('express');

const app = express();
const PORT = 3000;
const path = require('path');
const userRoutes = require('./routes/users.js');
const cardRoute = require('./routes/cards.js');
const errorRoute = require('./routes/error.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRoutes);
app.use('/', cardRoute);
app.use('/', errorRoute);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
