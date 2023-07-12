
<template>
    <titulo-pag title="Buscar Vuelos" />
    <comparar-vuelos/>
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

export default {
    name: 'ViajesPage',
    components:{
        TituloPag,
      CardsVuelos,
      CardsLugares,
      CompararVuelos
    }
}

</script>

<style>

</style>
    
    