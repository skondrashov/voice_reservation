'use strict';
const fetch = require("node-fetch");

exports.reserve = function(req, res) {
	console.log("helhel");
	// req.body.sentence

	fetch('https://graph.microsoft.com/v1.0/me/events', {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": "Bearer " + req.body.token,
		},
		body: JSON.stringify({
			"subject": "My event",
			"start": {
				"dateTime": "2018-10-20T01:03:31.538Z",
				"timeZone": "UTC",
			},
			"end": {
				"dateTime": "2018-10-27T01:03:31.538Z",
				"timeZone": "UTC",
			}
		}),
	});
};
