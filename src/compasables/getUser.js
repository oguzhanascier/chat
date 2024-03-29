import { ref } from 'vue'
import { auth } from '../firebase/config'

const kullanici = ref(auth.currentUser)


auth.onAuthStateChanged(k => {
    kullanici.value = k
})

const getUser = () => {
    return {kullanici}
}

export default getUser