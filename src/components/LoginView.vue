<template>
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
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the entered username and password match the stored credentials
      const user = storedUsers.find(
        (user) => user.username === this.username && user.password === this.password
      );

      if (user) {
        // Add your login logic here
        // For example, you can emit an event to notify the parent component about successful login
        this.$emit("login-success", { username: this.username });
        alert("Sucessfully logged in.")
      } else {
        // Handle incorrect credentials here (e.g., show an error message)
        alert("Invalid username or password");
      }
    },
  },
};
</script>

<style>
.v-container {
  margin-top: 60px;
}

.text-center {
  text-align: center;
}
.custom-font {
  font-family: "Roboto";
}
</style>
