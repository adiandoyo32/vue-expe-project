<template lang="">
    <form @submit.prevent="submitData">
        <label for="name">Name</label>
        <input id="name" type="text" name="name" v-model="name" required />
        <label for="phone">Phone Number</label>
        <input id="phone" type="tel" name="phone" v-model="phone" required />

        <button type="submit">Add Contact</button>
    </form>
</template>

<script>
export default {
    name: "NewFriend",
    emits: ["add-contact"],
    data() {
        return {
            name: "",
            phone: "",
        };
    },
    methods: {
        submitData() {
            this.$emit('add-contact', this.name, this.phone)
        },
    },
};
</script>

<style lang=""></style>
