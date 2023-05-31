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
  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  </style>
  