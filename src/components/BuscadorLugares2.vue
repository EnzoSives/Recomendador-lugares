<template>
  <div class="search-form">
    <form @submit.prevent="search">
      <input
        class="search-input"
        type="text"
        v-model="searchQuery"
        placeholder="Elegí el lugar que más te guste..."
      />
      <span>O tambien buscar un lugar aleatorio solo seleccionando el boton de busqueda</span>
      <button type="submit" class="search-button">Buscar</button>
    </form>
  </div>

  <div class="resultados" v-if="searchResults.length > 0">
    <ul>
      <li v-for="result in searchResults" :key="result.id">
        <h2>{{ result.nombre }}</h2>
        <button type="button" class="search-button" @click="openModal(result)">
          Ver detalles
        </button>
      </li>
    </ul>
  </div>

  <transition name="modal" v-if="showModal">
  <div class="modal-overlay" @click.stop="closeModal">
    <div class="modal-container">
      
      <div class="modal-content">
        <h2>{{ selectedResult.nombre }}</h2>
        <button @click="closeModal" class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 432 432"><path fill="#ff5e00" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3zM320 293l-77-77l77-77l-30-30l-77 77l-76-77l-30 30l76 77l-76 77l30 30l76-77l77 77z"/></svg>
      </button>
        
        <!-- Carrusel de imágenes -->
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
          <div class="carousel-inner">
            <div v-for="(imageKey, index) in [1, 2, 3, 4]" :key="imageKey" :class="{ 'carousel-item': true, 'active': index === 0 }">
              <img
                :src="selectedResult['url_image' + imageKey]"
                class="d-block w-100"
                alt="Imagen del lugar"
              />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" @click.stop>
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" @click.stop>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
        <ul>
          <li>{{ selectedResult.descripcion }}</li>
        </ul>
   
      </div>
    </div>
  </div>
</transition>

</template>
  
  <script>
export default {
  data() {
    return {
      searchQuery: "",
      places: [],
      searchResults: [],
      showModal: false,
      selectedResult: null,
      // Array to store endpoint URLs
      endpoints: [
        "https://backend-paglugares.onrender.com/pais/all",
        "https://backend-paglugares.onrender.com/ciudad/all",
        "https://backend-paglugares.onrender.com/lugar/all",
      ],
    };
  },
  mounted() {
    this.loadPlaces();
  },
  methods: {
  async loadPlaces() {
    // Clear existing data
    this.places = [];
    
    // Fetch data from all endpoints
    for (const endpoint of this.endpoints) {
      await fetch(endpoint, {
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
          // Merge data from all endpoints
          this.places = [...this.places, ...data];
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    }
  },
  search() {
  if (this.searchQuery === "") {
    // Si el campo de búsqueda está vacío, selecciona un lugar aleatorio
    const randomIndex = Math.floor(Math.random() * this.places.length);
    this.searchResults = [this.places[randomIndex]];
  } else {
    // Si no, realiza la búsqueda como antes
    this.searchResults = this.places.filter((place) =>
      place.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
},
    openModal(result) {
      this.selectedResult = result;
      this.showModal = true;
    },
    closeModal() {
      this.selectedResult = null;
      this.showModal = false;
    },
  },
};
</script>
  
  <style scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 300px;
  border: 2px solid #8e8787;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(128, 123, 123, 0.7);
}
span{
  display: flex;
  align-content: center;
  text-align: center;
}
.transparent-form {
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #7e7e7e;
  background-color: rgba(128, 123, 123, 0.7);
  border-radius: 10px;
  font-size: 1.2em;
  color: #010101;
}
::placeholder {
  color: #010101;
}

.search-button {
  width: 100%;
  padding: 10px;
  border: 2px solid #151515;
  border-radius: 10px;
  background-color: #ff5e00;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
}

.search-button:hover {
  background-color: #010101;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 9999;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow-y:scroll;
  max-height: 90%;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
}
.modal-content img {
  width: 250px;
  height: 350px; 
  margin: 10px;
}

.modal-container h2,
.modal-container img,
.modal-container p,
.modal-container ul {
  margin: 0;
  padding: 20px;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  list-style-type: none;
  color: #020202;
}

.images-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
.modal-content {
  position: relative; /* Añade posición relativa para que el botón de cierre sea relativo a este contenedor */
}


</style>
  