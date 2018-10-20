'use strict';

module.exports = function(app) {
	var controller = require('./controller');

	app.route('/reserve')
		.get(controller.reserve);
};
