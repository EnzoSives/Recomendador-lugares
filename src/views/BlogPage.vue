<template>
  <div>
    <h2>Blog</h2>
    <!-- Lista de publicaciones del blog -->
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.posteo }} - {{ post.nombre }}
      </li>
    </ul>

    <!-- Formulario para hacer consultas -->
    <div>
      <h3>Hacer una consulta</h3>
      <form @submit.prevent="submitQuery">
        <label for="query">Tu pregunta:</label>
        <textarea v-model="query" id="query" required></textarea>
        <button type="submit">Enviar Consulta</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [], // Aquí deberías cargar las publicaciones del blog desde tu backend
      query: '',
      userInfo: null, // Nuevo estado para almacenar la información del usuario
    };
  },
  mounted() {
    this.getPosts();
    this.getUserInfo(); // Llamada adicional para obtener información del usuario
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get('http://localhost:3000/blogs/all'); // Reemplaza con tu endpoint real
        this.posts = response.data;
      } catch (error) {
        console.error('Error al obtener publicaciones:', error);
      }
    },

    async getUserInfo() {
      const token = localStorage.getItem('access-token');

      if (token) {
        try {
          const response = await axios.get('/auth/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Almacena la información del usuario en el estado userInfo
          this.userInfo = response.data;
        } catch (error) {
          console.error('Error al obtener información de usuario:', error);
        }
      } else {
        console.error('No se encontró un token de acceso');
      }
    },

    async submitQuery() {
      const token = localStorage.getItem('access-token');

      if (token) {
        try {
          // Validación del token omitida, ya que parece que la obtienes en la función getUserInfo

          // Realiza la solicitud POST al backend con el parámetro 'posteo' y el token
          const postResponse = await axios.post('http://localhost:3000/blogs/crear', {
            posteo: this.query,
            nombre: this.userInfo.user.username,
            userId: this.userInfo.id, // Agrega el ID del usuario a la solicitud
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(this.userInfo)

          console.log('Consulta enviada con éxito:', postResponse.data);

          // Después de enviar la consulta, puedes hacer algo como limpiar el formulario
          this.query = '';
        } catch (error) {
          console.error('Error al enviar la consulta:', error);
        }
      } else {
        console.error('No se encontró un token de acceso');
      }
    },
  }
};
</script>
  
  <style scoped>
  /* Agrega estilos según tus necesidades */
  </style>
  