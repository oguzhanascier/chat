import { ref } from "vue";
import { db } from '../firebase/config'



const getColletion = (koleksiyon) => {
    const belgeler = ref('')
    const hata = ref('')

    let koleksiyonRef = db.collection(koleksiyon).orderBy('tarihi')

    koleksiyonRef.onSnapshot(snap => {

        let sonuclar = []

        snap.docs.forEach(doc => {
            doc.data().tarihi && sonuclar.push({ ...doc.data, id:doc.id })
        })
        belgeler.value = sonuclar
        hata.value = null
    }, err => {
        belgeler.value = null
        hata.value = 'server error'
        console.log(err);
    })
   

    return { hata, belgeler }
}

export default getColletion
