<template>
    <form @submit.prevent="girisYap">
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

        const girisYap = () => {
            console.log(email.value, parola.value);

        }
        return { email, parola, girisYap }

    }
}

</script>

<style scoped>

</style>