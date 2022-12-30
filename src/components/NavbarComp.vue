<template>
    <nav>
        <div>
            <p>Kullanıcı Adı</p>
            <p class="email">Kullanıcı Emaili</p>
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
        const cikisYap = async () => {
            await auth.signOut().then(() => {
                router.push({ name: 'home' })
            })
        }
        return {cikisYap}
    }
}
</script>

<style lang="scss" scoped>

</style>