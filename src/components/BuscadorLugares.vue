<template>
  <div>
    <div class="input-container">
      <input class="rounded-pill border-5 input-field" type="text" v-model="searchQuery"
        placeholder="Elegí el lugar que más te guste...">
      <button type="button" class="btn btn-secondary input-button" @click="search">Buscar</button>
    </div>
    <div class="resultados" v-if="searchResults.length > 0">
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          <h2>{{ result.lugar }}</h2>
          <button type="button" class="btn btn-info" @click="openModal(result)">Ver detalles</button>
        </li>
      </ul>
    </div>

    <transition name="modal" v-if="showModal">
      <div class="modal-overlay" @click="closeModal">
        <div class="modal-container">
          <div class="modal-content">
            <h2>{{ selectedResult.lugar }}</h2>
            <img v-for="imagen in selectedResult.imagenes" :src="imagen" :key="imagen" alt="Imagen del lugar">
            <p>{{ selectedResult.descripcion }}</p>
            <ul>
              <li v-for="atraccion in selectedResult.atracciones" :key="atraccion">{{ atraccion }}</li>
            </ul>
            <button type="button" class="btn btn-danger" @click="closeModal">Cerrar</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      places: [],
      searchResults: [],
      showModal: false,
      selectedResult: null
    };
  },
  mounted() {
    this.loadPlaces();
  },
  methods: {
    loadPlaces() {
      fetch('/places.json')
        .then(response => response.json())
        .then(data => {
          this.places = data.places;
        })
        .catch(error => {
          console.error('Error al cargar el archivo JSON:', error);
        });
    },
    search() {
      this.searchResults = this.places.filter(place =>
        place.lugar.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      if (this.searchResults.length === 0) {
        this.searchResults = [];
      }
    },
    openModal(result) {
      this.selectedResult = result;
      this.showModal = true;
    },
    closeModal() {
      this.selectedResult = null;
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.input-container {
  position: relative;
  display: inline-block;
  font-size: xx-large;
}

.input-field {
  padding: 5vw;
  height: 5vh;
  width: 80vw;
  max-width: 800px;
  border: 2px solid #151515;
  border-radius: 20px;
  opacity: 0.5;
}

::placeholder {
  color: rgb(4, 4, 4);
}


.input-button {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 1.4vw;
  border: none;
  background-color: #ccc;
  border-radius: 0 30px 30px 0;
  color: #121212;
  cursor: pointer;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
}

.modal-content img {
  width: 300px;
  height: 300px;
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
  color: #ccc ;
}
</style>
