<template>
  <div class="home container">
    <h2>Chat</h2>
    <div v-if="uyeMi">
      <LoginFormVue />
      <p>Üye olmak için <span @click="uyeMi=false">tıkla.</span></p>
    </div>
    <div v-else>
      <RegisterVue />
      <p>Giriş yapmak için <span @click="uyeMi=true">tıkla</span></p>
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
