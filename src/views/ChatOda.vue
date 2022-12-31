<template>
    <h3>Chat Odası</h3>
    <div class="container">
        <NavbarCompVue />
        <ChatWindowVue />
        <chat-form-vue />
    </div>
</template>

<script>
import NavbarCompVue from '@/components/NavbarComp.vue';
import ChatFormVue from '@/components/ChatForm.vue';
import ChatWindowVue from '@/components/ChatWindow.vue';
export default {
    components: { NavbarCompVue, ChatFormVue, ChatWindowVue }

}
</script>

<style lang="scss" scoped>

</style>