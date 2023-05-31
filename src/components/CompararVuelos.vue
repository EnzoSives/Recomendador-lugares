<template>
  <div class="comparar-vuelos">
    <div class="vuelos-container">
      <h1>Comparar vuelos</h1>
      <form>
        <div class="form-group">
          <label for="inputVuelo1">Partida</label>
          <input type="text" class="form-control" id="inputVuelo1" placeholder="Indique un lugar de partida"
            v-model="destino1">
        </div>
        <div class="form-group">
          <label for="inputVuelo2">Destino</label>
          <input type="text" class="form-control" id="inputVuelo2" placeholder="Indique un lugar de partida"
            v-model="destino2">
        </div>
        <button type="button" class="btn btn-light botonComparar" @click="getVuelosAccesibles">Comparar vuelos</button>
        <div class="vuelos-container2">
          <h1>Vuelos recomendados</h1>
          <div class="form-group">
            <ul class="lista-vuelos">
              <li v-for="vuelo in vuelos" :key="vuelo.id">
                {{ vuelo.partida }} - {{ vuelo.destino }}: ${{ vuelo.precio }}
              </li>
            </ul>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
const vuelos = [
  {
    id: 1,
    partida: "New York",
    destino: "Los Angeles",
    precio: 2000,
    empresa:"FlyBondy"
  },
  {
    id: 2,
    partida: "Chicago",
    destino: "San Francisco",
    precio: 150,
    empresa:"FlyBondy"
    
  },
  {
    id: 3,
    partida: "Miami",
    destino: "Houston",
    precio: 2500,
    empresa:"FlyBondy"
  },
  {
    id: 4,
    partida: "New York",
    destino: "Los Angeles",
    precio: 200,
    empresa:"FlyBondy"

  },
  {
    id: 5,
    partida: "Chicago",
    destination: "San Francisco",
    price: 1500,
    empresa:"FlyBondy"
  },
  {
    id: 6,
    partida: "Miami",
    destino: "Houston",
    precio: 250,
    empresa:"FlyBondy"
  },
  {
    id: 7,
    partida: "New York",
    destino: "Los Angeles",
    price: 2000,
    empresa:"FlyBondy"
  },
  {
    id: 8,
    partida: "Chicago",
    destino: "San Francisco",
    precio: 150,
    empresa:"FlyBondy"
  },
  {
    id: 9,
    partida: "Miami",
    destino: "Houston",
    precio: 2506,
    empresa:"FlyBondy"
  },
  {
    id: 10,
    partida: "New York",
    destino: "Los Angeles",
    precio: 2000,
    empresa:"FlyBondy"
  },
  {
    id: 11,
    partida: "Chicago",
    destino: "San Francisco",
    precio: 1500,
    empresa:"FlyBondy"
  },
  {
    id: 12,
    partida: "Miami",
    destino: "Houston",
    precio: 2450,
    empresa:"QatarAirways"
  }
];

export default {
  name: 'CompararVuelos',
  data() {
    return {
      destino1: '',
      destino2: '',
      vuelos: '',
    };
  },
  methods: {
    getVuelosAccesibles() {
      // Filtrar los vuelos según los destinos ingresados
      const filtrovuelos = vuelos.filter((vuelos) => {
        return (vuelos.destino === this.destino1 || vuelos.destino === this.destino2);
      });

      // Ordenar los vuelos por precio
      const ordenarVuelos = filtrovuelos.sort((vueloA, vueloB) => vueloA.precio - vueloB.precio);

      // Retornar los vuelos ordenados
      this.vuelos = ordenarVuelos;
    }

  },
};
</script>

<style>
.botonComparar {
  margin-top: 10px;
}

.comparar-vuelos {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vuelos-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 10px;
}

.vuelos-container h1 {
  font-size: 36px;
  margin-bottom: 30px;
}

.lista-vuelos {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lista-vuelos li {
  border-bottom: 1px solid #ddd;
  padding: 5px;
}

.lista-vuelos li:last-child {
  border-bottom: none;
}
</style>
