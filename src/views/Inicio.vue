<template>
  <div>
    <img
      src="https://img.pngio.com/download-logo-laliga-spain-football-svg-eps-png-psd-ai-vector-el-la-liga-logo-png-1158_1600.png"
      alt="La Liga"
    />
    <div span v-for="(partidos, index) in listaPartidos" :key="index">
      <p v-if="partidos.id == listaPartidos.length">Temporada: {{ partidos.round }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Inicio",
  data: () => ({
    listaPartidos: [],
    contador: 0,
  }),
  created() {
    axios.get("http://localhost:3000/matches").then((result) => {
      this.listaPartidos = result.data;
    });
  },
  methods: {
    contar(index) {
      this.contador = index;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 400px;
  max-height: 400px;
}

P {
  font-weight: bolder;
  color: brown;
}
</style>