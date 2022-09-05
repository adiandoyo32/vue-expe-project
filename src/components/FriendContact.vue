<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
        <button @click="toggleFavorite">Favorite</button>
        <button @click="toggle">Show</button>
        <ul v-if="isVisible">
            <li>
                <strong>Phone: </strong>
                {{ phoneNumber }}
            </li>
        </ul>
        <button @click="$emit('delete-contact', id)">Delete</button>
    </li>
</template>

<script>
export default {
    name: "FriendContact",
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    emits: ['toggle-favorite', 'delete-contact'],
    data() {
        return {
            isVisible: true,
        };
    },
    methods: {
        toggle() {
            this.isVisible = !this.isVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id)
        }
    },
};
</script>

<style scoped>
h2 {
    color: red;
}
</style>
