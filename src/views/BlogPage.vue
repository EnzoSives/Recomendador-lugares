<template>
    <background-image class="background-image" :image-url="backgroundImageUrl"></background-image>
    <div>
      <!-- Formulario para hacer consultas -->
      <div class="query-card" style="max-width: 400px; margin: 10px; z-index: 1;">
  <div class="card-body">
    <div class="query-form">
      <form @submit.prevent="submitQuery" class="form">
        <h3 style="text-align: center;">Hacer una consulta</h3>
        
        <div class="form-group">
          <label for="query" class="form-label">Tu pregunta:</label>
          <textarea v-model="query" id="query" class="form-control" style="height: 100px;" required></textarea>
        </div>
        
        <!-- Nuevo campo de carga de imágenes -->
        <div class="form-group">
          <label for="imagen" class="form-label">Cargar Imagen:</label>
          <input type="file" id="imagen" @change="handleImageChange" accept="image/*" class="form-control-file">
        </div>
        
        <button type="submit" class="btn btn-primary btn-block">Enviar Consulta</button>
      </form>
    </div>
  </div>
</div>



      <h2>Posteos</h2>
      <!-- Lista de publicaciones del blog -->
      <div class="card-container" style="display: flex; flex-wrap: wrap; justify-content: center;">
  <div v-for="post in posts" :key="post.id" class="card" style="width: 18rem; height: 18rem; margin: 5px;">
    <!-- Muestra la imagen si existe -->
    <img v-if="post.url_imagen" :src="post.url_imagen" class="card-img-top" alt="Imagen del post">
    <div class="card-body">
      <h5 class="card-title">{{ post.nombre }} dice:</h5>
      <p class="card-text">{{ post.posteo }}</p>
    </div>
  </div>
</div>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router/Router';
  import BackgroundImage from '@/components/BackgroundImage.vue';
  export default {
    components:{
        BackgroundImage
    },
    data() {
      return {
        backgroundImageUrl: 'https://images.alphacoders.com/132/1323336.jpeg',
        posts: [], // Aquí deberías cargar las publicaciones del blog desde tu backend
        query: '',
        imagen: null, // Nuevo estado para almacenar la imagen
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
  
      handleImageChange(event) {
        // Almacena el archivo de imagen seleccionado en el estado 'imagen'
        this.imagen = event.target.files[0];
      },
  
      async submitQuery() {
        const token = localStorage.getItem('access-token');
  
        if (token) {
          try {
            // Realiza la solicitud POST al backend con el parámetro 'posteo', 'imagen' y el token
            const formData = new FormData();
            formData.append('posteo', this.query);
            formData.append('nombre', this.userInfo.user.username);
            formData.append('userId', this.userInfo.id);
            formData.append('imagen', this.imagen);
  
            const postResponse = await axios.post('http://localhost:3000/blogs/crear', formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            });
  
            console.log('Consulta enviada con éxito:', postResponse.data);
  
            // Después de enviar la consulta, puedes hacer algo como limpiar el formulario y el estado de la imagen
            this.query = '';
            this.imagen = null;
            router.go()
          } catch (error) {
            console.error('Error al enviar la consulta:', error);
          }
        } else {
          console.error('No se encontró un token de acceso');
        }
      },
    },
  };
  </script>
  
  
  <style scoped>

.query-card {
  position: relative; /* Necesario para que z-index funcione */
}

.background-image {
  position: absolute;
  top: 10;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 0; /* z-index menor para que esté detrás de la tarjeta */
}


.query-form {
  width: 30;
  margin: auto;
}

.form {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-control-file {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
  .card-container {
    display: flex;
  }
  
  .card {
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
 
  }
  
  .card-content {
    text-align: left;
  }
  .card-img-top{
    width: 100%;
    height: 50%;
  }
/*   
  .query-form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    
  }
  
  .form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .form-label {
    margin-bottom: 5px;
  }
  
  .form-textarea {
    width: 50%;
    height: 80px;
    margin-bottom: 10px;
    resize: vertical;
  }
  
  .form-button {
    width: 50%;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    border: none;
    border-radius: 5px;
  } */
  </style>