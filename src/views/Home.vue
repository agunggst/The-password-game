<template>
  <div class="home">
    <div class="content-container">
      <PageHeader />
      <div class="password-input">
        <div class="label">
          <div class="left"> </div>
          <div class="right">{{ counter }}</div>
        </div>
        <input type="text" class="regular-input" v-model="password" placeholder="Type your password here . . .">
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'HomePage',
  components: {
    PageHeader 
  },
  data () {
    return {
      password: '',
    }
  },
  computed: {
    counter () {
      return this.password.length
    }
  }
}
</script>
<style scoped>
.content-container{
  max-width: 1024px;
  margin: 0 auto;
}
.password-input{
  padding-top: 150px;
  margin: 0 auto;
  width: 400px;
}
.label{
  display: flex;
  justify-content: space-between;
  color: var(--regular-pink);
}
.regular-input{
  width: calc(100% - 24px);
  border: none;
  background-color: var(--dark-blue);
  font-size: 16px;
  color: var(--cream);
  margin-top: 8px;
  padding: 12px;
  border-radius: 8px;
}
</style>
