'use strict';

module.exports = function(app) {
  var weighins = require('../../app/controllers/weighins.server.controller');

	app.route('/weighins')
        .get(weighins.list)
        .post(weighins.create);
};