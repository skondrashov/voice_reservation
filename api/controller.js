'use strict';
const fetch = require("node-fetch");

exports.reserve = function() {
  console.log("getting a token???")
	fetch('https://graph.microsoft.com/v1.0/me/events', {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFDNXVuYTBFVUZnVElGOEVsYXh0V2pUcHhEMU92aGI3REU4eEM4Z2I2b29qdkhEbVZ5OVNOMTc2WjItLVRjMHRfMEk5dHRZSl9acXludktoYzgzMzYya2RLd00teDBTRVhKYWJOMnNiOU9OdENBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIiwia2lkIjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIn0",
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

// https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=6d98cb5f-5969-4c00-bdf6-0f3555c36037&response_type=token&redirect_uri=https://localhost:3000/&scope=openid
