
<template>
    <background-image :image-url="backgroundImageUrl">
    <comparar-vuelos/>
    </background-image>
    <titulo-pag title="Lugares Recomendados" />
    <cards-vuelos />
    <titulo-pag title="Lugares mas visitados" />
    
    <cards-lugares/>
    <br>


</template>

<script>
import TituloPag from '@/components/TituloPag.vue';
import CardsVuelos from '@/components/CardsVuelos.vue';
import CardsLugares from '@/components/CardsLugares.vue';
import CompararVuelos from '@/components/CompararVuelos.vue';

import BackgroundImage from '@/components/BackgroundImage.vue';

export default {
    name: 'ViajesPage',
    components:{
        TituloPag,
      CardsVuelos,
      CardsLugares,
      CompararVuelos,
      BackgroundImage
    },
    data() {
      return {
        backgroundImageUrl: 'https://mylittlepipedream.fr/wp-content/uploads/2019/10/IMG_4186-e1570362499110.jpg',
      };
    }
}

</script>

<style>

</style>
    
    