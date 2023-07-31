<template>
<input v-model="todo" placeholder="Add a new todo" /><br/><br/>
<input type="submit" @click="storeTodo" value="Add todo"/>
<button @click="getTodo">Get List</button>
<ul class="list">
  <li v-for="todo in todos" :key="todo">
    {{ todo }}
  </li>

</ul>
    
</template>

<script>
export default {
 name: "App", 
  data()
  {
    return {
      todos:[],
      todo:'',
      
    };
  },
  computed:{

  },
  methods:{
    storeTodo(){
      isFinite(this.todo.length)
      {
        this.todos.push(this.todo);
      }
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.todo="";
    },
    getTodo(){
      this.todos=JSON.parse(localStorage.getItem("todos"));
    }  
  },
  watch: {
    todos(newTodos) {
      console.log("Todos changed:", newTodos);
    },
    todo(newTodo) {
      console.log("Todo changed:", newTodo);
    },
  },
};
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
