'use strict';
const fetch = require('node-fetch');
let meeting_id = '';

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
	console.log(req.body);

	switch (req.body.queryResult)
	{
	case 'input.meeting_setup':
		const parameters = req.body.queryResult.parameters;
		let
			room     = parameters.room,
			time     = parameters.time     || '01:00:00',
			date     = parameters.date     || '2018-10-21',
			subject  = parameters.subject  || 'very cool stuff only',
			duration = parameters.duration || '1';

		time = time.split('T')[1];
		time = time.split('-')[0];

		date = date.split('-');
		date = '2018-' + date[1] + '-' + date[2];

		time = time.split(':');
		if (parseInt(time[0]) < 8)
			time[0] = parseInt(time[0]) + 12;

		let startTime = date + 'T' + time[0] + ':' + time[1] + ':00';
		let endTime = date + 'T' + (time[0]+parseInt(duration)) + ':' + time[1] + ':00';

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

		if (room[1] == 'hudl')
			room[1] = 'huddle';

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

		const token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFDNXVuYTBFVUZnVElGOEVsYXh0V2pURnhwdlpQMllManRhZ2N1U3JfMXRtd3FKRjVGTmwzQmtoVjdnYjBOM3hmZ3BVcTYxUDEzUnJ6MVozRlJOMUdIMlpHRVBfSVBGSXhLblJvaUdJUHpWY2lBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIiwia2lkIjoiaTZsR2szRlp6eFJjVWIyQzNuRVE3c3lISmxZIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8xMDg1NWU2My1jOWU1LTQ1YTEtOWM2Zi00MmNhNWFlYjQ4ZTYvIiwiaWF0IjoxNTQwMTQyNjk2LCJuYmYiOjE1NDAxNDI2OTYsImV4cCI6MTU0MDE0NjU5NiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhKQUFBQWM2MC9IcFc3K1A4eGRta2R1dU1Jdm5DUi9sRmVnaE5CdXRtU0JWWFkwVkNESkk0YTVyVy9OWk4zSFlSZWVURHhlWHQ3Mm1zQ1MrTDNIV0NyOHZzdnJ1WC92K3dYMHM2eUdVOWhEVnRZWVlnPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiVm9pY2UgUmVzZXJ2YXRpb24iLCJhcHBpZCI6IjZkOThjYjVmLTU5NjktNGMwMC1iZGY2LTBmMzU1NWMzNjAzNyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS29uZHJhc2hvdiIsImdpdmVuX25hbWUiOiJUaW1vZmV5IiwiaXBhZGRyIjoiMTIuMjMxLjEwNC4xMzgiLCJuYW1lIjoiVGltb2ZleSBLb25kcmFzaG92Iiwib2lkIjoiNDA1Y2ZiNDUtNzM0NS00ZDJjLWJlNDgtZDNkOTNmYjA1ZDhjIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTE0NjU5MDE1ODItNDEwNTI3NDg2OS0zNzc1MjY1MDE0LTY2OTciLCJwbGF0ZiI6IjUiLCJwdWlkIjoiMTAwMzdGRkU5OTcxMTA1OSIsInNjcCI6IkNhbGVuZGFycy5SZWFkV3JpdGUgQ29udGFjdHMuUmVhZFdyaXRlIGVtYWlsIG9wZW5pZCBQZW9wbGUuUmVhZCBwcm9maWxlIiwic3ViIjoiM0hQRFN3N045Z05Ecy1Db3NtUXc3ay1Remo5cTN5aHRWZEJCSDBpN3JMQSIsInRpZCI6IjEwODU1ZTYzLWM5ZTUtNDVhMS05YzZmLTQyY2E1YWViNDhlNiIsInVuaXF1ZV9uYW1lIjoiVGtvbmRyYXNob3ZAbmV4aWVudC5jb20iLCJ1cG4iOiJUa29uZHJhc2hvdkBuZXhpZW50LmNvbSIsInV0aSI6InZ3R3dscktXQ1VXcUVxVU5OUVNFQUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfc3QiOnsic3ViIjoiMk4tWXEwREMtZHhFa3ZocnNaeTBja0xGSlVPZVFZOG1oSWRNZW9nQ0huNCJ9LCJ4bXNfdGNkdCI6MTQxOTAyMTE0OH0.DX0LhOOMby-GwHlSibjg_OQtT-9s1BPWuddjgCLHM-NBjz1OB9hPQ0Y_5JpuIuVTuwsUEEjAI5MYS7f08TXCXAlDq5TGSbSs4hATPjkbFi0vA4OpScyrEIY-3AHk3XstBCd8uBboIpwvJBxkhTcXEryYE4EDlo5A2JDEzeiu32RCGbGdySzzfWqIkNSO56GVH90_dCFL-bXTwEnZpohtFoXv7ih9CDt1enT_F218rKjJvd7WgFEfd81GRbszwLbXWcNADn8_LuLqJlkRJ4MyBR2sV02Fxg5O28w6L_OaIHGS31zZ0Z9DYJpNV-EjkgNDUhYqq1lHbFfrEM15v8_pIg';

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
			meeting_id = myJson.id;
			console.log(JSON.stringify(myJson));
		});
	case 'input.meeting_update':
		// fetch("https://graph.microsoft.com/v1.0/users?$filter=givenName eq 'Timofey' or surname eq 'Kondrashof'", {});
		fetch('https://graph.microsoft.com/v1.0/me/events/' + meeting_id, {
			method: "PATCH",
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
			myJson.id
			console.log(JSON.stringify(myJson));
		});
	case 'finalize':
		myJson.id = '';
	}
};
