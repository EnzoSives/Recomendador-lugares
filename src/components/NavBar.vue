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
      <ul class="navbar-nav ms-auto me-0">
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/viajes">Lugares</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ayuda</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
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

a {
  color: #f55708;
}
.navbar-nav {
  justify-content: flex-end;
}
</style>
