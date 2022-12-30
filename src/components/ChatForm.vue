<template>
    <form>
        <input @keypress.enter.prevent="gonder" placeholder="Mesaj yaz.." v-model="mesaj">
    </form>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>
