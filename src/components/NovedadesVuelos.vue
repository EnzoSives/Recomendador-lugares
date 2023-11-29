<template>
  <!-- <button @click="saveDataToJson">Guardar Datos en JSON</button> -->

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
            <button id="botonVerMas" @click="redirectToNews(novedad.url)" class="btn">Leer más</button>
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

    saveDataToJson() {
      // Guardar los datos en un archivo JSON
      const jsonData = JSON.stringify(this.novedades, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      // Crear un enlace de descarga y hacer clic en él
      const a = document.createElement('a');
      a.href = url;
      a.download = 'novedades.json';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },

    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    fetchNews() {
      // const apiKey = '6563c217ad8244a2aba61dbf1767ea0d';
      // const apiUrl = 'https://newsapi.org/v2/everything?' +
      //                'q=viajes&' +
      //                'language=es&' +
      //                'apiKey=' + apiKey;

      fetch('novedades.json')
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
  padding: 30px;
  
}
  .flight-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card {
    height: 100%;
    border: none;
    border-radius: 30px;
    box-shadow: none;
    background-color: darkgrey;
    display: flex;
    align-items: center;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  #botonVerMas{
    background-color: #ff6600;
    width: 50%;
    margin-top: 10px;
    padding: 5px 10px 5px 10px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 12px; /* Tamaño de fuente más pequeño */
  }
  #botonVerMAs:hover{
    color: #ff0000;
  }

  .pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-item {
  margin: 0 5px;
}

.page-link {
  background-color: #777879; /* Color de fondo del botón */
  color: #ffffff; /* Color del texto del botón */
  border: 1px solid #db5534; /* Borde del botón */
  padding: 5px 10px; /* Espaciado interno del botón */
  cursor: pointer;
  border-radius: 5px; /* Bordes redondeados */
}

.page-link:hover {
  background-color: #ff5e00; /* Color de fondo al pasar el ratón sobre el botón */
  border-color: #b95729;
  color: #cc2e2e; /* Cambia el color del borde al pasar el ratón sobre el botón */
}

.disabled .page-link {
  background-color: #bdc3c7; /* Color de fondo del botón deshabilitado */
  color: #7f8c8d; /* Color del texto del botón deshabilitado */
  border-color: #bdc3c7; /* Borde del botón deshabilitado */
  cursor: not-allowed;
}

.active .page-link {
  background-color: #cc2e2e; /* Color de fondo del botón activo */
  color: #ffffff; /* Color del texto del botón activo */
  border-color: #cc2e2e; /* Borde del botón activo */
}
</style>
