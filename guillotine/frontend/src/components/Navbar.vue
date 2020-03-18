<template>
  <nav>
    <v-app-bar dark>
      <v-toolbar-title>Guillotine</v-toolbar-title>
      <v-spacer />
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
export default {
  name: "Navbar"
};
</script>

