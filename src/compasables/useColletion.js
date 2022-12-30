import { ref } from "vue";
import { db } from '../firebase/config'


const useColletion = (koleksiyon) => {
    let hata = ref(null)
    const belgeEkle = async (belge) => {
        hata.value = null
    }

    try {
        await db.collection(koleksiyon).add(belge)
    } catch (error) {
        hata.value = 'Ups...'
    }
    return { hata, belgeEkle }
}

export default useColletion