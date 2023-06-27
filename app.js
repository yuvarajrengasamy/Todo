const express = require('express');
const userroutes = require('./routes/user.route');

const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(userroutes);


module.exports = app;