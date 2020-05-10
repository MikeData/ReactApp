'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    id: {type: Number, requiered: true, unique: true},
    alias: {type: String, requiered: true, unique: true},
    totalAmount: {type: Number, default: 0},
    hodlAmount: {type: Number, default: 0},
    tradeAmount: {type: Number, default: 0},
    date: {type: Date, default: Date.now, requiered: true}

});

module.exports = mongoose.model('User', UserSchema);