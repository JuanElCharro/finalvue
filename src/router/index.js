import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio.vue";
import AcercaDe from "../views/Clasificacion.vue";
import Articulos from "../views/Jornadas.vue";
import Articulo from "../views/Equipos.vue";

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
