<template>
  <div class="page-content" v-if="isAuthenticated">
    <div
      class="form-v9-content">
      <form class="form-detail" @submit.prevent="submitForm">
        <div class="router-links">
          <router-link to="/CargarLugar" class="custom-link-left" :class="{ 'active-link': $route.path === '/CargarLugar' }">
            <h2 id="h2">Agregar Lugar</h2>
          </router-link>
          <router-link to="/CargarCiudad" class="custom-link-right" :class="{ 'active-link': $route.path === '/CargarCiudad' }">
            <h2>Agregar Ciudad</h2>
          </router-link>
        </div>
        <div class="form-row-total">
          <div class="form-row">
            <label for="nombre">Nombre:</label>
            <input
              v-model="formData.nombre"
              type="text"
              name="nombre"
              id="nombre"
              class="input-text"
              placeholder="Nombre del lugar"
              required
            />
          </div>
          <div class="form-row">
            <label for="id_ciudad">Ciudad:</label>
            <select
              v-model="formData.id_ciudad"
              name="id_ciudad"
              id="id_ciudad"
              class="input-text"
              required
            >
              <option  value="" disabled>Seleccione una ciudad</option>
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.nombre }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-row-total">
          <div class="form-row">
            <label for="descripcion">Descripción:</label>
            <textarea
              v-model="formData.descripcion"
              name="descripcion"
              id="descripcion"
              class="input-text"
              placeholder="Descripcion del lugar"
              required
            ></textarea>
          </div>
        </div>
          <div class="form-row-total">
            <div class="form-row">
              <label for="imagen1">Imagen 1:</label>
              <input
                type="file"
                @change="handleImageChange(1)"
                accept="image/*"
                ref="imagen1"
                class="form-control input-text "
              />
            </div>
          
        <div class="form-row">
          <label for="imagen2">Imagen 2:</label>
          <input
            type="file"
            @change="handleImageChange(2)"
            accept="image/*"
            ref="imagen2"
            class="form-control input-text"
          />
        </div>
      </div>
        <div class="form-row-total">
        <div class="form-row">
          <label for="imagen3">Imagen 3:</label>
          <input
            type="file"
            @change="handleImageChange(3)"
            accept="image/*"
            ref="imagen3"
            class="form-control input-text"
          />
        </div>
      
        <div class="form-row">
          <label for="imagen4">Imagen 4:</label>
          <input
            type="file"
            @change="handleImageChange(4)"
            accept="image/*"
            ref="imagen4"
            class="form-control input-text"
          />
        </div>
          </div>
        <div class="form-row-last">
          <button type="submit" class="register">Crear Lugar</button>
        </div>
      </form>
    </div>
  </div>
  <div v-if="alerta" class="position-fixed top-0 start-50 translate-middle-x">
      <div class="alert alert-dismissible" :class="'alert-' + alerta.tipo">
        <button type="button" class="btn-close" @click="alerta = null"></button>
        <div>
          <strong>{{ alerta.tipo === 'success' ? 'Éxito' : 'Error' }}:</strong> {{ alerta.mensaje }}
        </div>
      </div>
  </div>
  <div class="page-content" v-if="!isAuthenticated">
    Pagina no disponible
  </div>
</template>

<script>
import useAuth from '@/composables/authUser';

export default {
  data() {
    return {
      alerta: null,
      cities: [],
      formData: {
        nombre: "",
        descripcion: "",
        id_ciudad: "",
        imagenes: [], // Puedes almacenar las imágenes aquí
      },
    };
  },
  setup() {
    const { isAuthenticated } = useAuth();
    return {
      isAuthenticated,
    };
  },
  async created() {
    const { validateToken } = useAuth();
    try {
      await validateToken();
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  },
  mounted() {
    this.loadCitys();
  },
  methods: {
    handleImageChange(index) {
      const input = this.$refs[`imagen${index}`];
      if (input && input.files && input.files.length > 0) {
        this.formData.imagenes[index - 1] = input.files[0];
      }
    },

    async loadCitys() {
      const url = "http://localhost:3000/ciudad/all";
      await fetch(url, {
        method: "GET",
        mode: "cors",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La respuesta no fue exitosa");
          }
          return response.json();
        })
        .then((data) => {
          this.cities = data;
          console.log(this.cities);
        })
        .catch((error) => {
          console.error(
            "Error al obtener los datos de los continentes:",
            error
          );
        });
    },

    async submitForm() {
  try {
    const formData = new FormData();
    formData.append("nombre", this.formData.nombre);
    formData.append("descripcion", this.formData.descripcion);
    formData.append("id_ciudad", this.formData.id_ciudad);

    // Añadir hasta cuatro imágenes con el nombre 'imagenes'
    for (let i = 0; i < 4; i++) {
      const imagen = this.formData.imagenes[i];
      if (imagen) {
        formData.append("imagenes", imagen);
      }
    }

    const response = await fetch("http://localhost:3000/lugar/crear", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`La solicitud falló con el código de estado ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos guardados:", data);

    // Restablecer los campos del formulario
    this.formData.nombre = "";
    this.formData.descripcion = "";
    this.formData.id_ciudad = "";
    this.formData.imagenes = [];

    // Limpiar campos de archivo (input de tipo file)
    for (let i = 1; i <= 4; i++) {
      this.$refs[`imagen${i}`].value = null;
    }

    // Mostrar alerta de éxito
    this.alerta = {
      tipo: "success",
      mensaje: "¡Lugar creado exitosamente!",
    };

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      this.alerta = null;
    }, 2000);

  } catch (error) {
    console.error("Error al guardar los datos:", error);

    // Mostrar alerta de error
    this.alerta = {
      tipo: "danger",
      mensaje: "Error al guardar los datos. Inténtelo de nuevo.",
    };

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      this.alerta = null;
    }, 3000);
  }
},

  }
};
</script>

<style scoped>
/* Estilos específicos del componente, si es necesario */
body {
  margin: 0;
}

.page-content {
  width: 100%;
  margin: 0 auto;
  background: #49515c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-v9-content {
  background-image: url('../assets/avion3.jpg');
  background-size: cover; /* Agregar esta línea para el efecto de cover */
  background-position: center;
  width: 1200px;
  height: 780px;
  border-radius: 15px;
  margin: 10px;
  margin-bottom: 40px;
  font-family: "Nunito", sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  position: relative;
}

.form-v9-content .form-detail {
  padding: 30px 100px 30px 100px;
  position: relative;
}

.form-v9-content .form-detail h2 {
  font-size: 35px;
  text-align: center;
  position: relative;
  padding: 16px 0 13px;
  margin-bottom: 55px;
  text-decoration: none;
}

.form-v9-content .form-detail #h2::after {
  background: #ff6600;
  width: 150px;
  height: 3px;
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.form-v9-content .form-row-total {
  display: flex;
  justify-content: space-between;
}

.form-v9-content .form-row {
  width: 45%;
  margin-bottom: 45px;
}

.form-v9-content .form-detail .form-row-last {
  text-align: center;
}

.form-v9-content .form-detail .input-text,
.form-v9-content .form-detail textarea {
  width: 100%;
  padding: 14.5px 0px 14.5px 30px;
  border: 2px solid #ccc;
  border-radius: 27.5px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
}

.form-v9-content .form-detail .input-text:focus,
.form-v9-content .form-detail textarea:focus {
  border: 2px solid #999;
}

.form-v9-content .form-detail .register {
  width: 30%;
  border: 2px solid #151515;
  border-radius: 10px;
  background-color: #ff5e00;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
}

.form-v9-content .form-detail .register:hover {
  background: #ff5e00;
}

.form-v9-content .form-detail .input-file {
  width: 100%;
  padding: 14.5px 0px 14.5px 30px;
  border: 2px solid #ccc;
  border-radius: 27.5px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
}

.form-v9-content .form-detail .input-file:focus {
  border: 2px solid #999;
}

.form-v9-content .form-detail .form-row-last input {
  padding: 14px;
}

.form-v9-content .form-detail select {
  width: 100%;
  padding: 14.5px 0px 14.5px 30px;
  border: 2px solid #ccc;
  border-radius: 27.5px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
}

.form-v9-content .form-detail select:focus {
  border: 2px solid #999;
}

.form-v9-content .form-detail select option {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}


input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #e5e5e5;
  font-size: 16px;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #e5e5e5;
  font-size: 16px;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #e5e5e5;
  font-size: 16px;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #e5e5e5;
  font-size: 16px;
}

.router-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  text-decoration: none;
}

.custom-link-left,
.custom-link-right {
  text-decoration: none;
  color: #fff;
}

.custom-link-left:hover,
.custom-link-right:hover {
  text-decoration: none;
}

.position-fixed {
  position: fixed;
  width: 100%;
  z-index: 1000; /* Asegura que esté en la parte superior de otros elementos */
}

.top-0 {
  top: 0;
}

.start-50 {
  left: 50%;
}

.translate-middle-x {
  transform: translateX(-50%);
}

.router-links .active-link {
  color: #ff6600;/* Cambia el color a tu preferencia */
}

/* Estilo para los botones dentro de los elementos input de tipo file */
input[type="file"]::-webkit-file-upload-button {
  
  border: 2px solid #151515;
  border-radius: 10px;
  background-color: #ff5e00;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
}

input[type="file"]::-ms-browse {
  background: #ff5e00;
  color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

/* Agregar estilos adicionales según sea necesario */

</style>