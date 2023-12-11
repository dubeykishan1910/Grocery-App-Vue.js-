<template>

    
<div class="global">
    <NavBar />
    <router-view />
</div>


</template>

<script>

import NavBar from "./components/NavBar.vue";



export default {

    name: 'App',
    components: {
    NavBar,
    
}
}
</script>

<style>
@import "./styles.css";
</style>
