Vue.component('user-profile',{
  props: {
    name: {
      type: String,
      required: true
    },
    age: Number,
  },
  template: '<span> {{name }} - {{ age }}</span>'
})

var app = new Vue({
    el: '#app',
    data: {
      name: "Lucas Tenório",
      age: 2350
    }
  })

