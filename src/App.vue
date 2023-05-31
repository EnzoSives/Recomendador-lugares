<template>
  <div id="app">
    <navbar />
    <router-view />
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
  },
};
</script>

<style>

</style>
