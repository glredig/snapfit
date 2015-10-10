'use strict';

module.exports = function(app) {
  var weighins = require('../../app/controllers/weighins.server.controller');
  var users	= require('../../app/controllers/users.server.controller');

	app.route('/weighins')
        .get(weighins.list)
        .post(users.requiresLogin, weighins.create);

    app.route('/weighin/:weighinId')
    	.get(weighins.read)
    	.put(users.requiresLogin, weighins.update)
    	.delete(users.requiresLogin, weighins.delete);

    app.param('weighinId', weighins.weighinById);
};