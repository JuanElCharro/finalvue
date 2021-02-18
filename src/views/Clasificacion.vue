<template>
  <table>
    <colgroup>
      <col span="2" />
    </colgroup>
    <tr>
      <th>Clasificación</th>
      <th>Nombre</th>
      <th>País</th>
      <th>Puntos</th>
    </tr>
    <tr span v-for="(equipos, index) in listaEquipos" :key="index">
      <td>{{ index }}</td>
      <td v-on:click="check(equipos.name)">{{ equipos.name }}</td>
      <td>{{ equipos.country }}</td>
      <td>{{ equipos.points }}</td>
    </tr>
  </table>
  <MostrarJugadores />
  <div id="info">
    Haga click sobre el nombre del equipo para mostrar a los Jugadores.
  </div>
</template>

<script>
import axios from "axios";
import MostrarJugadores from "../components/MostrarJugadores.vue";
export default {
  components: { MostrarJugadores },
  data: () => ({
    listaEquipos: [],
    listaJugadores: [],
  }),
  created() {
    axios.get("http://localhost:3000/clubs").then((result) => {
      this.listaEquipos = result.data;
    }),
      axios.get("http://localhost:3000/players").then((result) => {
        this.listaJugadores = result.data;
      });
  },
  methods: {
    check(dato) {
      let datoEncontrado = false;
      for (let i = 0; i < listaJugadores.length; i++) {
        if (listaJugadores[i].team === dato.team) {
          datoEncontrado = true;
          break;
        }
      }
      return datoEncontrado;
    },
  },
};
</script>

<style>
p {
  font-size: 20px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
}

td,
th {
  border: 1px solid #5e5757;
  text-align: center;
  padding: 4px;
}

tr:nth-child(even) {
  background-color: rgb(255, 100, 100);
}

#info {
  padding-top: 1em;
  float: left;
}
</style>
