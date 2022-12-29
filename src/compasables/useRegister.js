import {ref} from 'vue'
import {auth} from '../firebase/config'

const hata= ref(null)

const signup= async (email, parolai, kullaniciAd)=>{

}


const useRegister=()=>{

return {hata,signup}
}

export default useRegister