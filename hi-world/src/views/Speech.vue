<template>
  <div class="home">
    <SpeechCapture msg="Welcome to Your Vue.js App"/>
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
