<template>
  <div class="vuelos-cards">
    <div class="row">
      <div v-for="vuelo in vuelos" :key="vuelo.vuelo_numero" class="col-md-3 mb-3">

        <div class="card h-30 my-card">
          <img :src="vuelo.imagen" class="card-img-top flight-image" alt="Flight image">
          <div class="card-body">
            <h5 class="card-title">{{ vuelo.vuelo_numero}}</h5>
            <p class="card-text">
              <strong>Partida:</strong> {{ vuelo.partida }}<br>
              <strong>Destino:</strong> {{ vuelo.llegada }}<br>
              <strong>Hora de partida:</strong> {{ vuelo.horario_partida }}<br>
              <strong>Hora de llegada:</strong> {{ vuelo.horario_llegada }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardsVuelos',
  data() {
    return {
      vuelos: [
        {
          partida: "Buenos Aires",
          llegada: "Mendoza",
          horario_partida: "2023-04-15 14:30:00HS",
          horario_llegada: "2023-04-15 18:45:00HS",
          imagen: "https://i.pinimg.com/564x/d7/d0/4d/d7d04d901e515226a49c4eb2d855661c.jpg"
        },
        {
          partida: "Buenos Aires",
          llegada: "Misiones",
          horario_partida: "2023-04-20 10:15:00HS",
          horario_llegada: "2023-04-20 18:30:00HS",
          imagen: "https://i.pinimg.com/564x/c2/fd/0a/c2fd0a0203e90dc9a8c875c89cfecf2b.jpg"
        },
        {
          partida: "Buenos Aires",
          llegada: "Chubut",
          horario_partida: "2023-05-01 09:00:00HS",
          horario_llegada: "2023-05-01 14:45:00HS",
          imagen: "https://i.pinimg.com/564x/4e/ca/8e/4eca8e7814ee67710e1bdfe7ff28054e.jpg"
        },
        {
          partida: "Buenos Aires",
          llegada: "Brasilia",
          horario_partida: "2023-05-05 17:30:00HS",
          horario_llegada: "2023-05-06 00:15:00HS",
          imagen: "https://i.pinimg.com/564x/93/4c/3d/934c3d8cdb00b66092fac19ac1d295b2.jpg"
        },
        {
          partida: "Buenos Aires",
          llegada: "Miami",
          horario_partida: "2023-05-01 09:00:00HS",
          horario_llegada: "2023-05-01 14:45:00HS",
          imagen: "https://i.pinimg.com/564x/59/c4/4e/59c44e9922965d4332a6f3561a45ca9c.jpg"
        },
        {
          partida: "Buenos Aires",
          llegada: "Lima",
          horario_partida: "2023-05-05 17:30:00HS",
          horario_llegada: "2023-05-06 00:15:00HS",
          imagen: "https://i.pinimg.com/564x/cb/d2/b0/cbd2b0785b5c8ec7b3759fcc8f7ae429.jpg"
        }
        ,
        {
          partida: "Estambul",
          llegada: "Madrid",
          horario_partida: "2023-05-01 09:00:00HS",
          horario_llegada: "2023-05-01 14:45:00HS",
          imagen: "https://i.pinimg.com/564x/98/7c/8c/987c8cedb87986d62604c47bce5e3908.jpg"
        },
        {
          partida: "Miami",
          llegada: "Paris",
          horario_partida: "2023-05-05 17:30:00HS",
          horario_llegada: "2023-05-06 00:15:00HS",
          imagen: "https://i.pinimg.com/564x/ef/d4/ab/efd4ab1bbb56bf8840a354105e93b303.jpg"
        }
      ]

    };
  },
  /* mounted() {
     const options = {
       method: 'GET',
       headers: {
         'X-RapidAPI-Key': 'f491b2bf01mshf41208ff8254c6bp19708ejsn302625505859',
         'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
       }
     };
 
     fetch('https://flight-info-api.p.rapidapi.com/schedules?version=v1', options)
       .then(response => response.json())
       .then(data => {
         this.flights = data;
       })
       .catch(error => {
         console.error(error);
       });
   }*/
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


</style>
