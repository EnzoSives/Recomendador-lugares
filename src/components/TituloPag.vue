<template>
  <h1 class="page-title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

  
<style>
@import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Bebas+Neue&family=Oswald:wght@500&display=swap');

.page-title {
  font-family: 'Agdasima', sans-serif;
  background: -webkit-linear-gradient(rgb(255, 251, 1), red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: rgb(255, 24, 8);
  font-size: 4rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  text-decoration:line-through;
  
}
</style>
  