var app = new Vue({
    el: '#app',
    data: {
      offersList:[
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/0/00/2018_Ford_KA%2B_Zetec_1.0_Front.jpg",
          title: "Ford Ka",
          price: '37000',
          description: "Caro novo, 0 km pra retirar em SP",
          bonus: false,
          special: false
        },
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/0/00/2018_Ford_KA%2B_Zetec_1.0_Front.jpg",
          title: "Ford Focus",
          price: '57000',
          description: "Caro semi-novo, 20 km pra retirar em SP",
          bonus: true,
          special: true
        },
      ]
    }
  })

