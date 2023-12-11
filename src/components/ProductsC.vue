<template>
<section class="products">
    <h1 class="heading">Our <span>Products</span></h1>

    <div class="products-slider swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="product in products" :key="product.id">

                <div class="box">
                    <img :src="require(`../assets/${product.image}`)" alt="img">
                    <h3>{{ product.name }}</h3>
                    <div class="price">{{ product.price }}</div>
                    <div class="stars">
                        <i class="fas fa-star" v-for="star in 5" :key="star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" class="btn">add to cart</a>
                </div>

            </div>
        </div>
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <div class="swiper-pagination"></div>
    </div>

</section>
</template>

  
<script>
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
    name: 'ProductsC',
    data() {
        return {
            products: [
                
                // Add more products as needed
            ],
            swiper: null
        };
    },
    mounted() {
        this.initSwiper();

        axios.get('/data.json')
      .then(response => {
        this.products = response.data.api3.our;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },

    beforeUnmount() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    },

    methods: {
        initSwiper() {
            this.swiper = new Swiper('.products-slider', {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: true,
                autoplay: {
                    delay: 7500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1020: {
                        slidesPerView: 3
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
        }
    }
};
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 10;
    cursor: pointer;
}

.swiper-button-prev {
    left: 10px;
}

.swiper-button-next {
    right: 10px;
}

.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
}

img {
    max-width: 100%;
    /* max-height: 20vh; */
}

section {
    padding: 2rem 9%;
}

.products .products-slider {
    position: relative;
    padding: 1rem;
}

.products .products-slider:first-child {
    margin-bottom: 2rem;
}

.products .products-slider .box {
    background: #fff;
    border-radius: .5rem;
    text-align: center;
    padding: 3rem 2rem;
    outline-offset: -1rem;
    outline: var(--outline);
    box-shadow: var(--box-shadow);
    transition: .2s linear;
}

.products .products-slider .box:hover {
    outline-offset: 0rem;
    outline: .2rem solid #130f40;
}

.products .products-slider .box img {
    height: 20rem;
}

.products .products-slider .box h3 {
    font-size: 2.5rem;
    color: #130f40;
}

.products .products-slider .box .price {
    font-size: 2rem;
    color: #666;
    padding: .5rem 0;
}

.products .products-slider .box .stars i {
    font-size: 1.7rem;
    color: #ff7800;
    padding: .5rem 0;
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
