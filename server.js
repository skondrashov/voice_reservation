'use strict';

const
	fs = require('fs'),
	express = require('express'),
	https = require('https'),
	bodyParser = require('body-parser'),
	routes = require('./api/routes'),
	app = express(),
	port = 3000,
	httpsServer = https.createServer({
		key:  fs.readFileSync('ssl/server.key', 'utf8'),
		cert: fs.readFileSync('ssl/server.crt', 'utf8'),
	}, app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
httpsServer.listen(port);

console.log('voice reservation RESTful API server started on: ' + port);
