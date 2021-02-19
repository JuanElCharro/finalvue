<template>
    <table>
      <colgroup>
        <col span="2" />
      </colgroup>
      <tr span v-for="(equipos, index) in listaEquipos" :key="index">
        <th>{{ equipos.name }}</th>
        <td v-for="(jugadores, index) in listaJugadores" :key="index">
          <span v-if="equipos.name == jugadores.team">{{ jugadores.name }} <button>Nuevo Jugador</button></span>
        </td>
      </tr>
    </table>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    listaEquipos: [],
    listaJugadores: [],
    equipox: 0,
  }),
  async created() {
    await axios.get("http://localhost:3000/clubs").then((result) => {
      this.listaEquipos = result.data;
    }),
      await axios.get("http://localhost:3000/players").then((result) => {
        this.listaJugadores = result.data;
      });
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}

button{
  background-color: yellowgreen;
  padding: 5px;
}

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

#boton{
  width: 10%;
}

th {
  width: 15%;
  background-color: rgb(255, 212, 72);
  border: 2px solid rgb(0, 0, 0);
}

tr:nth-child(even) {
  background-color: rgb(255, 236, 172);
}

#info {
  padding-top: 1em;
  float: left;
}

</style>