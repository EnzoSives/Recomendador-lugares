<template>
    <div class="pag-mantenimiento">
      <div>
        <p id="text">Esta página está en mantenimiento. Vuelve pronto.</p>
        <br>
        <br>
        <br>
        <br>
        <span class="loader"></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PagMantenimiento',
  };
  </script>
  
  <style scoped>
.pag-mantenimiento {
  background-image: url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* Ruta a tu imagen de fondo */
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Ajustar la posición del loader */
}

.centered-content {
  text-align: center;
}

.loader {
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #fff;
  position: absolute; /* Centrar solo el loader */
  top: 50%; /* Ajustar la posición verticalmente al 50% de la altura del contenedor */
  left: 50%; /* Ajustar la posición horizontalmente al 50% del ancho del contenedor */
  margin-top: -24px; /* Ajustar la mitad de la altura del loader como margen negativo */
  margin-left: -24px; /* Ajustar la mitad del ancho del loader como margen negativo */
}

.loader:before,
.loader:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  transform: rotateX(70deg);
  animation: 1s spin linear infinite;
}

.loader:after {
  color: #FF3D00;
  transform: rotateY(70deg);
  animation-delay: .4s;
}

@keyframes spin {
  0% {
    box-shadow: .2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: .2em .2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 .2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -.2em .2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -.2em -.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: .2em -.2em 0 0 currentcolor;
  }
}

#text {
  font-size: 24px;
  color: #fff; /* Color del texto */
  margin-top: 20px;
}
</style>
