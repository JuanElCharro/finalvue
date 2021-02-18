<template>
  <div id="encuadre">
    <div id="nuevoPartidoTitulo">NUEVO PARTIDO</div>

    <select v-model="equipoUnoSeleccionado" name="team1">
      <option v-for="(partidos, index) in listaPartidos" :key="index">
        {{ partidos.team1 }}
      </option>
    </select>

    <select v-model="equipoDosSeleccionado" name="team2">
      <option v-for="(partidos, index) in listaPartidos" :key="index">
        {{ partidos.team2 }}
      </option></select
    ><br />

    <input
      v-model="golesEquipoUno"
      type="number"
      id="golesA"
      name="golesA"
      min="0"
      max="100"
    />

    <input
      v-model="golesEquipoDos"
      type="number"
      id="golesB"
      name="golesB"
      min="0"
      max="100"
    />
    <br />

    <input
      v-model="fechaPartido"
      type="date"
      id="fechaPartido"
      name="fechaPartido"
    />
    <br />

    <input id="botonEnviar" type="submit" value="Enviar" />
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
select {
  background-color: DodgerBlue;
  border: 2px solid DodgerBlue;
  color: white;
  font-size: 15px;
  height: 35px;
  padding: 5px;
  width: 250px;
  margin: 1em;
}

input {
  margin: 1em;
}

#golesA {
  width: 3em;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid crimson;
}

#golesB {
  width: 3em;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid crimson;
}

#fechaPartido {
  font-size: 20px;
  border: 2px solid DodgerBlue;
  border-radius: 12px;
}

#encuadre {
  background-color: rgb(221, 221, 221);
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 30px;
}

p {
  padding-top: 2em;
}

#botonEnviar {
  margin: 2em;
  background: #0066a2;
  color: white;
  border-style: outset;
  border-color: #0066a2;
  height: 50px;
  width: 100px;
  font: bold 15px arial, sans-serif;
  text-shadow: none;
}

#nuevoPartidoTitulo {
  font-size: 20px;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #5e5757;
}
</style>