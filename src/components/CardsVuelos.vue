<template>
  <div class="vuelos-cards">
    <div class="row">
      <div v-for="vuelo in vuelos" :key="vuelo.flight_iata" class="col-md-3 mb-3">
        <div class="card h-30 my-card">
          <div class="card-body">
            <h5 class="card-title">{{ vuelo.flight_iata }}</h5>
            <p class="card-text">
              <strong>Partida:</strong> {{ vuelo.departure.airport }}<br>
              <strong>Destino:</strong> {{ vuelo.arrival.airport }}<br>
              <strong>Hora de partida:</strong> {{ vuelo.departure.estimated }}<br>
              <strong>Hora de llegada:</strong> {{ vuelo.arrival.estimated }}<br>
              <button type="button" class="btn btn-outline-success botonComprar">Comprar</button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-success bntVerMas">Ver Mas</button>
  </div>
</template>

<script>
export default {
  name: 'CardsVuelos',
  data() {
    return {
      vuelos: []
    };
  },
  mounted() {
    const apiKey = '0ef7e223b0ed779d2e6f935f91bc3274'; // Reemplaza con tu clave de API de AviationStack
    const apiUrl = 'http://api.aviationstack.com/v1/flights';

    const options = {
      method: 'GET',
      mode: "cors",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    };

    fetch(`${apiUrl}?access_key=${apiKey}`, options)
      .then(response => response.json())
      .then(data => {
        this.vuelos = data.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
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
.bntVerMas{
  display: flex;
  justify-content: center;
}


</style>
