<template>
  <div class="home">
    <router-link to="/game">
      <lottie-player :src="startJSON" loop autoplay mode="normal" class="start-icon"/>
    </router-link>
  </div>
</template>

<script>
import LottiePlayer from '@lottiefiles/lottie-player'
import startJSON from '../assets/start-btn-anim.json'

export default {
  name: 'HomePage',
  components: {
    LottiePlayer
  },
  data () {
    return {
      startJSON: startJSON
    }
  }
}
</script>
<style scoped>
.start-icon{
  width: 400px;
  margin: 0 auto;
  padding-top: 150px;
  cursor: pointer;
}
</style>
