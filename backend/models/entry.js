'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = Schema({
    id: {type: Number, requiered: true, unique: true},
    user: {type: String, requiered: true},
    amount: {type: Number, requiered: true},
    date: {type: Date, default: Date.now, requiered: true}

});

module.exports = mongoose.model('Entry', EntrySchema);