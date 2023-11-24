<template>
  <div class="page-content">
    <div class="form-v9-content" style="background-image: url('src/assets/avion2.jpg')">
      <form class="form-detail" @submit.prevent="submitForm">
        <div class="router-links">
            <router-link to="/CargarLugar" class="custom-link-left"><h2>Agregar Ciudad</h2></router-link>
            <router-link to="/CargarCiudad" class="custom-link-right"><h2>Agregar Lugar</h2></router-link>
        </div>
        <div class="form-row-total">
          <div class="form-row">
            <label for="nombre">Nombre:</label>
            <input v-model="formData.nombre" type="text" name="nombre" id="nombre" class="input-text" placeholder="Your Name" required>
          </div>
          <div class="form-row">
            <label for="id_ciudad">ID Ciudad:</label>
            <input v-model="formData.id_ciudad" type="text" name="id_ciudad" id="id_ciudad" class="input-text" placeholder="Your City ID" required>
          </div>
          <div class="form-row-total">
          <div class="form-row">
            <label for="imagen1">Imagen 1:</label>
            <input
            type="file"
            @change="handleImageChange(1)"
            accept="image/*"
            ref="imagen1"
            class="input-file"
            />
          </div>
          </div>
        </div>
        <div class="form-row-total">
          <div class="form-row">
            <label for="descripcion">Descripción:</label>
            <textarea v-model="formData.descripcion" name="descripcion" id="descripcion" class="input-text" placeholder="Your Description" required></textarea>
          </div>
          <!-- Agrega más campos para las otras imágenes -->
        </div>
        <div class="form-row-last">
          <button type="submit" class="register">Crear Lugar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nombre: "",
        descripcion: "",
        id_ciudad: "",
        imagenes: [], // Puedes almacenar las imágenes aquí
      },
    };
  },
  methods: {
    handleImageChange(index) {
      const input = this.$refs[`imagen${index}`];
      if (input && input.files && input.files.length > 0) {
        this.formData.imagenes[index - 1] = input.files[0];
      }
    },

    async submitForm() {
      const formData = new FormData();
      formData.append("nombre", this.formData.nombre);
      formData.append("descripcion", this.formData.descripcion);
      formData.append("id_ciudad", this.formData.id_ciudad);
      // Añadir imágenes con el nombre 'imagenes'
      this.formData.imagenes.forEach((imagen) => {
        formData.append("imagenes", imagen);
      });

      try {
        const response = await fetch("http://localhost:3000/lugar/crear", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(
            `La solicitud falló con el código de estado ${response.status}`
          );
        }

        const data = await response.json();
        console.log("Datos guardados:", data);
        // Puedes realizar otras acciones después de guardar los datos
      } catch (error) {
        console.error("Error al guardar los datos:", error);
      }
    },
  },
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
	background: #4077c8;
	display: flex;
	display: -webkit-flex;
	justify-content: center;
	-o-justify-content: center;
	-ms-justify-content: center;
	-moz-justify-content: center;
	-webkit-justify-content: center;
	align-items: center;
	-o-align-items: center;
	-ms-align-items: center;
	-moz-align-items: center;
	-webkit-align-items: center;
}

.form-v9-content  {
	width: 975px;
	border-radius: 15px;
	-o-border-radius: 15px;
	-ms-border-radius: 15px;
	-moz-border-radius: 15px;
	-webkit-border-radius: 15px;
	margin: 0 0;
	font-family: 'Nunito', sans-serif;
	color: #fff;
	font-weight: 700;
	font-size: 16px;
	position: relative;
}

.form-v9-content .form-detail {
    padding: 30px 135px 30px 100px;
	position: relative;
}

.form-v9-content .form-detail h2 {
	font-size: 35px;
	text-align: center;
	position: relative;
	padding: 16px 0 13px;
	margin-bottom: 55px;
}

.form-v9-content .form-detail h2::after {
	background: #fff;
	width: 73px;
	height: 3px;
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	-o-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
}

.form-v9-content .form-row-total {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -o-justify-content: space-between;
    -ms-justify-content: space-between;
    -moz-justify-content: space-between;
    -webkit-justify-content: space-between;
}

.form-v9-content .form-row {
    width: 45%;
    margin-bottom: 45px; /* Alineación con los estilos de los input */
}

.form-v9-content .form-detail .form-row-last {
	text-align: center;
}

.form-v9-content .form-detail .input-text,
.form-v9-content .form-detail textarea { /* Añade estilos para textarea */
    width: 100%;
    padding: 14.5px 0px 14.5px 30px;
    border: 2px solid #ccc;
    appearance: unset;
    -moz-appearance: unset;
    -webkit-appearance: unset;
    -o-appearance: unset;
    -ms-appearance: unset;
    outline: none;
    -moz-outline: none;
    -webkit-outline: none;
    -o-outline: none;
    -ms-outline: none;
    border-radius: 27.5px;
	-o-border-radius: 27.5px;
	-ms-border-radius: 27.5px;
	-moz-border-radius: 27.5px;
	-webkit-border-radius: 27.5px;
	font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.2)
}

.form-v9-content .form-detail .input-text:focus,
.form-v9-content .form-detail textarea:focus { /* Añade estilos para textarea al enfocarse */
	border: 2px solid #999;
}

.form-v9-content .form-detail .register {
	background: #f25d5d;
	border-radius: 25px;
	-o-border-radius: 25px;
	-ms-border-radius: 25px;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	width: 180px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	-o-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	-ms-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	border: none;
	margin: 20px 0 73px 35px;
	cursor: pointer;
	font-family: 'Nunito', sans-serif;
	color: #fff;
	font-weight: 700;
	font-size: 16px;
}

.form-v9-content .form-detail .register:hover {
	background: #d95252;
}

.form-v9-content .form-detail .input-file {
  /* Estilos específicos para el input de tipo archivo */
  width: 100%;
  padding: 14.5px 0px 14.5px 30px;
  border: 2px solid #ccc;
  appearance: unset;
  -moz-appearance: unset;
  -webkit-appearance: unset;
  -o-appearance: unset;
  -ms-appearance: unset;
  outline: none;
  -moz-outline: none;
  -webkit-outline: none;
  -o-outline: none;
  -ms-outline: none;
  border-radius: 27.5px;
  -o-border-radius: 27.5px;
  -ms-border-radius: 27.5px;
  -moz-border-radius: 27.5px;
  -webkit-border-radius: 27.5px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
}

.form-v9-content .form-detail .input-file:focus {
  /* Estilos al enfocarse en el input de tipo archivo */
  border: 2px solid #999;
}


.form-v9-content .form-detail .form-row-last input {
	padding: 14px;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #e5e5e5;
  font-size: 16px;
}

input::-moz-placeholder,
textarea::-moz-placeholder { /* Firefox 19+ */
  color: #e5e5e5;
  font-size: 16px;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder { /* IE 10+ */
  color: #e5e5e5;
  font-size: 16px;
}

input:-moz-placeholder,
textarea:-moz-placeholder { /* Firefox 18- */
  color: #e5e5e5;
  font-size: 16px;
}

.router-links {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; /* Ajusta según sea necesario */
}

.custom-link-left {
  text-decoration: none;
  color: #fff; /* Cambia el color según tus preferencias */
}

.custom-link-right {
  text-decoration: none;
  color: #fff; /* Cambia el color según tus preferencias */
}

.custom-link-left:hover,
.custom-link-right:hover {
  text-decoration: underline;
}
</style>
