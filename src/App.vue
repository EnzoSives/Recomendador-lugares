<template>
  <div id="app">
    <navbar />
    <router-view />
    <br>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';
import Footer from './components/FooterPage.vue'



export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  
  }
}

</script>

<style>
  body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0; 
}

#app {
  flex: 1; 
}


</style>
