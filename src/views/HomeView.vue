<template>
  <div class="home container">
    <h2>Chat</h2>
    <RegisterVue />
  </div>
</template>

<script>
import RegisterVue from '@/components/RegisterComp.vue';

export default {
  name: 'HomeView',
  components: {
    RegisterVue
  }
}
</script>


<style scoped>
.home{
  text-align: left;
  padding: 20px 50px;
}
</style>
