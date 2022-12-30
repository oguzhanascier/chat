<template>
  <div class="home container">
    <h2>Chat</h2>
    <div v-if="uyeMi">
      <LoginFormVue @login="chatBasla" />
      <p>Üye olmak için <span @click="uyeMi = false">tıkla.</span></p>
    </div>
    <div v-else>
      <RegisterVue @register="chatBasla" />
      <p>Giriş yapmak için <span @click="uyeMi = true">tıkla</span></p>
    </div>

  </div>
</template>

<script>
import RegisterVue from '@/components/RegisterComp.vue';
import LoginFormVue from '@/components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'HomeView',
  components: {
    RegisterVue,
    LoginFormVue
  },
  setup() {
    const uyeMi = ref(true)
    const router = useRouter()

    const chatBasla = () => {
      router.push({ name: 'chatoda' })
    }

    return { uyeMi, chatBasla }

  }
}


</script>


<style scoped>
.home {
  text-align: left;
  padding: 20px 50px;
}
</style>
