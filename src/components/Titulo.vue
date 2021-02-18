<template>
  <h1>{{ titulo }} <span class="creador">por {{ propietario }}</span></h1>
  
</template>

<script>
export default {
  name:"Titulo",
  data() {
    return {
      titulo: "La Liga de Fútbol",
      propietario: "Juan García Hernández"
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

.creador{
  font-style: normal;
  font-size: 20px;
}
</style>