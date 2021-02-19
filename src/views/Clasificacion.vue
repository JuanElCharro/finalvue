<template>
  <div id="divA">
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
      <td v-on:click="metodoClick(equipos.name)">{{ equipos.name }}</td>
      <td>{{ equipos.country }}</td>
      <td>{{ equipos.points }}</td>
    </tr>
  </table>
  </div>
  
  <div id="divB">
    <MostrarJugadores :nombreEquipo = "nombreEqVar"/>
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
    nombreEqVar: 0,
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
    metodoClick(dato) {
      this.nombreEqVar = dato;
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
  width: 100%;
}

#divA{
  width: 900px;
  float: left;
}

#divB{
  width: 150px;
  float: right;
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

#clasificacionDeLaLigaTitulo {
  font-size: 20px;
  padding-bottom: 2em;
  color: #5e5757;
}
</style>
