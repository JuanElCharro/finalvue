<template>
    <div>Nuevo Partido</div>
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

<style></style>