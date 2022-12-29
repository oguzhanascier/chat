import { ref } from "vue";
import { auth } from "../firebase/config";

const hata = ref(null);

const signup = async (email, parolai, kullaniciAd) => {};

const useRegister = () => {
  hata.value = null;

  try {
    const res= await auth.createUserWithEmailAndPassword()
  } catch (error) {
    
  }

  return { hata, signup };
};

export default useRegister;
