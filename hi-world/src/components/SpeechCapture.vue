<template>
  <div class="hello">
    <img class="micButton circle" v-on:click="recordSpeech" width="40" src="../assets/Line-style-icons-mic.svg">
    <div class="responseText" v-if="lastResponse">Nexie: {{lastResponse}}</div>
  </div>
</template>

<script>
import { ApiAiClient } from "api-ai-javascript";
export const client = new ApiAiClient({accessToken: '85e32419b3bb47fe952d6d551bbfa14b'});

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      lastResponse: '',
      synth: window.speechSynthesis,
      voices: [],
      currentVoice: 4,
    }
  },
  mounted: function() {
    this.voices = this.synth.getVoices();
    var self = this;
    this.synth.onvoiceschanged = function() {
      self.voices = self.synth.getVoices();
      for(var i = 0; i < self.voices.length; i++){
        if(self.voices[i].name == 'Google UK English Female'){
          self.currentVoice = i;
        }
      }
    };
  },
  methods: {
    recordSpeech: function(event) {
      var obj = event.target;
      obj.classList.add("circleRed");
      obj.classList.remove("circle");
      obj.classList.add("micButtonRed");
      obj.classList.remove("micButton");

      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
      var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
      var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      recognition.grammars = speechRecognitionList;
      //recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.start();
      var self = this;

      recognition.onresult = function(event) {
        // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
        // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
        // It has a getter so it can be accessed like an array
        // The [last] returns the SpeechRecognitionResult at the last position.
        // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
        // These also have getters so they can be accessed like arrays.
        // The [0] returns the SpeechRecognitionAlternative at position 0.
        // We then return the transcript property of the SpeechRecognitionAlternative object
        var speechResult = event.results[0][0].transcript;
        speechResult = speechResult.replace("Hudl", "Huddle");
        speechResult = speechResult.replace("hudl", "Huddle ");
        speechResult = speechResult.replace("Halo", "Huddle");
        speechResult = speechResult.replace("Huddle for", "Huddle 4");
        speechResult = speechResult.replace("Middlesex", "Huddle 6");
        speechResult = speechResult.replace("conference for", "Conference 4");
        console.log(speechResult);

        client.textRequest(speechResult).then((response) => {
          var speechResponse = response.result.fulfillment['speech'];
          self.lastResponse = speechResponse;
          var utterThis = new SpeechSynthesisUtterance(speechResponse);
          // wait on voices to be loaded before fetching list
          utterThis.voice = self.voices[self.currentVoice];
          self.synth.speak(utterThis);
        });
      }

      recognition.onspeechend = function() {
        obj.classList.add("circle");
        obj.classList.remove("circleRed");
        obj.classList.add("micButton");
        obj.classList.remove("micButtonRed");
        recognition.stop();
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.responseText {
  color: blue;
  font-weight: bold;
  font-size: 20px;
}
.inputText {
  font-weight: bold;
  margin-top: 15px;
  font-size: 20px
}
.micButton {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: lightgray;
  padding: 10px;
}
.micButtonRed {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: lightpink;
  padding: 10px;
}
.circle{
    border:5px solid darkgrey;
}
.circleRed{
    border:5px solid lightcoral;
}
</style>
