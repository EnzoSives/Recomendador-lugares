<template>
    <div id="app">
     
      <background-image :image-url="backgroundImageUrl">
        <buscador-lugares-2/>
      </background-image>
      <titulo-pag class="promos" title="Promociones" />
      <carousel-image/>
      <br>
      <titulo-pag title="Noticias" />
      <novedades-vuelos />
      <br>
     
    </div>
  </template>
  
  <script>
  
  import BackgroundImage from '@/components/BackgroundImage.vue';
  import TituloPag from '@/components/TituloPag.vue';
  import NovedadesVuelos from '@/components/NovedadesVuelos.vue';
  import CarouselImage from '@/components/CarouselImage.vue';
  // import BuscadorLugares from '@/components/BuscadorLugares.vue';
  import BuscadorLugares2 from '@/components/BuscadorLugares2.vue';
  import useAuth from '@/composables/authUser';
  
  export default{
    name: 'HomePage',
    components: {
     
      BackgroundImage,
      TituloPag,
      NovedadesVuelos,
      CarouselImage,
      BuscadorLugares2,
      
    },
    setup() {
    const { isAuthenticated } = useAuth();
    return {
      isAuthenticated,
    };
  },
  async created() {
    const { validateToken } = useAuth();
    try {
      await validateToken();
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  },

    data() {
      return {
        backgroundImageUrl: 'https://i0.wp.com/sinmordaza.com/wp-content/uploads/2021/10/vuelos-baratos-paginas-b.jpg?fit=1140%2C854&ssl=1',
      };
      
    },
    
  };
  </script>
  
  <style>
  .promos{
    text-align: center;
    font-size: xx-large;
  }
  </style>
  