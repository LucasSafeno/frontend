var app = new Vue({
    el: '#app',
    data: {
      name: '',
      completeName: ''
    },
    methods:{
      fillCompleteName(){
        this.completeName = this.name + ' Tenório'
      }
    },
    watch:{
      name(value, oldValue){
        console.log('mudou', value, oldValue)
        this.fillCompleteName()
      }
    }
  })

