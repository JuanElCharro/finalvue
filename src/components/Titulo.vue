<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  name:"Titulo",
  data() {
    return {
      titulo: "La Liga de Fútbol"
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-style: italic;
  color: rgb(0, 0, 126);
  background-color: rgb(99, 0, 192);
  background-image: linear-gradient(-90deg, blueviolet, white);
  padding: 25px;
}
</style>