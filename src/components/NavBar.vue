<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
   
    <a class="navbar-brand" href="#"> Recommendation Airways 
      <img src="@/assets/logoavion.png" width="30" height="30" class="d-inline-block align-top logoavion" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto me-0" >
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/home">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/viajes">Viajes</router-link></a>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <a class="nav-link" href="#"><router-link to="/ayuda">Lugares</router-link></a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#"><router-link to="/login">Ayuda</router-link></a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#"><router-link to="/login">Login</router-link></a>
        </li>
          <li class="nav-item" v-if="isAuthenticated">
              <a class="nav-link" href="javascript:void(0)" @click="handleClick">Logout</a>
            </li>
        </ul>
  
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import useAuth from '../composables/authUser';

export default {
  name: 'NavBar',
  methods: {
    handleClick() {
      const { logout } = useAuth();
      logout();
      this.$router.push('/');
    },
  },
  setup() {
    const { isAuthenticated } = useAuth();
    return {
      isAuthenticated,
    };
  },
};
</script>


<style scoped>
.navbar {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.logoavion{
  padding: 4px;
}
.navbar-nav {
  justify-content: flex-end;
}

.navbar-brand{
  color: #f55708; 
}
.navbar-nav a {
  color: #f55708; 
  text-decoration: none;
}
.navbar-nav a:hover {
  color: white; 
}
</style>
