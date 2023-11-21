<template>
    <div>
      <h2>{{ noticia.title }}</h2>
      <div class="image-container">
        <img :src="noticia.urlToImage" alt="Imagen de la noticia" class="article-image">
      </div>
      <p>{{ noticia.content }}</p>
      <a :href="noticia.url" target="_blank" rel="noopener noreferrer">Leer más</a>
      <router-link to="/"><button>Volver</button></router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        noticia: {}
      };
    },
    mounted() {
      // Recuperar la noticia completa usando el ID de la ruta
      const noticiaId = this.$route.params.id;
  
      // Ejemplo de solicitud fetch para obtener detalles de la noticia
      fetch(`https://newsapi.org/v2/everything?q=viajes&language=es&apiKey=6563c217ad8244a2aba61dbf1767ea0d`)
        .then(response => response.json())
        .then(data => {
          // Simulación: Obtener la noticia específica según el ID
          this.noticia = data.articles[noticiaId] || {};
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    text-align: center; /* Centro la imagen */
  }
  
  .article-image {
    max-width: 40%; /* La imagen no superará su tamaño original */
    height: auto; /* Se ajusta proporcionalmente al ancho */
    margin: 10px 0; /* Añade un poco de espacio por arriba y por abajo */
  }
  </style>
  