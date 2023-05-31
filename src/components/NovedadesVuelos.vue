<template>
  <div class="nov-card-list">
    <div class="row">
      <div v-for="novedad in novedades" :key="novedad.novedad_number" class="col-md-3 mb-3">

        <div class="card h-30 my-card">
          <img :src="novedad.imagen" class="card-img-top flight-image" alt="Flight image">
          <div class="card-body">
            <h5 class="card-title">{{ novedad.novedad_number }}</h5>
            <p class="card-text">
              <strong>{{ novedad.titulo }}</strong><br>
                {{ novedad.novedad }}<br>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NovedadesVuelos',
  data() {
    return {
      novedades: [
        {
          titulo: "Temporada de sky",
          novedad: "Chapelco tendrá vuelos low-cost en las vacaciones de invierno: cuánto salen los pasajes",
          imagen: "https://www.cronista.com/files/image/520/520291/6425959ae504c_300_169!.webp?s=720b6b189140904462b3c58ca1b6556f&d=1680187702&oe=jpg"
        },
        {
          titulo: "PASAJES DE AVIÓN",
          novedad: "Vuelos de remate: últimos días para aprovechar un 50% de descuento en destinos locales e internacionales",
          imagen: "https://www.cronista.com/files/image/510/510318/63e25ffb82839_300_169!.webp?s=d258a3ce03e30f5812abec9f4d77296f&d=1675793068&oe=png"
        },
        {
          titulo: "VERANO 2023",
          novedad: "Vacaciones en Brasil: GOL vuelve a volar directamente a Florianópolis y San Pablo desde dos grandes ciudades argentinas",
          imagen: "https://www.cronista.com/files/image/416/416893/61ba0678ed13c_300_169!.webp?s=e49cec4c745f074060b93d5474bdc8f9&d=1669396428&oe=jpg"
        },
        {
          titulo: "JetSmart",
          novedad: "JetSmart negocia la compra de Viva Air",
          imagen: "https://media.ambito.com/p/2231d4f3521f3ba9b67507397f96844c/adjuntos/239/imagenes/040/482/0040482041/205x115/smart/jetsmart-avionesjpgjpg.jpg"
        },
        {
          titulo: "Vuelos",
          novedad: "EEUU: demoras y cancelaciones masivas en vuelos por una falla informática",
          imagen: "https://media.ambito.com/p/a67ce9117b560e679ee95728f3782921/adjuntos/239/imagenes/038/490/0038490854/american-airlinesjpg.jpg"
        },
        {
          titulo: "Flybondi",
          novedad: "Flybondi recibió su noveno avión y siguen expandiendo su flota",
          imagen: "https://media.ambito.com/p/73f5a5f6d77b7f4fbe7fbf071524bcec/adjuntos/239/imagenes/040/300/0040300094/205x115/smart/9no-avion-flybondijpeg.jpeg"
        },
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
