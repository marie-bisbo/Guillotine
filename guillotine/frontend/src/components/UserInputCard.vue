<template>
  <v-card class="mx-auto my-10" height="600" width="600">
    <v-tooltip bottom color="tooltip">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-upload</v-icon>
        </v-btn>
      </template>
      Upload images
    </v-tooltip>
  </v-card>
</template>