<template>
<section class="review">
    <h1 class="heading">customer's <span> review</span></h1>

    <div class="slider">
        <div class="box-container">
            <div class="box" v-for="rev in reviews" :key="rev.id">
                <img :src="require(`../assets/${rev.image}`)" alt="img">
                <p>{{ rev.feedback }}</p>
                <h3>{{ rev.name }}</h3>

                <div class="stars">
                        <i class="fas fa-star" v-for="star in rev.star" :key="star"></i>
                        <i v-if="rev.star % 1 !== 0" class="fas fa-star-half-alt"></i>
                </div>

                

            </div>

        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ReviewC',
    data() {
        return {
            reviews: []
        };
    },
    mounted() {
    axios.get("http://localhost:3000/api5")
            .then(response => {
                this.reviews = response.data;
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

},

};
</script>

<style scoped>
section {
    padding: 2rem 9%;
}

.review .slider {
    padding: 1rem;
}

/* making of card with grid*/
.review .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap: 1.5rem;

}

.review .box-container .box {
    padding: 3rem 2rem;
    border-radius: .5rem;
    background-color: #fff;
    text-align: center;
    outline-offset: -1rem;
    outline: .1rem solid rgba(0, 0, 0, .1);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    transition: .2s linear;
}

.review .box-container .box:hover {
    outline: .2rem solid #130f40;
    outline-offset: 0rem;
}

.review .box-container .box img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 2px solid #130f40;
}

.review .box-container .box h3 {
    font-size: 2.2rem;
    color: #130f40;
    line-height: 1.8;
}

.review .box-container .box p {
    padding: 1rem 0;
    font-size: 1.5rem;
    color: #666;
    line-height: 1.8;

}

.review .slider .box .stars i {
    padding: 1rem 0;
    line-height: 1.8;
    color: #666;
    font-size: 1.5rem;

}

@media (max-width:450px) {
    html {
        font-size: 50%;
    }

    .heading {
        font-size: 2.5rem;
    }
}
</style>
