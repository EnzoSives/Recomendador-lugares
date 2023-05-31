
<template>
    <titulo-pag title="Lugares Recomendados" />
    <cards-vuelos />
    <br>

</template>

<script>
import TituloPag from '@/components/TituloPag.vue';
import CardsVuelos from '@/components/CardsVuelos.vue';


export default {
    name: 'ViajesPage',
    components:{
        TituloPag,
      CardsVuelos,
    }
}

</script>

<style>

</style>
    
    