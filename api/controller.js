'use strict';
const fetch = require('node-fetch');
let attendees = {};
const token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFDNXVuYTBFVUZnVElGOEVsYXh0V2pURkI4LWw3c1lMdzQtQUtOUVR1SXlRWEk4MTkybmxfWFBoUnBfVFprS2FtcGxzQ254ZVAzdnNmcm9ObmI4ZmF4T0t0WmVBaW8wTzZGWFJoclY0Vmd2SmlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIiwia2lkIjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8xMDg1NWU2My1jOWU1LTQ1YTEtOWM2Zi00MmNhNWFlYjQ4ZTYvIiwiaWF0IjoxNTQwMTUyOTIzLCJuYmYiOjE1NDAxNTI5MjMsImV4cCI6MTU0MDE1NjgyMywiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhKQUFBQXprZ1VkRElVQ3BzRU9jRUdvL3RMWmloZzVyeUY4VGdtVUxNOTNmc2JkTTNNNEtTbnJtck1jaUJ2d0owY2tnNjhHcFJHMWgxV2czNjBtaFRHM0RWVmxTWGtHdjc4eTdyMHA3bWhFeXd1cWtFPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggZXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS29uZHJhc2hvdiIsImdpdmVuX25hbWUiOiJUaW1vZmV5IiwiaXBhZGRyIjoiMTIuMjMxLjEwNC4xMzgiLCJuYW1lIjoiVGltb2ZleSBLb25kcmFzaG92Iiwib2lkIjoiNDA1Y2ZiNDUtNzM0NS00ZDJjLWJlNDgtZDNkOTNmYjA1ZDhjIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTE0NjU5MDE1ODItNDEwNTI3NDg2OS0zNzc1MjY1MDE0LTY2OTciLCJwbGF0ZiI6IjUiLCJwdWlkIjoiMTAwMzdGRkU5OTcxMTA1OSIsInNjcCI6IkNhbGVuZGFycy5SZWFkV3JpdGUgQ29udGFjdHMuUmVhZFdyaXRlIERpcmVjdG9yeS5SZWFkLkFsbCBGaWxlcy5SZWFkV3JpdGUuQWxsIEdyb3VwLlJlYWQuQWxsIE1haWwuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgb3BlbmlkIFBlb3BsZS5SZWFkIFNpdGVzLlJlYWRXcml0ZS5BbGwgVGFza3MuUmVhZFdyaXRlIFVzZXIuUmVhZEJhc2ljLkFsbCBVc2VyLlJlYWRXcml0ZSBwcm9maWxlIGVtYWlsIiwic3ViIjoiM0hQRFN3N045Z05Ecy1Db3NtUXc3ay1Remo5cTN5aHRWZEJCSDBpN3JMQSIsInRpZCI6IjEwODU1ZTYzLWM5ZTUtNDVhMS05YzZmLTQyY2E1YWViNDhlNiIsInVuaXF1ZV9uYW1lIjoiVGtvbmRyYXNob3ZAbmV4aWVudC5jb20iLCJ1cG4iOiJUa29uZHJhc2hvdkBuZXhpZW50LmNvbSIsInV0aSI6InhERWVaTU1kMzBXN1hYUHN4azZQQUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfc3QiOnsic3ViIjoiQXRkSGNzb0pTNlN6QVVTWTBZWFVSTjdjZmU0LUlhaUxKcHZJSHFVczFBOCJ9LCJ4bXNfdGNkdCI6MTQxOTAyMTE0OH0.TfCvbMEKzVifyFX3Hz7lG2Hp-1cX2pDg2Yd8GT1-k2VOAS521oOkBxWpgkmWUXTI4NMhi7vSiIAt-czNAEI39RTsNJbYz7FCjTCr1NL_SCOtvTvmevrTfL5u1BGQ-gnCKf5SJC8fTsWUpMk1SGkqHcl48nQ2ofw7-Jd2O24PcKQQVE5rY6foJUlbtABCL3RQdxwdY1c01lMyAv9OkrnQEnX91P5rhMOIi-8iR3m-3Vxrs1WiarrsaLUAdiq6_FQcC_VM4QPzM-QKiCSsFrW9zeyECisdpLKC9QrJZPoWH-zTte0ffLJOyRdOlr_RHEAwNEPb6oKWC6-ODbOO9IUujA';

function error(speech, log)
{
	res.setHeader('Content-Type', 'application/json');
	res.json({
		"fulfillmentText": speech,
		"fulfillmentMessages": [
			{
				"text": {
					"text": [
						speech
					]
				}
			}
		]
	});
	throw new Error("Room name should consist of three words. Received: " + room);
}

exports.reserve = function(req, res) {
	console.log(req.body.queryResult.parameters);

	const parameters = req.body.queryResult.parameters;
	let
		room      = parameters.room,
		attendees = parameters.attendees,
		time      = parameters.time || '01:00:00',
		date      = parameters.date || '2018-10-21',
		subject   = 'Nexie\'s Cool Meeting',
		duration  = '1';

	time = time.split('T')[1];
	time = time.split('-')[0];

	date = date.split('T')[0];
	date = date.split('-');
	date = '2018-' + date[1] + '-' + date[2];

	time = time.split(':');
	if (parseInt(time[0]) < 8)
		time[0] = parseInt(time[0]) + 12;

	let startTime = date + 'T' + time[0] + ':' + time[1] + ':00';
	let endTime = date + 'T' + (parseInt(time[0])+parseInt(duration)) + ':' + time[1] + ':00';

	room = room.toLowerCase().split(/[ \-]/);
	if (room.length != 3)
		error(
			room.join(' ') + ' is not a valid room name',
			"Room name should consist of three words. Received: " + room
		);

	if (room[0] == 'north')
		room[0] = 'n';
	if (room[0] == 'south')
		room[0] = 's';
	if (room[0] != 'n' && room[0] != 's')
		error(
			room.join(' ') + ' is not a valid room name',
			"Failed parsing building: " + room[0]
		);

	if (room[1] != 'huddle' && room[1] != 'conference')
		error(
			room.join(' ') + ' is not a valid room name',
			"Failed parsing room type: " + room[1]
		);

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
		error(
			room.join(' ') + ' is not a valid room name',
			"Failed parsing room number: " + room[2]
		);

	const room_name = room[0].toUpperCase() + '-' + room[1].charAt(0).toUpperCase() + room[1].substr(1) + ' ' + room[2];

	let filter = [];
	for (let attendee of attendees)
	{
		let name = attendee.split(' ');
		filter.push('(givenName eq \'' + name[0] + '\' and surname eq \'' + name[1] + '\')');
	}

	fetch("https://graph.microsoft.com/v1.0/users?$filter=" + filter.join(' or '), {
		method: "GET",
		headers: {
			"Authorization": `Bearer ${token}`,
		}
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		let invites = [{
			"emailAddress": {
				"address": room.join('') + "@nexient.com",
				"name": room_name
			},
			"type": "required"
		}];

		console.log("blah blah blah");
		console.log(myJson);
		console.log(myJson.value);
		console.log("blah blah blah23523523");

		for (let attendee of myJson.value)
		{
			invites.push({
				"emailAddress": {
					"address": attendee.userPrincipalName,
					"name": attendee.displayName
				},
				"type": "required"
			});
		}

		fetch('https://graph.microsoft.com/v1.0/me/events', {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Authorization": `Bearer ${token}`,
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
				"attendees": invites
			}),
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			res.setHeader('Content-Type', 'application/json');
			res.json({
				"fulfillmentText": 'Reserved ' + room.join(' '),
				"fulfillmentMessages": [
					{
					"text": {
						"text": [
							'Reserved ' + room.join(' ')
						]
					}
					}
				]
			});
			console.log(JSON.stringify(myJson));
		});
	});

};
