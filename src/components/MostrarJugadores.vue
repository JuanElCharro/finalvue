<template>
  <table id="tablaMostrarJugadoresVista">
    <colgroup>
      <col span="2" />
    </colgroup>
    <tr>
      <th>Jugadores</th>
    </tr>
    <tr v-for="(jugadores, index) in listaJugadores" :key="index">
      <td v-if="jugadores.team == nombreEquipo">{{ jugadores.name }}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    listaJugadores: [],
  }),
  created() {
    axios.get("http://localhost:3000/players").then((result) => {
      this.listaJugadores = result.data;
    });
  },
  props: ['nombreEquipo'],
};
</script>

<style scoped>
#tablaMostrarJugadoresVista {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #5e5757;
  text-align: center;
  padding: 4px;
}

th{
  background-color: rgb(60, 199, 106);
}

tr {
  background-color:white;
}
</style>