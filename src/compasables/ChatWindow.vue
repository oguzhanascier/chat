<template>
    <div>

    </div>
</template>

<script>
import getColletion from './getColletion';
export default {
    setup () {
        const {hata,belgeler}=getColletion('mesajlar')

        return {hata,belgeler}
    }
}
</script>

<style lang="scss" scoped>

</style>