<template>
    <form @submit.prevent="girisYap">
        <h4>Giriş Ekranı</h4>
        <input type="text" placeholder="E-Mail Giriniz" v-model="email">
        <input type="password" placeholder="Parola Giriniz" v-model="parola">
        <button>Giriş</button>
    </form>
    <div class="error">{{hata}}</div>
</template>

<script >
import { ref } from 'vue'
import useLogin from '@/compasables/useLogin'

export default {
    setup() {
        const email = ref('')
        const parola = ref('')
        const {hata,login}=useLogin()

        const girisYap = async () => {
            login(email.value, parola.value);

        }
        return { email, parola, girisYap,hata,login }

    }
}

</script>

<style scoped>

</style>