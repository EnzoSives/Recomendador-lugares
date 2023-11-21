<template>
  <div>
    <h2>Continentes</h2>
    <div v-for="continente in continentes" :key="continente.id">
      <h2>{{ continente.nombre }}</h2>
      <!-- Agrega más campos y estilos según sea necesario -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      continentes: [],
    };
  },
  mounted() {
    const url = 'http://localhost:3000/continente/all';
    fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        this.continentes = data; // Asigna directamente la respuesta JSON a continentes
        console.log(this.continentes);
      })
      .catch(error => {
        console.error('Error al obtener los datos de los continentes:', error);
      });
  },
};
</script>
