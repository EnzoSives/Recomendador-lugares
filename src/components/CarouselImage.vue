<template>
    <Carousel :itemsToShow="5.50" :wrapAround="true" :transition="500">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <img :src="slide.url" alt="">
          <strong>{{ slide.description }}</strong>
        </div>
      </Slide>
    </Carousel>
  </template>
  

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CarouselWithImages',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
        slides: [
        {
          url: 'https://i.pinimg.com/236x/97/80/e9/9780e92b04459068a3a784ba7e671b52.jpg',
          description: 'Suiza',
        },
        {
          url: 'https://i.pinimg.com/236x/78/5f/83/785f833e70b69aab847d079a019d6591.jpg',
          description: 'Grecia',
        },
        {
          url: 'https://i.pinimg.com/236x/f4/a3/a4/f4a3a4cd1963ebc7b3d70a4fa88100d3.jpg',
          description: 'Paris',
        },
        
      ],
    };
  },
})
</script>

<style scoped>

.carousel__image {
  margin: 10px; 
}
.carousel__slide {
  padding: 50px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>

  