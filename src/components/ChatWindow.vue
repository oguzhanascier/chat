<template>
    <div class="chat-window">
        <div v-if="hata">{{ hata }}</div>
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