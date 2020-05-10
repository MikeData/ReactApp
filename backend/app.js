'use strict'

// LOAD NODE MODULES
var express = require('express');
var bodyParser = require('body-parser');

// EXECUTE EXPRESS (http)
var app = express();

// LOAD ROUTES
var userRoutes = require('./routes/userRoutes');

// MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS

// ROUTES PREFIX
app.use('/api', userRoutes);

// EXPORT MODULE
module.exports = app;