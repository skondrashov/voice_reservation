'use strict';
const fetch = require('node-fetch');
const apiai = require('api-ai');

exports.reserve = function(req, res) {
	var api = apiai("2d11d7c46ad045d588589bc072832d7e");

	var request = api.textRequest('this is a sentence', {
		sessionId: '<unique session id>'
	});

	request.on('response', function(response) {
		console.log(response);
	});

	request.on('error', function(error) {
		console.log(error);
	});

	request.end();

	// fetch('https://graph.microsoft.com/v1.0/me/events', {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json; charset=utf-8",
	// 		"Authorization": "Bearer " + req.body.token,
	// 	},
	// 	body: JSON.stringify({
	// 		"subject": "My event",
	// 		"start": {
	// 			"dateTime": "2018-10-20T01:03:31.538Z",
	// 			"timeZone": "UTC",
	// 		},
	// 		"end": {
	// 			"dateTime": "2018-10-27T01:03:31.538Z",
	// 			"timeZone": "UTC",
	// 		}
	// 	}),
	// });
};
