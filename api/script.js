'use strict';

var url = window.location.href;
if (!url.includes('access_token')) {
	location.replace("https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize" +
		"?client_id=6d98cb5f-5969-4c00-bdf6-0f3555c36037" +
		"&response_type=token" +
		"&redirect_uri=https://localhost:3000/" +
		"&scope=openid" +
			"+profile" +
			"+email" +
			"+Calendars.ReadWrite" +
			"+People.Read");
} else {
	const urlsplit = url.split("access_token=");
	const access_token = urlsplit[1].split('&');

	fetch('https://localhost:3000/reserve', {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify({
			"subject" : "very cool stuff only",
			"token": access_token[0],
			"room": "north huddle two",
		}),
	});
};

	// const client = new ApiAi.ApiAiClient({accessToken: '85e32419b3bb47fe952d6d551bbfa14b'});
	// const promise = client.textRequest('why is this not working');

	// promise
	// 	.then(handleResponse)
	// 	.catch(handleError);

	// function handleResponse(serverResponse) {
	// 	console.log(serverResponse);
	// }
	// function handleError(serverError) {
	// 	console.log(serverError);
	// }

/*
var synth = window.speechSynthesis;

var voices = [];
voices = synth.getVoices();
var utterThis = new SpeechSynthesisUtterance("hello world");
synth.speak(utterThis);
synth.speak(utterThis);
synth.speak(utterThis);
synth.speak(utterThis);
synth.speak(utterThis);
synth.speak(utterThis);
synth.speak(utterThis);
*/