<template>
  <div class="nov-card-list">
    <div class="row">
      <div v-for="(novedad, index) in novedadesToShow" :key="index" class="col-md-3 mb-3">
       
          <div class="card h-30 my-card">
            <img :src="novedad.urlToImage" class="card-img-top flight-image" alt="Flight image">
            <div class="card-body">
              <h5 class="card-title">{{ novedad.title }}</h5>
              <p class="card-text">
                <strong>{{ novedad.source.name }}</strong><br>
                {{ novedad.description }}<br>
              </p>
            </div>
            <button id="botonVerMas" @click="redirectToNews(novedad.url)" class="btn btn-primary">Leer más</button>
          </div>
        
      </div>
    </div>
    <button v-if="showMoreButton" @click="loadMoreNews">Ver más</button>
  </div>
</template>

<script>
export default {
  name: 'NovedadesVuelos',
  data() {
    return {
      novedades: [],
      newsPerPage: 4,
      currentPage: 1
    };
  },
  computed: {
    novedadesToShow() {
      if (!this.novedades) {
        return [];
      }

      const startIndex = (this.currentPage - 1) * this.newsPerPage;
      const endIndex = startIndex + this.newsPerPage;
      return this.novedades.slice(startIndex, endIndex);
    },
    showMoreButton() {
      return this.novedades && this.novedades.length > this.newsPerPage * this.currentPage;
    }
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      const apiKey = '6563c217ad8244a2aba61dbf1767ea0d';
      const apiUrl = 'https://newsapi.org/v2/everything?' +
                     'q=viajes&' +
                     'language=es&' +
                     'apiKey=' + apiKey;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.novedades = data.articles || [];
        })
        .catch(error => {
          console.error(error);
        });
    },
    loadMoreNews() {
      this.currentPage++;
    },
    redirectToNews(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
  .flight-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card {
    height: 100%;
    border: none;
    border-radius: 2px;
    box-shadow: none;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }

  #botonVerMas{
    width: 50%;
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 12px; /* Tamaño de fuente más pequeño */
  }
</style>
