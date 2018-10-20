'use strict';

module.exports = function(app) {
	var controller = require('./controller');

	app.route('/reserve')
    .get(controller.reserve);

  var path = require("path");

  app.route('/')
    .get(function(req,res){
      res.sendFile(path.join(__dirname+'/index.html'));
      //__dirname : It will resolve to your project folder.
    });
    
    app.route('/')
      .get(function(req,res){
      res.sendFile(path.join(__dirname + '/script.js')); 
    });
};
