<template>
    <section class="categories">
      <h1 class="heading">Our <span> categories</span></h1>
      <div class="box-container">

        <div class="box" v-for="cate in categories" :key="cate.id">
          <img :src="require(`../assets/${cate.image}`)" alt="img"> <!-- Adjust to get the correct image URL -->
          <h3>{{ cate.name }}</h3>
          <p>{{ cate.offer }}</p>
          <h3>{{ cate.lin }}</h3>
          <router-link :to="`/${cate.lin}`" class="btn">{{cate.item}}</router-link>
        </div>

      </div>
    </section>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'CategoriesC',
  data() {
    return {
      categories: []
    };
  },

  mounted() {
    axios.get("http://localhost:3000/api4")
            .then(response => {
                this.categories = response.data;
                
                console.warn(this.cardsData)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

},
}
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
