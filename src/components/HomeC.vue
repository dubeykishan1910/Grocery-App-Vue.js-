<template>
<section class="home" ref="homeSection">
    <div class="content">
        <h3>Fresh and <span>organic</span> products for your</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aspernatur voluptatibus animi minus. Similique sint et doloribus autem consequuntur quibusdam officiis debitis eos!</p>
        
        <a href="#categories" class="btn">shop now</a>
    </div>
</section>



    <!-- features sections -->
    <section id="features">
        <FeaturesC />
    </section>

    <!-- product section -->
    <section id="products">
        <!-- <ProductsC /> -->
    </section>

    <!-- categoriesc section -->
    <section id="categories">
        <CategoriesC />
    </section>

    <!-- review section -->
    <section id="review">
        <ReviewC />
    </section>

    <!-- blog section -->
    <section id="blogs">
        <!-- <ProductsC /> -->
    </section>

    <!-- footer section -->
    <div id="footer">
        <FooterC />
    </div>
        
    

</template>

<script>

import FeaturesC from './FeaturesC.vue';
// import ProductsC from './ProductsC.vue';
import CategoriesC from './CategoriesC.vue';
import ReviewC from './ReviewC.vue';
import FooterC from './FooterC.vue';


export default {
    name: 'HomeC',
    data() {
        return {

        };
    },
    components: {
    FeaturesC,
    // ProductsC,
    CategoriesC,
    ReviewC,
    FooterC,
   
},
    computed: {

    },
    methods: {

    },
    mounted() {
        // Code to run on component mount
    },
};
</script>

<style scoped>
section {
    padding: 2rem 9%;
}

.home {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/chri.jpg);
    background-position: center;
    background-size: cover;
    /* padding-top: 17rem; */
    padding-bottom: 10rem;
}

.home .content {
    text-align: center;
    width: 60rem;
}

.home .content h3 {
    color: #130f40;
    font-size: 3rem;
}

.home .content h3 span {
    color: #ff7800;
}

.home .content p {
    color: black;

    font-size: 1.7rem;
    padding: 1rem 0;
}

@media (max-width:991px) {
    section {
        padding: 2rem;
    }
}

@media (max-width:450px) {
    .home {
        padding: 4rem;
    }

}
</style>
