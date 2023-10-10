<template>
  <div class="game">
    <div class="content-container">
      <div class="stopwatch"></div>
      <div class="password-input">
        <div class="label">
          <div class="left"> </div>
          <div class="right">{{ counter }}</div>
        </div>
        <input type="text" class="regular-input" v-model="password" placeholder="Type your password here . . .">
      </div>
      <div class="rules">
        <template v-for="(rule, index) in rules" :key="index">
          <div class="rule" v-if="!rule.status">
            <div class="head">
              <CloseIcon class="material-icon" size="14"/> <span>Rule {{ index }}</span>
            </div>
            <div class="body">
              <p>{{ rule.text }}</p>
            </div>
          </div>
          <div class="rule-done" v-else>
            <div class="head">
              <DoneIcon class="material-icon" size="14"/> <span>Rule {{ index }}</span>
            </div>
            <div class="body">
              <p>{{ rule.text }}</p>
            </div>
          </div>
        </template>
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
      rules: {
        "1": {
          text: 'Your password must be at least 5 characters.',
          status: false
        },
        "2": {
          text: 'Your password must include a number.',
          status: false
        },
        "3": {
          text: 'Your password must include a special character.',
          status: false
        },
        "4": {
          text: 'Your password must include at least 1 uppercase letter.',
          status: false
        },
        "5": {
          text: 'The digits in your password must add up to 20.',
          status: false
        }
      }
    }
  },
  computed: {
    counter () {
      return this.password.length
    }
  },
  watch: {
    password (value) {
      // 1
      if (value.length >= 5) { this.rules['1'].status = true } else { this.rules['1'].status = false }
      // 2
      if (/\d/.test(value)) { this.rules['2'].status = true } else { this.rules['2'].status = false }
      // 3
      if (/(?=.*?[#?!@$%^&*-])/.test(value)) { this.rules['3'].status = true } else { this.rules['3'].status = false }
      // 4
      if (/(?=.*[A-Z])/.test(value)) { this.rules['4'].status = true } else { this.rules['4'].status = false }
      // 5
      let numbers = value.replace(/^\D+/g, '').split('').map(item => Number(item))
      let sum = 0
      numbers.forEach(number => { if (number) sum += number})
      if (sum >= 20) { this.rules['5'].status = true } else { this.rules['5'].status = false }
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
  padding-top: 120px;
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
@media screen and (max-width: 450px){
  .password-input, .rules{
    width: calc(100% - 56px);
    padding-left: 14px;
    padding-right: 14px;
  }
  .password-input{
    padding-top: 80px;
  }
}
</style>
