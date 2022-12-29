<template>
    <form @submit.prevent="uyeOl">
        <h4>Giriş Ekranı</h4>
        <input type="text" placeholder="E-Mail Giriniz" v-model="email">
        <input type="password" placeholder="Parola Giriniz" v-model="parola">
        <button>Giriş</button>
    </form>
</template>

<script >
import { ref } from 'vue'


export default {
    setup() {
        const email = ref('')
        const parola = ref('')

        const uyeOl = () => {
            console.log(kullaniciAd.value, email.value, parola.value);

        }
        return { email, parola, uyeOl }

    }
}

</script>

<style scoped>

</style>