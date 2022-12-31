import { ref } from "vue";
import { db } from '../firebase/config'

const getColletion = (koleksiyon) => {
    const belgeler = ref(null)
    const hata = ref(null)

    let koleksiyonRef = db.collection(koleksiyon).orderBy('tarih')
    console.log(koleksiyon);
    koleksiyonRef.onSnapshot(snap => {
        let sonuclar = []
        snap.docs.forEach(doc => {
            doc.data().tarih && sonuclar.push({ ...doc.data, id: doc.id })
        })
        belgeler.value = sonuclar
        console.log(belgeler);
        hata.value = null
    }, err => {
        belgeler.value = null
        hata.value = 'server error'
        console.log(err);
    })
    return { hata, belgeler }
}

export default getColletion