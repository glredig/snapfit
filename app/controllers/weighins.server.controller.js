'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Weighin = mongoose.model('Weighin'),
    _ = require('lodash');

/**
 * Create a Weighin
 */
exports.create = function(req, res) {
  var weighin = new Weighin(req.body);

  weighin.save(function(err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.status(201).json(weighin);
      }
  });
};

/**
 * Show the current Weighin
 */
exports.read = function(req, res) {

};

/**
 * Update a Weighin
 */
exports.update = function(req, res) {

};

/**
 * Delete an Weighin
 */
exports.delete = function(req, res) {

};

/**
 * List of Weighins
 */
exports.list = function(req, res) {
  Weighin.find().exec(function(err, weighins) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(weighins);
        }
    });
};