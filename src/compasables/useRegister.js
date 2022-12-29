import { ref } from "vue";
import { auth } from "../firebase/config";

const hata = ref(null);

const signup = async (email, parola, kullaniciAd) => {};

const useRegister = () => {
  hata.value = null;

  try {
    const res= await auth.createUserWithEmailAndPassword(email,parola)

    if(!res){
        throw new Error ('Register Hatalı')
    }
  } catch (error) {
    
  }

  return { hata, signup };
};

export default useRegister;
