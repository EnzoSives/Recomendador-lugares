<template>
    <div class="background-image" :style="{ 'background-image': 'url(' + imageUrl + ')' }">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackgroundImage',
    props: {
      imageUrl: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .background-image {
    position: relative;
    height: 500px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  