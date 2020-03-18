<template>
  <nav>
    <v-app-bar dark>
      <v-toolbar-title>Guillotine</v-toolbar-title>
      <v-spacer />
      <v-avatar size="32px" class="mx-4 hidden-sm-and-down">
        <img :src="currentUser ? currentUser.profile.avatar : ''" />
      </v-avatar>
      <v-tooltip bottom color="tooltip">
        <template v-slot:activator="{ on }">
          <v-btn href="accounts/login/" icon v-on="on">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        Log Out
      </v-tooltip>
    </v-app-bar>
  </nav>
</template>

<script>
import API from "../../apis/API";

const api = new API();

export default {
  name: "Navbar",
  data() {
    return {
      currentUser: null
    };
  },
  created() {
    api.getCurrentUser().then(data => {
      this.currentUser = data;
      if (this.currentUser.profile === null) {
        location.href = "/accounts/logout/";
      }
    });
  }
};
</script>
