<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TextToSpeech msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TextToSpeech from './components/TextToSpeech.vue'

export default {
  name: 'app',
  beforeMount() {
    this.checkAccessToken();
  },
  components: {
    TextToSpeech
  },
  methods: {
    checkAccessToken: function () {
      const url = window.location.pathname;
      if(!url.includes('access_token')){
        location.replace("https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=6d98cb5f-5969-4c00-bdf6-0f3555c36037&response_type=token&redirect_uri=https://localhost:8080/&scope=openid");
      }
      else{
        const urlsplit = url.split("&");
        const access_token = urlsplit.split('#');
        alert(access_token[1]);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
