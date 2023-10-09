<template>
  <div class="header">
    <lottie-player :src="lockJSON" loop autoplay mode="normal" class="lock-icon"/>
    <h2 class="title">The Password Game</h2>
  </div>
</template>
<script>
import LottiePlayer from '@lottiefiles/lottie-player'
import lockJSON from '../assets/lock-anim.json'

export default {
  name: 'PageHeader',
  components: {
    LottiePlayer
  },
  data () {
    return {
      lockJSON: lockJSON
    }
  }
}
</script>
<style scoped>
.header{
  display: flex;
  align-items: center;
  border-bottom: 5px dashed var(--regular-pink);
  padding: 16px 6px;
  padding-bottom: 22px;
}
.title{
  padding-top: 10px;
  margin-left: 8px;
  color: var(--cream);
}
.lock-icon{
  width: 50px;
}
</style>