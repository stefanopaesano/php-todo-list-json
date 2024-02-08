
const { createApp } = Vue

  createApp({
    data() {
      return {
        todolist:[]
      }
    },
    mounted() {
        axios
        .get('http://localhost/boolean-php/php-todo-list-json/index.php')
        .then((res) => {
            console.log(res.data)
            this.todolist = res.data
            
        });

    }
  }).mount('#app')

  