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


        return {}
    }
}
</script>
