<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  name:"Titulo",
  data() {
    return {
      titulo: "Periódico El Elemental"
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: blue;
  background-color: aliceblue;
  padding: 25px;
}
</style>