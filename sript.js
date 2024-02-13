
const { createApp } = Vue

  createApp({
    data() {
      return {
       
        todolist:[],
        NewTodo: ''
        
       
      }
    },
    mounted() {
        axios
        .get('http://localhost/boolean-php/php-todo-list-json/index.php')
        .then((res) => {
            console.log(res.data)
            this.todolist = res.data
            
        });

    },
    methods: {
      addtodo(){
        this.todolist.push({
          andare: this.NewTodo

        });
        this.NewTodo = '';
      }

    }
  }).mount('#app')

  