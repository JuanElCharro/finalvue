<template>
  <div id="encuadre">
    <div id="nuevoJugadorTitulo">NUEVO JUGADOR</div>

    <div span v-for="(jugadores, index) in listaJugadores" :key="index">
      <span
        v-if="jugadores.id == listaJugadores.length"
        v-on:load="guardarId(jugadores.id)"
      ></span>
    </div>

    <label for="nombre">Nombre Jugador:</label>
    <input
      v-model="nombreJugador"
      type="text"
      id="nombre"
      name="nombre"
      min="0"
      max="100"
    />
    <br />

    <label for="equipo">Equipo Jugador:</label>
    <input
      v-model="equipoJugador"
      type="text"
      id="equipo"
      name="equipo"
      min="0"
      max="100"
    />
    <br />

    <label for="goles">Goles Jugador:</label>
    <input
      v-model="golesJugador"
      type="number"
      id="goles"
      name="goles"
      min="0"
      max="100"
    />
    <br />
    
    <button @click="guardarJugador()" id="botonEnviar">Enviar</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    listaJugadores: [],
    id: 0,
    nombreJugador: "",
    equipoJugador: "",
    golesJugador: 0,
  }),
  created() {
    axios.get("http://localhost:3000/players").then((result) => {
      this.listaJugadores = result.data;
    });
  },
  methods: {
    guardarJugador() {
      axios.post("http://localhost:3000/players", {
        id: parseInt(this.id, 10),
        name: this.nombreJugador,
        team: this.equipoJugador,
        scores: parseInt(this.golesJugador, 10),
      });
      alert("Jugador Introducido Correctamente");
    },
    guardarId(id) {
      this.id = id+1;
    },
  },
};
</script>

<style scoped>
input {
  margin: 1em;
}

input {
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid DodgerBlue;
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

#nuevoJugadorTitulo {
  font-size: 20px;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #5e5757;
}
</style>