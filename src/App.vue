<template>
  <div id="base-app" class="content-container">
    <PageHeader />
    <router-view/>
  </div>
</template>
<script>
import PageHeader from '@/components/Header.vue'

export default {
  components: {
    PageHeader
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&family=Poppins:wght@100;200;300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100&display=swap');
@import url('./styles/colors.css');

*{
  font-family: 'Inter', sans-serif;
  margin: 0;
}
#app{
  min-height: 100vh;
  background-color: var(--regular-blue);
}
.content-container{
  max-width: 1024px;
  margin: 0 auto;
}
</style>
