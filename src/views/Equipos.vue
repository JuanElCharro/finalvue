<template>
  <div id="EquiposDeLaLigaTitulo">EQUIPOS DE LA LIGA</div>
  <table>
    <colgroup>
      <col span="2" />
    </colgroup>
    <tr span v-for="(equipos, index) in listaEquipos" :key="index">
      <th>{{ equipos.name }}</th>
      <td v-for="(jugadores, index) in listaJugadores" :key="index">
        {{ jugadores.name }}
      </td>
    </tr>

    <!-- 
    <tr span v-for="(jugadores, index) in listaJugadores" :key="index">
      <td v-if="comprobarJugador(equipos.name, jugadores.team) === true">
        {{ jugadores.name }}
      </td>
    </tr>
    -->
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
    computed: {
      listaJugadores: function () {
        if (comprobarJugador(equipos.name, jugadores.team) === true) {
          return true;
        }
      },
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 95%;
}

td,
th {
  border: 1px solid #5e5757;
  text-align: center;
  padding: 4px;
  font-size: 14px;
}

tr:nth-child(even) {
  background-color: rgb(255, 219, 100);
}

#info {
  padding-top: 1em;
  float: left;
}

#EquiposDeLaLigaTitulo {
  font-size: 20px;
  padding-bottom: 2em;
  color: #5e5757;
}
</style>