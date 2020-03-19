<template>
  <v-app>
    <Navbar />
    <UserInputCard />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import UserInputCard from "./components/UserInputCard.vue";

export default {
  name: "app",
  components: {
    Navbar,
    UserInputCard
  }
};
</script>