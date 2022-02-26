window.addEventListener("load", ()=>{
  new Vue({
    el:".row",
    data: {
      countries: [],
    },
    methods: {
      changeIndependent(name) {
        var item = this.countries.find(x=> x.name.common == name)
        item.independent = !item.independent
      }
    }
    ,
    created() {
      fetch('https://restcountries.com/v3.1/all')
        .then(response=> response.json())
        .then(responseJSON =>{
          this.countries = responseJSON
          console.log(this.countries)
        })
    }
  })
})