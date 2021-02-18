import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio.vue";
import Clasificacion from "../views/Clasificacion.vue";
import Jornadas from "../views/Jornadas.vue";
import NuevoPartido from "../views/NuevoPartido.vue";
import Equipos from "../views/Equipos.vue";
import Jugadores from "../views/Jugadores.vue";
import NuevoJugador from "../views/NuevoJugador.vue";
import EliminarJugador from "../views/EliminarJugador.vue";

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/clasificacion',
    name: 'Clasificacion',
    component: Clasificacion
  },
  {
    path: '/clasificacion',
    name: 'Clasificacion',
    component: Clasificacion
  },
  {
    path: '/jornadas',
    name: 'Jornadas',
    component: Jornadas
  },
  {
    path: '/nuevopartido',
    name: 'NuevoPartido',
    component: NuevoPartido
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: Equipos
  },
  {
    path: '/jugadores',
    name: 'Jugadores',
    component: Jugadores
  },
  {
    path: '/nuevojugador',
    name: 'NuevoJugador',
    component: NuevoJugador
  },
  {
    path: '/eliminarJugador',
    name: 'EliminarJugador',
    component: EliminarJugador
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
