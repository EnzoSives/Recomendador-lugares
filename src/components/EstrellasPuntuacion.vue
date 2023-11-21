<template>
    <div class="star-rating">
      <span v-for="n in maxStars" :key="n" class="star" :class="{ 'filled': n <= rating }">
        &#9733;
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rating: Number,  
      maxStars: {
        type: Number,
        default: 5,    
      },
    },
  };
  </script>
  
  <style scoped>
  .star-rating {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  
  .star {
    font-size: 20px;
    margin-right: 5px;
  }
  
  .filled {
    color: #ffcc00; 
}
  </style>
  