<template>
  <div class="home container">
    <h2>Chat</h2>
    <RegisterVue />
    <div v-if="uyeMi">
      <LoginFormVue />
      <p>Üye olmak için <span>tıkla.</span></p>
    </div>
    <div>
      
    </div>

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
  setup() {
    const uyeMi = ref(true)

    return { uyeMi }

  }
}


</script>


<style scoped>
.home {
  text-align: left;
  padding: 20px 50px;
}
</style>
