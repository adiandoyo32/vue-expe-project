<template>
    <section>
        <button @click="login" v-if="!isAuth">Login</button>
        <button @click="logout" v-if="isAuth">Logout</button>
    </section>
</template>
<script>
export default {
    name: 'UserAuth',
    computed: {
        isAuth() {
            return this.$store.getters.isLoggedIn
        }    
    },
    methods: {
        login() {
            this.$store.dispatch('login')
        },
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>
<style lang="">
    
</style>