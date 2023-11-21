import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'

const app = createApp(App)

app.use(router)

app.config.globalProperties.apiURL = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor Nest.js
app.mount('#app')