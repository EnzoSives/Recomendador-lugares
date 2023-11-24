import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ViajesPage from '@/views/ViajesPage.vue'
import UsuariosPage from '@/views/UsuariosPage.vue'
import AyudaPage from '@/views/AyudaPage.vue'
import PagLogin from '@/views/PagLogin.vue'
import NoticiaDetalles from '@/components/NoticiaDetalles.vue'
import FormCargarDatos from '@/components/FormCargarDatos.vue'
import FormCargarDatos2 from '@/components/FormCargarDatos2.vue'
import '../axios'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/viajes',
      name: 'viajes',
      component: ViajesPage
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UsuariosPage
    },
    {
      path: '/ayuda',
      name: 'ayuda',
      component: AyudaPage
    },
    {
      path: '/login',
      name: 'login',
      component: PagLogin
    },
    {
      path: '/noticia/:id',
      name: 'noticia',
      component: NoticiaDetalles
    },
    {
      path: '/CargarCiudad',
      name: 'CargarCiudad',
      component: FormCargarDatos2
    },
    {
      path: '/CargarLugar',
      name: 'CargarLugar',
      component: FormCargarDatos
    }
  ]
})

export default router
