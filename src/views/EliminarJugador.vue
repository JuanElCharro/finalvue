<template>
  <div id="encuadre">
    <div id="eliminarJugadorTitulo">ELIMINAR JUGADOR</div>

    <select v-model="equipoSeleccionado" name="team">
      <option
        v-for="(equipos, index) in listaEquipos"
        v-on:click="guardar(equipos.name)"
        :key="index"
      >
        {{ equipos.name }}
      </option>
    </select>

    <select v-model="jugadorSeleccionado" name="player">
      <!-- Muestra en el desplegable solo los jugadores de ese equipo -->
      <option
        v-for="(jugadores, index) in listaJugadores"
        v-on:click="mostrarBoton(), guardarPuntuacion(jugadores.team, jugadores.scores, jugadores.id)"
        :key="index"
      >
        <span
          v-if="jugadores.team == nombreEqVar"
          v-on:click="guardarPuntuacion(jugadores.team, jugadores.scores, jugadores.id)"
          >{{ jugadores.name }}
        </span>
      </option>
    </select>

    <br />

    <button v-if="!isHidden == false" @click="borrarJugador()" id="botonEnviar" disabled>
      Enviar (disabled)
    </button>
    <button v-else-if="!isHidden == true" @click="borrarJugador()" id="botonEnviar">
      Enviar
    </button>
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
    puntuacion: 0,
    idJugador: 0,
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
    guardarPuntuacion(jugadoresEq, score, id) {
      if (jugadoresEq == this.nombreEqVar) {
        this.puntuacion = score;
        this.idJugador = id; 
      }
    },
    borrarJugador() {
      let idJ = parseInt(this.idJugador, 10);
      axios.delete("http://localhost:3000/players"+"/"+idJ, {
      });
      alert("Jugador Eliminado Correctamente");
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