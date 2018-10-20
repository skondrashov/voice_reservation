'use strict';
import {ApiAiClient} from "api-ai-javascript";
const fetch = require("node-fetch");

exports.reserve = function(req, res) {
	const client = new ApiAiClient({accessToken: '2d11d7c46ad045d588589bc072832d7e'});
	const promise = client.textRequest(req.body.sentence);

	promise
		.then(handleResponse)
		.catch(handleError);

	function handleResponse(serverResponse) {
		console.log(serverResponse);
	}

	function handleError(serverError) {
		console.log(serverError);
	}

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
