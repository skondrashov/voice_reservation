'use strict';
const fetch = require('node-fetch');

exports.reserve = function(req, res) {
	// fetch("https://graph.microsoft.com/v1.0/users?$filter=givenName eq 'Timofey' or surname eq 'Kondrashof'", {});

	console.log(req.body);
	const parameters = req.body.queryResult.parameters;
	let
		date = parameters.date,
		time = parameters.time,
		room = parameters.room;

	subject = 'very cool stuff only';
	date = date || '2018-11-20';
	time = time || '01:00:00';
	duration = '1';
	room = room || 'north huddle two';

	time = time.split(':');
	if (parseInt(time[0]) < 8)
		time[0] = parseInt(time[0]) + 12;

	let startTime = date + 'T' + time[0] + ':' + time[1] + ':00';
	let endTime = date + 'T' + (time[0]+parseInt(duration)) + ':' + time[1] + ':00';

	room = room.toLowerCase().split(/ \-/);
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

    res.setHeader('Content-Type', 'application/json');
    res.json({ speech: 'room' });
    return JSON.stringify({ speech: 'room lols' });

	fetch('https://graph.microsoft.com/v1.0/me/events', {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": "Bearer " + req.body.token,
		},
		body: JSON.stringify({
			"subject": subject,
			"body": {
				"contentType": "HTML",
				"content": "Regards from Nexie :)"
			},
			"start": {
				"dateTime": startTime,
				"timeZone": "Eastern Standard Time"
			},
			"end": {
				"dateTime": endTime,
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
