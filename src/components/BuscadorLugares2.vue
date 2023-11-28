<template>
  <div class="search-form">
    <form @submit.prevent="search">
      <input
        class="search-input"
        type="text"
        v-model="searchQuery"
        placeholder="Elegí el lugar que más te guste..."
      />
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
    <div class="modal-overlay" @click="closeModal">
      <div class="modal-container">
        <div class="modal-content">
          <h2>{{ selectedResult.nombre }}</h2>
          <div class="images-container">
            <img
              v-for="imageKey in [1, 2, 3, 4]"
              :key="imageKey"
              :src="selectedResult['url_image' + imageKey]"
              alt="Imagen del lugar"
            />
          </div>
          <ul>
            <h5>{{ selectedResult.descripcion }}</h5>
          </ul>
          <button type="button" class="btn btn-danger" @click="closeModal">
            Cerrar
          </button>
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
      endpoints: [
        "http://localhost:3000/pais/all",
        "http://localhost:3000/ciudad/all",
        "http://localhost:3000/lugar/all",
      ],
    };
  },
  mounted() {
    this.loadPlaces();
  },
  methods: {
  async loadPlaces() {
    this.places = [];

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
  width: 500px;
  height: 300px;
  border: 2px solid #8e8787;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(128, 123, 123, 0.7);
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
  overflow-y: auto;
  max-height: 100%;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.modal-content img {
  width: 300px;
  height: 300px;
  margin: 10px;
}

.modal-container h2,
.modal-container img,
.modal-container p,
.modal-container ul {
  margin: 0;
  padding: 0;
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
</style>
  