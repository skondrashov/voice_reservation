'use strict';

var url = window.location.href;
if (!url.includes('access_token')) {
	location.replace("https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=6d98cb5f-5969-4c00-bdf6-0f3555c36037&response_type=token&redirect_uri=https://localhost:3000/&scope=openid");
} else {
	const urlsplit = url.split("access_token=");
	const access_token = urlsplit[1].split('&');

	fetch('https://localhost:3000/reserve', {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify({
			"token": access_token[0],
			"sentence": "henlo wrold",
		}),
	});
};


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