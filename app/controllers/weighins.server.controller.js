'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Weighin = mongoose.model('Weighin'),
    _ = require('lodash');

var crud = require('./crud.server.controller')('Weighin', 'date');

model.exports = crud;