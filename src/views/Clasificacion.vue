<template>
  <table>
    <colgroup>
      <col span="2" />
    </colgroup>
    <tr>
      <th>Puesto</th>
      <th>Nombre</th>
      <th>País</th>
      <th>Puntos</th>
      <th>Jugadores</th>
    </tr>
    <tr span v-for="(equipos, index) in listaEquipos" :key="index">
      <td>{{ index }}</td>
      <td>{{ equipos.name }}</td>
      <td>{{ equipos.country }}</td>
      <td>{{ equipos.points }}</td>
      <td>{{}}</td>
    </tr>
  </table>
  <div id="info">Haga click sobre el nombre del equipo para mostrar a los Jugadores</div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    listaEquipos: [],
  }),
  created() {
    axios.get("http://localhost:3000/clubs").then((result) => {
      this.listaEquipos = result.data;
    });
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
  width: 100%;
}

td, th {
  border: 1px solid #5e5757;
  text-align: center;
  padding: 4px;
}

tr:nth-child(even) {
  background-color: rgb(255, 100, 100);
}

th,
td {
  padding-left: 1em;
  padding-right: 1em;
}

#info{
    padding-top: 1em;
}
</style>
