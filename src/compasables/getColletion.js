import { ref } from "vue";
import { db } from '../firebase/config'

const getColletion = (koleksiyon) => {
    const belgeler = ref(null)
    const hata = ref(null)

    let koleksiyonRef = db.collection(koleksiyon).orderBy('tarihi')
    koleksiyonRef.onSnapshot(snap => {
        let sonuclar = []
        snap.docs.forEach(doc => {
            doc.data().tarih && sonuclar.push({ ...doc.data, id: doc.id })
        })
        belgeler.value = sonuclar
        hata.value = null
    }, err => {
        belgeler.value = null
        hata.value = 'server error'
    })
    return { hata, belgeler }
}

export default getColletion