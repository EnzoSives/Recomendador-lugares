<template>
  <div class="vuelos-cards">
    <div class="row">
      <div v-for="offer in flightOffers" :key="offer.token" class="col-md-3 mb-3">
        <div class="card h-30 my-card">
          <div class="card-body">
            <h5 class="card-title">Detalles del Vuelo</h5>
            <p class="card-text">
              <strong>Salida:</strong> {{ offer.segments[0].departureAirport }}<br>
              <strong>Llegada:</strong> {{ offer.segments[0].arrivalAirport }}<br>
              <strong>Hora de salida:</strong> {{ offer.segments[0].departureTime }}<br>
              <strong>Hora de llegada:</strong> {{ offer.segments[0].arrivalTime }}<br>
              <strong>Duración:</strong> {{ offer.segments[0].legs.totalTime / 60 }} horas<br>
              <strong>Precio:</strong> {{ offer.priceBreakdown.travellerPrices[0].priceDisplay }}<br>
              <button type="button" class="btn btn-outline-success botonComprar">Comprar</button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-success bntVerMas" @click="cargarFlightOffers">Ver Más</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CardsFlightOffers',
  data() {
    return {
      flightOffers: []
    };
  },
  methods: {
    async cargarFlightOffers() {
      const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
        params: {
          fromId: 'BOM.AIRPORT',
          toId: 'DEL.AIRPORT',
          departDate: '2023-11-30',
          pageNo: '1',
          adults: '1',
          children: '0,17',
          currency_code: 'AED'
        },
        headers: {
          'X-RapidAPI-Key': 'f491b2bf01mshf41208ff8254c6bp19708ejsn302625505859',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        // Asegúrate de ajustar la propiedad utilizada para this.flightOffers según la estructura real de la respuesta
        this.flightOffers = response.data.flightOffers || [];
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    // Puedes cargar ofertas de vuelos al montar el componente si lo deseas
    this.cargarFlightOffers();
  }
};
</script>

<style scoped>
  .airline-logo {
    width: 100px; 
    height: auto;
    margin-bottom: 10px;
  }
  /* Tu estilo aquí */
</style>
