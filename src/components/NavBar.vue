<template>
<header class="header">
    <router-link to="/" class="logo"><i class="fas fa-shopping-basket"></i> EaseMart </router-link>

    <nav ref="navOpen" class="navbar" :class="{'active':ismenu}">
        <a class="nav-link" href="#home"><span><i class="fa-solid fa-home"></i></span><span>Home</span></a>
        <a class="nav-link" href="#features"><span><i class="fas fa-check"></i></span><span>Features</span></a>
        <a class="nav-link" href="#products"><span><i class="fas fa-cube"></i></span><span>Products</span></a>
        <a class="nav-link" href="#categories"><span><i class="fas fa-tags"></i></span><span>Categaories</span></a>
        <a class="nav-link" href="#review"><span><i class="fas fa-star-half-alt"></i></span><span>Review</span></a>
        <a class="nav-link" href="#blogs"><span><i class="fas fa-pencil-alt"></i></span><span>Blogs</span></a>
    </nav>

    <div class="icons">
        <div ref="m1" @click="menuOpen" class="fas fa-bars" id="menu-btn"></div>
        <div ref="m2" @click="toggleSearch" class="fas fa-search" id="search-btn"></div>
        <div ref="m3" @click="cardOpen" class="fas fa-shopping-cart" id="cart-btn"></div>
        <div ref="m4" @click="login" class="fas fa-user" id="login-btn"></div>
    </div>

    <form ref="searchOut" action="" class="search-form" :class="{'active':isSearchOpen}">
        <input type="search" id="search-box" placeholder="search here...">
        <label for="search-box" class="fas fa-search"></label>
    </form>

    <!-- calling data from local data.json -->
    <div ref="cardOut" class="shopping-cart" :class="{'active':isCardOpen}">
        <div class="box" v-for="card in cardsData" :key="card.id">
            <i class="fas fa-trash"></i>
            <img :src="require(`../assets/${card.image}`)" alt="img">
            <div class="content">

                <h3>{{ card.title }}</h3>
                <span class="price">{{ card.price }} /- </span>
                <span class="quantity">qty : {{ card.quantity }}</span>

            </div>
        </div>

        <div class="total"> total : ${{ this.total }}/- </div>

        <a href="#" class="btn">Buy</a>
    </div>

    <form ref="inOut" action="" class="login-form" :class="{'active':isLogin}">
        <h3>Login now</h3>
        <input type="email" placeholder="Your email" class="box">
        <input type="password" placeholder="Your password" class="box">
        <p>dont't have an account <a href="#">create now</a></p>
        <input type="submit" value="login now" class="btn">
    </form>

</header>
</template>

<script>
import axios from 'axios';

export default {

    name: 'NavBar',
    data() {
        return {
            isSearchOpen: false,
            isCardOpen: false,
            isLogin: false,
            ismenu: false,
            cardsData: [],
            total: 0
        };
    },

    components: {},

    computed: {

    },

    mounted() {
        document.addEventListener('click', this.handleClickOutside);
        // window.addEventListener('scroll', this.closeSidebarOnScroll);

        axios.get("http://localhost:3000/api1")
            .then(response => {
                this.cardsData = response.data;
                this.calculateTotal();
                // console.warn(this.cardsData)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
        // window.removeEventListener('scroll', this.closeSidebarOnScroll);
    },

    methods: {
        //   to calculate total at time fetch data only
        calculateTotal() {
            if (!this.cardsData || !this.cardsData) {
                return;
            }

            this.total = this.cardsData.reduce((acc, card) => {
                const price = parseFloat(card.price.replace(/[^0-9.-]+/g, ''));
                const quantity = parseInt(card.quantity.replace(/[^0-9]+/g, ''), 10);
                return acc + (price * quantity);
            }, 0).toFixed(2);
        },

        closeSidebar() {
            // if(this.show)
            this.isSearchOpen = false,
                this.isCardOpen = false,
                this.isLogin = false,
                this.ismenu = false
        },

        handleClickOutside(event) {
            const menu = this.$refs.navOpen;
            const button1 = this.$refs.m1;
            const button2 = this.$refs.m2;
            const button3 = this.$refs.m3;
            const button4 = this.$refs.m4;

            const elementsToCheck = [{
                    ref: menu,
                    state: 'ismenuOpen'
                },
                {
                    ref: button1,
                    state: 'ismenuOpen'
                },
                {
                    ref: button3,
                    state: 'isCardOpen'
                },
                {
                    ref: button2,
                    state: 'isSearchOpen'
                },
                {
                    ref: button4,
                    state: 'isLoginOpen'
                }
            ];

            elementsToCheck.forEach(({
                ref,
                state
            }) => {
                if (!(ref && ref.contains(event.target))) {
                    this[state] = false;
                }
            });
        },

        // after scroll close all the extra things close
        closeSidebarOnScroll() {
            this.closeSidebar();
        },

        menuOpen() {
            this.ismenu = !this.ismenu,
                this.isSearchOpen = false,
                this.isCardOpen = false,
                this.isLogin = false

        },

        // search bar open & close
        toggleSearch() {
            this.isSearchOpen = !this.isSearchOpen,
                this.isCardOpen = false,
                this.isLogin = false,
                this.ismenu = false
        },
        cardOpen() {
            this.isCardOpen = !this.isCardOpen,
                this.isSearchOpen = false,

                this.isLogin = false,
                this.ismenu = false
        },
        login() {
            this.isLogin = !this.isLogin,
                this.isSearchOpen = false,
                this.ismenu = false,
                this.isCardOpen = false
        },

    }
};
</script>

<style scoped>
/*=============== HEADER & NAV ===============*/
.icons {
    display: flex;
}

.btn {
    margin-top: 1rem;
    display: inline-block;
    padding: .8rem 3rem;
    font-size: 1.7rem;
    border-radius: .5rem;
    border: .2rem solid #130f40;
    color: #130f40;
    cursor: pointer;
    background: none;
}

.btn:hover {
    background-color: #ff7800;
    color: #fff;
}

.navbar {
    display: flex;
}

.navbar span {
    display: block;

}

.navbar span i {
    margin-left: 1.7rem;
}

.header {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 9%;
    background: #fff;
    box-shadow: var(--box-shadow);
}

.header .logo {
    font-size: 2.5rem;
    font-weight: bolder;
    color: black;
}

.header .logo i {
    color: var(--orange);
}

.header .navbar a {
    font-size: 1.7rem;
    margin: 0 1rem;
    color: var(--black);
}

.header .navbar a:hover {
    color: var(--orange);
}

.header .icons div {
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    border-radius: .5rem;
    background: #eee;
    color: var(--black);
    font-size: 2rem;
    margin-left: .3rem;
    text-align: center;
    cursor: pointer;
}

.header .icons div:hover {
    background-color: var(--orange);
    color: #fff;
}

#menu-btn {
    display: none;
}

/* search box */
.header .search-form {
    position: absolute;
    top: 110%;
    right: 2rem;
    /* right: -110rem; */
    width: 50rem;
    height: 5rem;
    background-color: #fff;
    border-radius: .5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    display: none;
}

/* dynamic class for search */
.header .search-form.active {
    display: block;
    right: 2rem;
    transition: .2s linear;
}

.header .search-form input {
    height: 100%;
    width: 100%;
    background: none;
    text-transform: none;
    font-size: 1.6rem;
    color: #130f40;
    padding: 0 1.5rem;
}

.header .search-form label {
    font-size: 2.2rem;
    padding-right: 1.5rem;
    color: #130f40;
    cursor: pointer;
}

.header .search-form label:hover {
    color: #ff7800;
}

/* card box */
.header .shopping-cart {
    position: absolute;
    top: 110%;
    right: 2rem;
    padding: 1rem;
    border-radius: .5rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    width: 35rem;
    background: #fff;
    display: none;

}

/* dynamic class for card */
.header .shopping-cart.active {
    display: block;
    right: 2rem;
    transition: .2s linear;
}

.header .shopping-cart .box {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    margin: 1rem 0;

    padding: 1rem;
}

.header .shopping-cart .box:hover {
    border: 1px solid #ff7800;
}

.header .shopping-cart .box img {
    height: 10rem;

}

.header .shopping-cart .box .fa-trash {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    right: 2rem;
    cursor: pointer;
    color: #666;
    transform: translateY(-50%);
}

.header .shopping-cart .box .fa-trash:hover {
    color: #ff7800;
}

.header .shopping-cart .box .content h3 {
    color: #130f40;
    font-size: 1.7rem;
    padding-bottom: 1rem;
}

.header .shopping-cart .box .content span {
    color: #666;
    font-size: 1.6rem;
}

.header .shopping-cart .box .content span {
    padding-left: 1rem;
}

.header .shopping-cart .total {
    font-size: 2.5rem;
    padding: 1rem 0;
    text-align: center;
    color: #130f40;
}

.header .shopping-cart .btn {
    display: block;
    text-align: center;
    margin: 1rem;
}

/* login form */
.header .login-form {
    position: absolute;
    top: 110%;
    right: 2rem;
    width: 30rem;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    text-align: center;
    display: none;
}

/* dynamic class for login */
.header .login-form.active {
    display: block;
    right: 2rem;
    transition: .2s linear;
}

.header .login-form h3 {
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #130f40;
}

.header .login-form .box {
    margin: .7rem 0;
    background: #eee;
    border-radius: .5rem;
    padding: 1rem;
    font-size: 1.6rem;
    color: #130f40;
    text-transform: none;
    width: 100%;
}

.header .login-form p {
    font-size: 1.4rem;
    padding: .5rem 0;
    color: #666;
}

.header .login-form p a {
    color: #ff7800;
    text-decoration: underline;
}

@media (max-width:991px) {
    html {
        font-size: 55%;
    }

    .header {
        padding: 2rem;
    }
}

@media (max-width:768px) {
    #menu-btn {
        display: inline-block;
    }

    .header .search-form {
        width: 90%;
    }

    .header .shopping-cart {
        width: 90%;
    }

    .header .navbar {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 110%;
        right: 2rem;
        width: 30rem;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
        border-radius: .5rem;
        background: #fff;
        display: none;
    }

    /* dynamic class for login */
    .header .navbar.active {
        display: block;
        right: 2rem;
        transition: .2s linear;
    }

    .header .navbar a {
        font-size: 2rem;
        margin: 2rem 2.5rem;
        display: block;
    }
}

@media (max-width:450px) {
    html {
        font-size: 50%;
    }

    .header {
        padding: 2rem;
    }

    .header .navbar {
        width: 90%;
    }
}

/* 
@media (max-width: 992px) {
    .navbar .links {
        display: none;
    }

    .navbar .toggle_btn {
        display: block;
    }

    .dropdown__menu {
        display: block;
    }

}

@media (max-width: 600px) {

    .dropdown__menu {
        left: 2rem;
        width: unset;
    }

    .dropdown__menu.open {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-inline: auto;

    }
} */
</style>
