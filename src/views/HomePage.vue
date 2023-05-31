<template>
    <div id="app">
     
      <background-image :image-url="backgroundImageUrl">
        <comparar-vuelos/>
      </background-image>
      <titulo-pag title="Mejores lugares para vistar actualmente" />
      <carousel-image/>
      <titulo-pag title="Ultimos vuelos" />
      <cards-vuelos />
      <br>
      <titulo-pag title="Noticias" />
      <novedades-vuelos />
      <br>
     
    </div>
  </template>
  
  <script>
  
  import BackgroundImage from '@/components/BackgroundImage.vue';
  import CompararVuelos from '@/components/CompararVuelos.vue';
  import TituloPag from '@/components/TituloPag.vue';
  import CardsVuelos from '@/components/CardsVuelos.vue';
  import NovedadesVuelos from '@/components/NovedadesVuelos.vue';
  import CarouselImage from '@/components/CarouselImage.vue';
  
  export default{
    name: 'HomePage',
    components: {
     
      BackgroundImage,
      CompararVuelos,
      TituloPag,
      CardsVuelos,
      NovedadesVuelos,
      CarouselImage
      
    },
    data() {
      return {
        backgroundImageUrl: 'https://i0.wp.com/sinmordaza.com/wp-content/uploads/2021/10/vuelos-baratos-paginas-b.jpg?fit=1140%2C854&ssl=1',
      };
    },
    
  };
  </script>
  
  <style>
  
  </style>
  