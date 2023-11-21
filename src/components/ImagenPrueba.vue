<template>
    <div>
      <img :src="fullImageUrl" alt="Imagen" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullImageUrl: 'http://localhost:3000/uploads/26093fc1bfebdad9eec4150d9a1c3bd1', // URL completa construida
      };
    },
  };
  </script>