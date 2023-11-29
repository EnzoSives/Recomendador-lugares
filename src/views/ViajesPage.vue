
<template>
    <background-image :image-url="backgroundImageUrl">
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

import BackgroundImage from '@/components/BackgroundImage.vue';

export default {
    name: 'ViajesPage',
    components:{
        TituloPag,
      CardsVuelos,
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

<style>

</style>
    
    