<template>
    <div class="home">
        <NewFriend @add-contact="addContact"/>
        <FriendContact
            v-for="friend in friends"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phoneNumber"
            :is-favorite="friend.isFavorite"
            @toggle-favorite="toggleFavoriteStatus"
            @delete-contact="deleteContact"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import FriendContact from "@/components/FriendContact.vue";
import NewFriend from "@/components/NewFriend.vue";

export default {
    name: "HomeView",
    components: {
    FriendContact,
    NewFriend
},
    data() {
        return {
            friends: [
                {
                    id: "1",
                    name: "John Doe",
                    phoneNumber: "08123",
                    isFavorite: true,
                },
                {
                    id: "2",
                    name: "Will",
                    phoneNumber: "08123123",
                    isFavorite: false,
                },
            ],
        };
    },
    methods: {
        toggleFavoriteStatus(friendId) {
          const foundedFriend = this.friends.find((item) => item.id === friendId)
          foundedFriend.isFavorite = !foundedFriend.isFavorite
        },
        addContact(name, phone) {
          const newFriend = { 
            id: new Date().toISOString(),
            name,
            phoneNumber: phone,
            isFavorite: false,
          }
          this.friends.push(newFriend)
        },
        deleteContact(friendId) {
          this.friends = this.friends.filter((item) => item.id !== friendId)
        }
    },
};
</script>
