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

    <button @click="persist" id="botonEnviar">Enviar</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    listaPartidos: [],
    team1: "",
    team2: "",
    golesEquipoUno: 0,
    golesEquipoDos: 0,
    fechaPartido: "",
  }),
  created() {
    axios.get("http://localhost:3000/matches").then((result) => {
      this.listaPartidos = result.data;
    },/*
    axios.post("http://localhost:3000/matches", post).then((result) => {
    console.log(result);
     })*/
    );
  },
  mounted() {
    if (localStorage.team1) {
      this.team1 = localStorage.team1;
    }
    if (localStorage.team2) {
      this.team2 = localStorage.team2;
    }
    if (localStorage.golesEquipoUno) {
      this.golesEquipoUno = localStorage.golesEquipoUno;
    }
    if (localStorage.golesEquipoDos) {
      this.golesEquipoDos = localStorage.golesEquipoDos;
    }
  },
  methods: {
    persist() {
      localStorage.name = this.team1;
      localStorage.age = this.team2;
      localStorage.age = this.golesEquipoUno;
      localStorage.age = this.golesEquipoDos;
    },
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