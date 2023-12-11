<template>
    <section class="features">
      <h1 class="heading">Our <span> features</span></h1>
      <div class="box-container">
        <div class="box" v-for="product in products" :key="product.id">
          <img :src="require(`../assets/${product.image}`)" alt="img">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </section>
  </template>

<script>
import axios from 'axios';

export default {
  name: 'FeaturesC',
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api2")
            .then(response => {
                this.products = response.data;
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

},
  methods: {
    // getImageUrl(productId) {
      // Logic to get the image URL based on the product ID
      // Replace this with your logic to get the image URL
      // Example: return `path/to/images/${productId}.jpg`;
    //   return 'path/to/default/image.jpg'; 
      // Default image URL if not available
    // }
  }
};
</script>

    
<style scoped>
img {
    max-width: 100%;
    /* max-height: 20vh; */
}
section {
    padding: 2rem 9%;
}
.heading{
    text-align: center;
    padding: 2rem 0;
    font-size: 2.5rem;
    color: #130f40;
}
.heading span{
    background-color: orange;
    color: #fff;
    display: inline-block;
    padding: .5rem 3rem;
    clip-path: polygon(100% 0, 94% 50%, 100% 99%, 0 100%, 7% 50%, 0 0);
}


.features .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem ,1fr));
    gap: 1.5rem;
}

/* box design */
.features .box-container .box{
    padding: 3rem 2rem;
    background: #fff;
    outline: .1rem solid rgba(0,0,0,.1);
    /* outline-offset: -1rem; */
    align-items: center;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
}
.features .box-container .box:hover{
    outline: .2rem solid #130f40;
    outline-offset: 0rem;
}
.features .box-container .box img{
    margin: 1rem 0;
    /* height: 15rem; */
}
.features .box-container .box h3{
    font-size: 2.5rem;
    line-height: 1.8;
    color: #130f40;
}
.features .box-container .box p{
    font-size: 1.5rem;
    line-height: 1.8rem;
    color: #666;
    padding: 1rem 0;

}



@media (max-width:450px){
    html{font-size: 50%;}

    .heading{
        font-size: 2.5rem;
    }
}
</style>
