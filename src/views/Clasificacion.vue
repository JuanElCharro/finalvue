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
    </tr>
    <tr span v-for="(equipos, index) in listaEquipos" :key="index">
      <td>{{index}}</td>
      <td>{{equipos.name}}</td>
      <td>{{equipos.country}}</td>
      <td>{{equipos.points}}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
data: () =>({
    listaEquipos: []
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
  text-align: center;
  margin-left: 15%;
}

th,
td {
  padding-left: 1em;
}
</style>
