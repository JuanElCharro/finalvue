<template>
  <div id="encuadre">
    <div id="eliminarJugadorTitulo">ELIMINAR JUGADOR</div>

    <select v-model="equipoSeleccionado" name="team">
      <option v-for="(equipos, index) in listaEquipos" v-on:click="guardar(equipos.name)" :key="index">
        {{ equipos.name }}
      </option>
    </select>

    <select v-model="jugadorSeleccionado" name="player">
      <option v-for="(jugadores, index) in listaJugadores" v-on:click="mostrarBoton()" :key="index">
        <span v-if="jugadores.team == nombreEqVar">{{ jugadores.name }}</span>
      </option>
    </select>

    <br />

    <button v-if="!isHidden" id="botonEnviar" value="Enviar">Enviar</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    isHidden: true,
    listaEquipos: [],
    listaJugadores: [],
    equipoSeleccionado: "",
    jugadorSeleccionado: "",
    nombreEqVar: "",
  }),
  created() {
    axios.get("http://localhost:3000/clubs").then((result) => {
      this.listaEquipos = result.data;
    }),
      axios.get("http://localhost:3000/players").then((result) => {
        this.listaJugadores = result.data;
      });
  },
  methods: {
    guardar(dato) {
      this.nombreEqVar = dato;
    },
    mostrarBoton() {
      this.isHidden = false;
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

#eliminarJugadorTitulo {
  font-size: 20px;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #5e5757;
}
</style>