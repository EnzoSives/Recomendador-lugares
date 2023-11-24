<template>
  <div id="app">
    <navbar />
    <router-view v-if="isAuthenticated" />
    <FormLogin v-else ></FormLogin>
    <br>
    <Footer />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Navbar from './components/NavBar.vue';
import Footer from './components/FooterPage.vue'
import useAuth from './composables/authUser.js';
import FormLogin from './components/FormLogin.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    FormLogin
  },
  async created() {
    const { validateToken } = useAuth();
    try {
      await validateToken();
      console.log("Created app")
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  },
  setup() {
    const { validateToken, user, isAuthenticated } = useAuth(); 
    console.log("Setup app")
    onMounted(async () => {
      await validateToken();
    });

    return {
      user,
      isAuthenticated, 
    };
  },
};
</script>

<style>

</style>
