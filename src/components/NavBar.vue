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
          <a class="nav-link" href="#"><router-link to="/">Inicio</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/viajes">Lugares</router-link></a>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <a class="nav-link" href="#"><router-link to="/ayuda">Agregar</router-link></a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#"><router-link to="/blog">Blog</router-link></a>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <a class="nav-link" href="#"><router-link to="/login"><svg class="login" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#ea580c" d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q1.325 0 2.5-.388t2.15-1.112q-.975-.725-2.15-1.113T12 17q-1.325 0-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20Zm0-9q.65 0 1.075-.425T13.5 9.5q0-.65-.425-1.075T12 8q-.65 0-1.075.425T10.5 9.5q0 .65.425 1.075T12 11Zm0-1.5Zm0 9Z"/></svg> Ingresar</router-link></a>
        </li>
          <li class="nav-item" v-if="isAuthenticated">
              <a class="nav-link" href="javascript:void(0)" @click="handleClick"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#ea580c" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22Zm7-6v-3h-8v-2h8V8l5 4l-5 4Z"/></svg></a>
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
