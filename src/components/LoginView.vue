<template>
  <div class="flex">
    <!-- Side Navbar -->
    <v-navigation-drawer app class="bg-green-500" color="blue-lighten-5" dark>
      <v-list>
        <ul class="space-y-4">
          <li><router-link class="text-black font-bold hover:text-gray-200 transition-colors" :to="{ name: 'filterById' }">Search By Id</router-link></li>
          <li><router-link class="text-black font-bold hover:text-gray-200 transition-colors" :to="{ name: 'filterByColour' }">Search By Hair Colour</router-link></li>
          <li><router-link class="text-black font-bold hover:text-gray-200 transition-colors" :to="{ name: 'filterByGender' }">Search By Gender</router-link></li>
        </ul>
      </v-list>
    </v-navigation-drawer>
  </div>
  <div class="flex-1 p-8">
    <v-toolbar  color="blue-lighten-4">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Hang</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
  <v-container>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card class="elevation-3">
        <v-card-title class="text-center" custom-font>
          <h1>Sign In</h1>
          <br>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field label="Username" v-model="username" type="text" variant="outlined" required
            ></v-text-field>
            <v-text-field
              label="Password" v-model="password" type="password" variant="outlined" required
            ></v-text-field>
            <v-btn block color="black" type="submit">Login</v-btn>
            <br>
            <router-link to="/signup">Create an account</router-link>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters({ user: 'getUser' })
  },
  methods: {
    ...mapActions({ createUser: 'registerUser' }),
    login() {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const user = storedUsers.find(
        (user) => user.username === this.username && user.password === this.password
      );

      if (user) {
        this.$emit("login-success", { username: this.username });
        alert("Successfully logged in.");
      } else {
        alert("Invalid username or password");
      }
    },
  },
  created() {
    this.createUser();
  }
}
</script>

<style scoped>

/* Add any custom styles here if needed */
</style>
