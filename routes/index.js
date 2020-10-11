const express = require('express');

const app = express();
const routerrr = require('express').Router();

const userRoutes = require('./users.js');
const cardRoute = require('./cards.js');
const errorRoute = require('./error.js');

app.use('/', userRoutes);
app.use('/', cardRoute);
app.use('/', errorRoute);

module.exports = routerrr;
