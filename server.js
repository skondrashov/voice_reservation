'use strict';

const
	fs = require('fs'),
	express = require('express'),
	https = require('https'),
	bodyParser = require('body-parser'),
	routes = require('./api/routes'),
	app = express(),
	port = 443,
	httpsServer = https.createServer({
		key: fs.readFileSync('/etc/letsencrypt/live/kuralesache.com/privkey.pem', 'utf8'),
		cert: fs.readFileSync('/etc/letsencrypt/live/kuralesache.com/cert.pem', 'utf8'),
		ca: fs.readFileSync('/etc/letsencrypt/live/kuralesache.com/chain.pem', 'utf8'),
	}, app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(80);
httpsServer.listen(port);

console.log('voice reservation RESTful API server started on: ' + port);
