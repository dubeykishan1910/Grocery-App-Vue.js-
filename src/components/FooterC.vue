<template>
<section class="footer">
    <div class="box-container">

        <div class="box">
            <h3>groco<i class="fas fa-shopping-basket"></i></h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet fugit repudiandae veritatis.</p>
            <div class="share">

                <a :href="facebookURL" target="_blank" rel="noopener noreferrer" class="fab fa-facebook-f">
                </a>
                <a href="https://github.com/dubeykishan1910" class="fab fa-github" target="_blank"></a>
                <a href="https://twitter.com/KISHAND1910" class="fab fa-twitter" target="_blank"></a>
                <a href="https://www.instagram.com/" class="fab fa-instagram" target="_blank"></a>
                <a href="https://www.linkedin.com/in/kishan-dubey-4150131b7/" class="fab fa-linkedin" target="_blank"></a>
            </div>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#" class="links"> <i class="fas fa-phone"></i>+123-456-789</a>
            <a href="#" class="links"> <i class="fas fa-phone"></i>+111-222-333</a>
            <a href="#" class="links"> <i class="fas fa-envelope"></i>dubeykishan@gamil.com</a>
            <a href="#" class="links"> <i class="fas fa-map-marker-alt"></i>surat, india - 431136</a>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i>home</a>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i>features</a>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i>products</a>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i>categories</a>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i>review</a>
            <a href="#" class="links"> <i class="fas fa-arrow-right"></i>blogs</a>

        </div>

        <div class="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" class="email">
            <input type="submit" value="subscribe" class="btn">
            <!-- <img src="../assets/card.jpg" alt="img" class="payment-img"> -->

        </div>

    </div>

    <div class="credit">created by <span>kishan dubey</span> | all rights reserved</div>
</section>
</template>

  
<script>
export default {
    name: 'FooterC',
    data() {
        return {
            facebookURL: 'https://www.facebook.com/kishan.dubey.5059/',
        };
    },
};
</script>

<style scoped>
section {
    padding: 2rem 9%;
}

.footer {
    background: #fff;
}

.footer .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
    

}

.footer .box-container .box h3 {
    font-size: 2.5rem;
    color: #130f40;
    padding: 1rem 0;
}

.footer .box-container .box h3 i {
    color: #ff7800;
}

.footer .box-container .box a {
    display: block;
    font-size: 1.5rem;
    color: #666;
    padding: 1rem 0;
}

.footer .box-container .box .links i {
    color: #ff7800;
    padding-right: .5rem;
}

.footer .box-container .box .links:hover i {
    padding-left: 2rem;
}

.footer .box-container .box p {
    line-height: 1.8;
    font-size: 1.5rem;
    color: #666;
    padding: 1rem 0;
}

.footer .box-container .box .share a {
    height: 4rem;
    width: 4rem;
    line-height: 2rem;
    border-radius: .5rem;
    color: #130f40;
    margin-left: .2rem;
    background: #eee;
    text-align: center;
    display: inline-block;

}

.footer .box-container .box .share a:hover {
    background: #ff7800;
    color: #fff;
}

.footer .box-container .box .email {
    width: 80%;
    margin: .7rem 0;
    padding: 1rem;
    background: #eee;
    font-size: 1.6rem;
    color: #130f40;
    text-transform: none;
}

.footer .box-container .box .payment-img {
    margin-top: 2rem;
    /* height: 3rem; */
    
}

/* coper rights */
.footer .credit {
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    padding-top: 2.5rem;
    font-size: 2rem;
    color: #130f40;
    border-top: .2rem solid rgba(0,0,0,.1);
}

.footer .credit span {
    color: #ff7800;
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

    .footer .credit {
        text-align: center;
        margin-top: 2rem;
        padding: .5rem;
        padding-top: .5rem;
        font-size: 1rem;
        color: #130f40;
    }

    .footer .box-container {
      text-align: center;}

}
</style>
