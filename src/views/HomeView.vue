<template>
  <div class="home container">
    <h2>Chat</h2>
    <RegisterVue />
    <LoginFormVue />
  </div>
</template>

<script>
import RegisterVue from '@/components/RegisterComp.vue';
import LoginFormVue from '@/components/LoginForm.vue';
import { ref } from 'vue';
export default {
  name: 'HomeView',
  components: {
    RegisterVue,
    LoginFormVue
  },
}


</script>


<style scoped>
.home{
  text-align: left;
  padding: 20px 50px;
}
</style>
