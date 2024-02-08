
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    mounted() {
        axios
        .get('http://localhost/boolean-php/php-todo-list-json/to-do-list.json/index.php')
        .then((res) => {

            console.log(res.data)
        });

    }
  }).mount('#app')
