import { ref } from "vue";
import { auth } from "../firebase/config";

const hata = ref(null);

const signup = async (email, parola, kullaniciAd) => { };

const useRegister = () => {
    hata.value = null;

    try {
        const res = await auth.createUserWithEmailAndPassword(email, parola)

        if (!res) {
            throw new Error('Register Hatalı')
        }
        hata.value = null

        return res

    } catch (error) {
        hata.value=error.message

    }

    return { hata, signup };
};

export default useRegister;
