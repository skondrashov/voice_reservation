<template>
  <div class="home">
    <div class="headerBar">
      <div class="headerTitle">Nexient Voice-Activated Room Reservation Service</div>
    </div>
    <SpeechCapture msg="Hello"/>
    <p class="descriptionText">
      This application allows you to reserve a conference room via voice commands.
      Press the microphone icon to speak to Nexi and they will help you schedule a meeting.
    </p>
    <h3>
      Currently supported features:
    </h3>
    <ul class="supportedFeatures">
      <li>Schedule a meeting through voice recognition</li>
      <li>Book a conference room at a specific date and time</li>
      <li>Choose who will attend the meeting</li>
    </ul>
    <div class="footerBar">
      <div class="bottomText">Timofey Kondrashov, Akshay Gupte, Jason Zhang</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SpeechCapture from '@/components/SpeechCapture.vue'

export default {
  name: 'speech',
  components: {
    SpeechCapture
  }
}
</script>

<style scoped>
  h3{
    font-size: 30px;
  }
  li{
    text-align:left;
    margin-left: 25%;
  }
  .supportedFeatures{
    width: 80%;
    margin-left: 10%;
    font-size: 25px;
  }
  .descriptionText {
    width: 50%;
    text-align: center;
    margin-left: 25%;
    font-size: 25px;
    width: 80%;
    margin-left: 10%;
  }
  .headerBar {
    height: 12%;
    width: 100%;
    background-color: darkturquoise;
    top: 0;
    left: 0;
    color: white;
    position: fixed;
  }
  .footerBar {
    height: 12%;
    width: 100%;
    background-color: darkturquoise;
    bottom: 0;
    position: fixed;
    left: 0;
    color: white;
  }
  .headerTitle {
    margin-top: 23px;
    font-size: 35px;
  }
  .bottomText {
    margin-top: 35px;
    font-size: 22px;
  }
  .home {
    position: fixed;
    top: 15%;
    text-align: center;
    width: 100%;
  }
</style>