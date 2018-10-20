'use strict';

module.exports = function(app) {
	const controller = require('./controller');
	const path = require("path");

	app.route('/')
		.get(function(req,res){
			res.sendFile(path.join(__dirname+'/index.html'));
		});

	app.route('/script.js')
		.get(function(req,res){
			res.sendFile(path.join(__dirname + '/script.js'));
		});

	app.route('/reserve')
		.post(controller.reserve);
};
