<template>
  <div>
    <div span v-for="(partidos, index) in listaPartidos" :key="index">
      <p>Temporada: {{ partidos.round }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    listaPartidos: [],
  }),
  created() {
    axios.get("http://localhost:3000/matches").then((result) => {
      this.listaPartidos = result.data;
    });
  },
};
</script>

<style scoped>
p {
  font-weight: bolder;
  color: brown;
}
</style>