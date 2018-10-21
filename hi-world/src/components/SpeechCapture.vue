<template>
  <div class="hello">
    <button v-on:click="recordSpeech()">Speak</button>
    <span></span>
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
      conversationLog: '',
      synth: window.speechSynthesis,
      voices: [],
      currentVoice: 4
    }
  },
  mounted: function() {
    this.voices = this.synth.getVoices();
    var self = this;
    this.synth.onvoiceschanged = function() {
      self.voices = self.synth.getVoices();
    };
  },
  methods: {
    recordSpeech: function() {
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

        client.textRequest(speechResult).then((response) => {
          var utterThis = new SpeechSynthesisUtterance(response.result.fulfillment['speech']);
          // wait on voices to be loaded before fetching list
          utterThis.voice = self.voices[self.currentVoice];
          self.synth.speak(utterThis);
        });
      }

      recognition.onspeechend = function() {
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
