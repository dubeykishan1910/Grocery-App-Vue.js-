<template>
    <section class="categories">
      <h1 class="heading">Fresh <span> vegetables</span></h1>
      <div class="box-container">

        <div class="box" v-for="vige in allvegi" :key="vige.id">
          <img :src="require(`../assets/${vige.image}`)" alt="img"> <!-- Adjust to get the correct image URL -->
          <h3>{{ vige.name }}</h3>
          <p>₹ {{ vige.price }}</p>
          <button class="btn" v-on:click="addItem">Add</button>
        </div>

      </div>
    </section>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'VegItem',
  data() {
    return {
      allvegi: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api6")
            .then(response => {
                this.allvegi = response.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

},
beforeUpdated(){
   this.addItem();
},
  methods:{
    async addItem(){
        
        let result = await axios.post("http://localhost:3000/api1",{
            title:"mango",
            price:"25",
            quantity: "qty : 1",
            image: "banana.png"

        });
        console.warn(result);
        if(result.status==201){
            alert("added")
        }
    },
  }

};
</script>

    
<style scoped>
section {
    padding: 2rem 9%;
}

/* making of card with grid*/
.categories .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem ,1fr));
    gap: 1.5rem;
    
}

.categories .box-container .box{
    padding: 3rem 2rem;
    border-radius: .5rem;
    background-color: #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    outline: .1rem solid rgba(0,0,0,.1);
    text-align: center;
}
.categories .box-container .box:hover{
    outline: .2rem solid #130f40;
    outline-offset: 0rem;
}

.categories .box-container .box img{
    margin: 1rem 0;
    height: 15rem;
}

.categories .box-container .box h3{
    font-size: 2rem;
    color: #130f40;
    line-height: 1.8;
}
.categories .box-container .box p{
  font-size: 1.7rem;
  color: #666;
  line-height: 1.6;
  padding: 1rem 0;
}







@media (max-width:450px){
    html{font-size: 50%;}

    .heading{
        font-size: 2.5rem;
    }
}

</style>
