<template>
  <div class="lugares-cards">
    <div class="row">
      <div v-for="(place, index) in sortedPlaces" :key="index" class="col-md-3 mb-3">

        <div class="card h-30 my-card">
          <img :src="place.url_image1" class="card-img-top flight-image" alt="Flight image">
          <div class="card-body">
            <h5 class="card-title">{{ place.lugar }}</h5>
            <p class="card-text">
              {{ place.descripcion }}
            </p>
          </div>
          <EstrellasPuntuacionVue :rating="place.puntuacion" :maxStars="5"></EstrellasPuntuacionVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EstrellasPuntuacionVue from './EstrellasPuntuacion.vue';

export default {
  name: 'CardsLugares',
  components:{
    EstrellasPuntuacionVue
  },
  data(){
    return{
      places: [],
    }},
  
    computed: {
    sortedPlaces() {
      // Copia y ordena el arreglo de lugares por puntuación de mayor a menor
      return this.places.slice().sort((a, b) => b.puntuacion - a.puntuacion);
    },
  },
  mounted(){
    this.loadPlaces()
  },
  methods:{
    loadPlaces() {
      const url = "http://localhost:3000/pais/all";
      fetch(url, {
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
          this.places = data; 
          console.log(this.places);
        })
        .catch((error) => {
          console.error(
            "Error al obtener los datos de los continentes:",
            error
          );
        });
    },
  }};
</script>

<style scoped>
 .flight-image {
    width: 100%;
    height: 200px; 
    object-fit: cover;
  }

.card {
  height: 100%;
  border: none;
  border-radius: 2px;
  box-shadow: none;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}


</style>
