'use strict'

var express = require('express');
var UserContoller = require('../controllers/usersController');

var router = express.Router();

router.get('/test', UserContoller.test);
router.post('/test', UserContoller.test);

module.exports = router;
