<template>
    <div class="signup">
      <form @submit.prevent="signup">
        <div>
          <label for="name">Enter Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="password">Enter your password: </label>
          <input type="text" id="password" v-model="password" required>
        </div>
        <div>
          <label for="confirmPass">Enter your password again: </label>
          <input type="text" id="confirmPass" v-model="confirmPass" required>
        </div>
        <div>
          <label for="email">Enter your email: </label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        password: '',
        confirmPass: '',
        email: '',
      };
    },
    methods: {
      signup() {
        const usernameRegex = /^(?=.*[a-zA-Z0-9!@#$%^&*])+$/;
        if (!usernameRegex.test(this.name)) {
          alert('Username must include a number or special character.');
          return;
        }
  
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
        if (!passwordRegex.test(this.password)) {
          alert('Password must start with a capital letter and be 8 digits long.');
          return;
        }
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
          alert('Please enter a valid email address.');
          return;
        }
  
        if (this.password !== this.confirmPass) {
          alert('Passwords do not match.');
          return;
        }
  
        alert('You are registered!');
      },
    },
  };
</script>
