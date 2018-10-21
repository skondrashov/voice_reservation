'use strict';
const fetch = require('node-fetch');

exports.reserve = function(req, res) {
	// fetch("https://graph.microsoft.com/v1.0/users?$filter=givenName eq 'Timofey' or surname eq 'Kondrashof'", {});

	console.log(req.body);

	let room = req.body.room.toLowerCase().split(' ');
	if (room.length != 3)
		throw new Error("Room name should consist of three words. Received: " + req.body.room);

	if (room[0] == 'north')
		room[0] = 'n';
	if (room[0] == 'south')
		room[0] = 's';
	if (room[0] != 'n' && room[0] != 's')
		throw new Error("Failed parsing building: " + room[0]);

	if (room[1] == 'hudl')
		room[1] = 'huddle';

	if (room[1] != 'huddle' && room[1] != 'conference')
		throw new Error("Failed parsing room type: " + room[0]);

	const numbers = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
		'twenty'
	];

	if (numbers.indexOf(room[2]) !== -1)
		room[2] = numbers.indexOf(room[2]);

	if (isNaN(room[2]))
		throw new Error("Failed parsing room number: " + room[0]);

	const room_name = room[0].toUpperCase() + '-' + room[1].charAt(0).toUpperCase() + room[1].substr(1) + ' ' + room[2];

	fetch('https://graph.microsoft.com/v1.0/me/events', {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": "Bearer " + req.body.token,
		},
		body: JSON.stringify({
			"subject": req.body.subject,
			"body": {
				"contentType": "HTML",
				"content": "Regards from Nexie :)"
			},
			"start": {
				"dateTime": "2018-11-20T01:00:00",
				"timeZone": "Eastern Standard Time"
			},
			"end": {
				"dateTime": "2018-11-20T02:00:00",
				"timeZone": "Eastern Standard Time"
			},
			"location":{
				"displayName": room_name
			},
			"attendees": [
				{
					"emailAddress": {
						"address": room.join('') + "@nexient.com",
						"name": room_name
					},
					"type": "required"
				},
				{
					"emailAddress": {
						"address": "tkondrashov@nexient.com",
						"name": "Timofey Kondrashov"
					},
					"type": "required"
				}
			]
		}),
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(JSON.stringify(myJson));
	});
};
