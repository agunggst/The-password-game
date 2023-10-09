<template>
  <div class="home">
    <div class="content-container">
      <PageHeader />
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'HomePage',
  components: {
    PageHeader 
  }
}
</script>
<style scoped>
.content-container{
  max-width: 1024px;
  margin: 0 auto;
}
</style>
