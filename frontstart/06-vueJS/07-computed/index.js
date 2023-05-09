var app = new Vue({
    el: '#app',
    data: {
      age: 10,
      list:[
        {name: 'Lucas', age: 27},
        {name: 'Thauanna', age: 18},
        {name: 'Zé', age: 67},
      ]
    },
    created(){
      this.changeAge(20)
    },
    methods:{
      changeAge(value){
        
        this.age = value;
        if(this.isUnderAge){
          console.log("Tem menos de 18")
          return;
        }
        if(this.isOld){
          console.log("Tem mais de 60")
          return;
        }

        console.log("é idade ok");
      }
    },
    computed:{
      isUnderAge(){
        return this.age < 18;
      },
      isOld(){
        return this.age > 60;
      },
      adultUsers(){
        return this.list.filter(el => el.age > 18)
      }
    }
  })

