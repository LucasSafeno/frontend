var app = new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods:{
      increase(){
        this.counter++;
      },
      decrease(){
        if(this.counter === 0) return;
        this.counter--;
      },
      clearCounter(){
        this.counter = 0;
      }
    }
  });

