<template>
    <form>
        <input @keypress.enter.prevent="gonder" placeholder="Mesaj yaz.." v-model="mesaj">
    </form>
</template>

<script>
import getUser from '@/compasables/getUser';
import { tarih } from '@/firebase/config';
import { ref } from 'vue';
export default {
    setup() {

        const { kullanici } = getUser()
        const mesaj = ref('')
        const gonder = async () => {
            const chat = {
                kullanici: kullanici.value.displayName,
                mesaj: mesaj.value,
                tarhi: tarih()
            }
            mesaj.value = ''
            console.log(chat);
        }

        return { mesaj, gonder }
    }
}
</script>


<style scoped>
form{
    width: 600px;
    margin: 30px auto;
    text-align: center;
}
input{
    width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    font-family: inherit;
    outline: none;
    background: #3d3d3d;
    color: white;
}
</style>