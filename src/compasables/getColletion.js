import { ref } from "vue";
import { db } from '../firebase/config'

const getColletion = (koleksiyon) => {
    const belgeler = ref(null)
    const hata = ref(null)

    let koleksiyonRef = db.collection(koleksiyon).orderBy('tarihi')

    koleksiyonRef.onSnapshot(snap => {

        let sonuclar = []

        snap.docs.forEach(doc => {
            doc.data().tarihi && sonuclar.push({ ...doc.data, id:doc.id })
        })

       try {
        belgeler.value = null
       } catch (error) {
        hata.value = error
        
       }
    }, err => {
        belgeler.value = null
        hata.value = 'server error'
        console.log(err);
    })
   

    return { hata, belgeler }
}

export default getColletion
