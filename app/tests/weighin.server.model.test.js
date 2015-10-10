'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Weighin = mongoose.model('Weighin');

/**
 * Globals
 */
var user, weighin;

/**
 * Unit tests
 */
describe('Weighin Model', function() {
	describe('Saving', function() {
		it ('saves new record', function(done) {
			var weighin = new Weighin({
				weight: 185.0,
				date: Date.now()
			});

			weighin.save(function(err, saved) {
				should.not.exist(err);
				done();
			});
		});
		it ('throws validation error if weight is missing', function(done) {
			var weighin = new Weighin({
				date: Date.now()
			});

			weighin.save(function(err, saved) {
				should.exist(err);
				err.errors.weighin.message.should.equal('weight cannot be blank');
				done();
			});
		});
		// Getting odd behavior. Need to return.
		it ('throws validation error if weight is non-numeric', function(done, pending) {
			pending();
			var weighin = new Weighin({
				weight: 'hello',
				date: Date.now()
			});

			weighin.save(function(err, saved) {
				should.exist(err);
				err.errors.weighin.message.should.equal('weight must be a valid number');
				done();
			});
		});
		it ('throws validation error for weighin of duplicate date');
	});
});