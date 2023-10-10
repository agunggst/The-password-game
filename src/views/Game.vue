<template>
  <div class="game">
    <div class="content-container">
      <div class="password-input">
        <div class="label">
          <div class="left"> </div>
          <div class="right">{{ counter }}</div>
        </div>
        <input type="text" class="regular-input" v-model="password" placeholder="Type your password here . . .">
      </div>
      <div class="rules">
        <div class="rule">
          <div class="head">
            <CloseIcon class="material-icon" size="14"/> <span>Rule 1</span>
          </div>
          <div class="body">
            <p>Your password must be at least 5 characters.</p>
          </div>
        </div>
        <div class="rule-done">
          <div class="head">
            <DoneIcon class="material-icon" size="14"/> <span>Rule 2</span>
          </div>
          <div class="body">
            <p>Your password must be at least 5 characters.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from 'vue-material-design-icons/Close.vue';
import DoneIcon from 'vue-material-design-icons/Check.vue';

export default {
  name: 'GamePage',
  components: {
    CloseIcon,
    DoneIcon
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
.password-input, .rules{
  padding-top: 150px;
  margin: 0 auto;
  width: 400px;
}
.rules{
  padding-top: 28px;
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
.material-icon{
  margin-top: 10px;
}
.rule, .rule-done{
  /* background-color: var(--regular-pink); */
  /* padding: 12px; */
  border-radius: 8px;
  box-shadow: 0px 0px 16px 0px rgba(253,240,240,0.75);
  -webkit-box-shadow: 0px 0px 16px 0px rgba(253,240,240,0.75);
  -moz-box-shadow: 0px 0px 16px 0px rgba(253,240,240,0.75);
  margin-bottom: 16px;
}
.rule .head{
  background-color: var(--dark-blue);
  padding: 8px 12px;
  color: var(--regular-pink);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rule .body{
  padding: 12px 12px;
  background-color: var(--regular-pink);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.rule-done .head{
  background-color: var(--dark-blue);
  padding: 8px 12px;
  color: var(--regular-green);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rule-done .body{
  padding: 12px 12px;
  background-color: var(--regular-green);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
