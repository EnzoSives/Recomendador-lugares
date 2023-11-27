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
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Anterior</button>
        </li>
        <li v-if="startPage > 1">
          <span class="page-link">...</span>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li v-if="endPage < totalPages">
          <span class="page-link">...</span>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Siguiente</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NovedadesVuelos',
  data() {
    return {
      novedades: [],
      newsPerPage: 8,
      currentPage: 1,
     
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
    },
    totalPages() {
      return Math.ceil(this.novedades.length / this.newsPerPage);
    },
    visiblePages() {
      const totalVisiblePages = 5; // Ajusta este valor según tus necesidades
      const start = Math.max(1, this.currentPage - Math.floor(totalVisiblePages / 2));
      const end = Math.min(this.totalPages, start + totalVisiblePages - 1);

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
  
   
  },
  mounted() {
    this.fetchNews();
  },
  methods: {

    

    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
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

.nov-card-list{
  padding: 10px;
}
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

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .page-item {
    margin: 0 5px;
  }
</style>
