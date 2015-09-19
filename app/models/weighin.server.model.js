'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 *  Validation
 */
function validateNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
} 

/**
 * Weighin Schema
 */
var WeighinSchema = new Schema({
	created: {
    type: Date,
    default: Date.now
  },
  weight: {
    type: Number,
    default: 0.0,
    required: 'weight cannot be blank',
    validate: [validateNumeric, 'weight must be a valid number']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Weighin', WeighinSchema);