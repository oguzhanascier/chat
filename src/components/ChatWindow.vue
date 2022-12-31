<template>
    <div class="chat-window">
        <div v-if="hata">{{ hata }}</div>
        <div class="messages" v-if="belgeler">
            <div v-for="belge in belgeler" :key="belge.id">

            </div>
        </div>
    </div>
</template>

<script>
import getColletion from '../compasables./compasables/getColletion';
export default {
    setup() {
        const { hata, belgeler } = getColletion('mesajlar')

        return { hata, belgeler }
    }
}
</script>

<style lang="scss" scoped>

</style>