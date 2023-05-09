var app = new Vue({
    el: '#app',
    data: {
      age: 0
    },
    beforeCreate(){
      console.log('Before create')
    },
    created(){
      console.log('Create')
      this.age = 26;
    }
  })

