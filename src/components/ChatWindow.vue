<template>
    <div class="chat-window">
        <div v-if="hata">{{ hata }}</div>
        <div class="messages" v-if="belgeler">
            <div v-for="belge in belgeler" :key="belge.id" class="single">
                <p>{{belgeler}}</p>
                <span class="created-at">{{belge.tarihi}}</span>
                <span class="name">{{belge.kullanici}}</span>
                <span style="text-decoration:none">{{belge.mesaj}}</span>
                
            </div>
        </div>
    </div>
</template>

<script>
import getColletion from '../compasables/getColletion';
export default {
    setup() {
        const { hata, belgeler } = getColletion('mesajlar')

        return { hata, belgeler }
    }
}
</script>

<style lang="scss" scoped>

</style>