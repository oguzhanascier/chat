<template>
    <form @submit.prevent="uyeOl">
        <h4>Üye Ol</h4>
        <input type="text" placeholder="Kullanıcı Adını Giriniz" v-model="kullaniciAd">
        <input type="text" placeholder="E-Mail Giriniz" v-model="email">
        <input type="password" placeholder="Parola Giriniz" v-model="parola">
        <button>Üye Ol</button>
    </form>
</template>

<script >
import { ref } from 'vue'


export default {
    setup() {
        const kullaniciAd = ref('')
        const email = ref('')
        const parola = ref('')

        const uyeOl = () => {
            console.log(kullaniciAd.value, email.value, parola.value);

        }
        return { kullaniciAd, email, parola, uyeOl }

    }
}

</script>

<style lang="scss" scoped>

</style>