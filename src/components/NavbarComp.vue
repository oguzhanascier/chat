<template>
    <nav>
        <div>
            <p>Merhaba {{kullanici.displayName}}</p>
            <p class="email">{{kullanici.email}} ile giriş yaptınız.</p>
        </div>
        <button @click="cikisYap">çıkış</button>

    </nav>
</template>
<script>
import { auth } from '../firebase/config'
import { useRouter } from 'vue-router'
import getUser from '../compasables/getUser'
export default {
    setup() {
        const router = useRouter()
        const { kullanici } = getUser()
        const cikisYap = async () => {
            await auth.signOut().then(() => {
                router.push({ name: 'home' })
            })
        }
        return { cikisYap, kullanici }
    }
}
</script>

<style lang="scss" scoped>

</style>