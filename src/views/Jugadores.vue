<template>
  <div id="jugadoresDeLaLigaTitulo">JUGADORES DE LA LIGA</div>
  <table>
    <colgroup>
      <col span="2" />
    </colgroup>
    <tr span v-for="(equipos, index) in listaEquipos" :key="index">
      <th>{{ equipos.name }}</th>
      <td></td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
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
    comprobarJugador(equipos, jugadores) {
      let datoEncontrado = false;
      for (let i = 0; i < jugadores.length; i++) {
        if (jugadores[i].team === equipos.team) {
          datoEncontrado = true;
          break;
        }
      }
      return datoEncontrado;
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #5e5757;
  text-align: center;
  padding: 4px;
  font-size: 14px;
}

th {
  width: 20%;
}

tr:nth-child(even) {
  background-color: rgb(146, 150, 201);
}

#info {
  padding-top: 1em;
  float: left;
}

#jugadoresDeLaLigaTitulo {
  font-size: 20px;
  padding-bottom: 2em;
  color: #5e5757;
}
</style>