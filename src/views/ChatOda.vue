<template>
    <h3>Chat Odası</h3>
    <div class="container">
        <NavbarCompVue />
    </div>
</template>

<script>
import NavbarCompVue from '@/components/NavbarComp.vue';
import ChatFormVue from '@/components/ChatForm.vue';
export default {
    components: {NavbarCompVue,ChatFormVue}

}
</script>

<style lang="scss" scoped>

</style>