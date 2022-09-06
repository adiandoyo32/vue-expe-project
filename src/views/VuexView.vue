<template>
    <div>
        <BaseContainer title="Vuex" v-if="isLoggedIn">
            <h3>{{ counter }}</h3>
            <h3>{{ finalCounter }}</h3>
            <button @click="increment">Add 1</button>
            <button @click="increase({ value: 3 })">Add 10</button>
        </BaseContainer>
        <BaseContainer>
            <UserAuth />
        </BaseContainer>
    </div>
</template>

<script>
import BaseContainer from "@/components/BaseContainer.vue";
import { mapGetters, mapActions } from "vuex";
import UserAuth from "../components/UserAuth.vue";

export default {
    name: "VuexView",
    components: { BaseContainer, UserAuth },
    computed: {
        // counter() {
        //     return this.$store.getters.counter
        // },
        // finalCounter() {
        //     return this.$store.getters.finalCounter
        // }
        ...mapGetters(["counter", "finalCounter"]),
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    },
    methods: {
        // inc() {
        //     this.$store.dispatch('increment')
        // },
        // inc10() {
        //     this.$store.dispatch('increase', { value: 10 })
        // }
        ...mapActions(["increment", "increase"]),
    },
};
</script>

<style lang=""></style>
