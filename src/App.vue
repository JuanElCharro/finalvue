<template>
  <div>
    <Titulo />
    <div id="nav">
      <router-link to="/" class="seccion">Inicio</router-link>
      <router-link to="/clasificacion" class="seccion">Clasificación</router-link>
      <router-link to="/jornadas" class="seccion">Jornadas</router-link>
      <router-link id="nuevoPartido" to="/nuevopartido" class="seccion">Nuevo Partido</router-link>
      <router-link to="/equipos" class="seccion">Equipos</router-link>
      <router-link to="/jugadores" class="seccion">Jugadores</router-link>
      <router-link id="nuevoJugador" to="/nuevojugador" class="seccion">Nuevo Jugador</router-link>
      <router-link id="eliminarJugador" to="/eliminarjugador" class="seccion">Eliminar Jugador</router-link>
    </div>
    <div id="vistas">
      <router-view />
    </div>
  </div>
</template>

<script>
import Titulo from "./components/Titulo.vue";
export default {
  name: "Inicio",
  components: {
    Titulo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9b94d8;
}

#vistas {
  float: right;
  width: 80%;
  box-sizing: border-box;
  padding: 30px;
}

.seccion {
  display: block;
  padding: 50 0;
  text-align: left;
  padding-bottom: 1em;
}

#nav {
  float: left;
  width: 20%;
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 30px;
  padding-top: 150px;
  background-color: rgb(243, 150, 10);
  background-image: linear-gradient(0deg, rgb(243, 150, 10), white);
}

#nav a {
  font-weight: bold;
  color: #0d3e70;
}

#nav a.router-link-exact-active {
  color: #6a0094;
  font-size: 20px;
}

div{
  color: black;
}

#nuevoPartido{
  padding-left: 2em;
}

#nuevoJugador{
  padding-left: 2em;
}

#eliminarJugador{
  padding-left: 2em;
}

</style>
