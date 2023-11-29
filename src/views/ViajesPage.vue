
<template>
  <div class="background-image-container">
    <background-image class="portada" :image-url="backgroundImageUrl">
      <!-- Contenido adicional si es necesario -->
    </background-image>
    <titulo-pag title="Lugares Recomendados" class="titulo" />
  </div>
    
    <cards-lugares/>
    <br>
</template>

<script>
import TituloPag from '@/components/TituloPag.vue';

import CardsLugares from '@/components/CardsLugares.vue';

import BackgroundImage from '@/components/BackgroundImage.vue';

export default {
    name: 'ViajesPage',
    components:{
        TituloPag,
     
      CardsLugares,
      BackgroundImage
    },
    data() {
      return {
        backgroundImageUrl: 'https://images2.alphacoders.com/134/1341834.jpeg',
      };
    }
}

</script>

<style scoped>
.background-image-container {
  position: relative;
  height: 400px;
}

.titulo {
  position: absolute;
  top: 50%; /* Ajusta según sea necesario para centrar verticalmente */
  left: 10px; /* Ajusta según sea necesario para la distancia desde el borde derecho */
  transform: translateY(-200%); /* Centra verticalmente el título */
  z-index: 1;
  color: #fff; /* Ajusta según sea necesario para el color del texto */
  /* Otros estilos según sea necesario */
}

</style>
    
    