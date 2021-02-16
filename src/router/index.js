import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio.vue";
import AcercaDe from "../views/AcercaDe.vue";
import Articulos from "../views/Articulos.vue";
import Articulo from "../views/Articulo.vue";

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/acercaDe',
    name: 'AcercaDe',
    component: AcercaDe
  },
  {
    path: '/articulos',
    name: 'Articulos',
    component: Articulos
  },
  {
    path: '/articulos/:id',
    name: 'Articulo',
    component: Articulo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
