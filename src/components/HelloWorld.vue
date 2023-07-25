<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"></a>.
    </p>
  </div>
  <div>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Enter Name:</label>
      <input type="text" id="name" v-model="form.name" required>
    </div>
    <div>
      <label for="password">Enter your password: </label>
      <input type="text" id="password" v-model="form.password" required>
    </div>   
  </form>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      arr1: [],
      form: {
        name: '',
        password:'',
      },
    }
  },
  computed: {

  },
  methods: {
    submitForm() {
      console.log(this.form);
    }
  },
  created() {

  },
  mounted(){

  },
  updated() {
    
  },
  destroyed() {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
