<template>
  <div id="jugadoresDeLaLigaTitulo">JUGADORES DE LA LIGA</div>
  <table>
    <colgroup>
      <col span="2" />
    </colgroup>
    <tr span v-for="(equipos, index) in listaEquipos" :key="index">
      <th v-on:click="metodoClick(equipos.name)">{{ equipos.name }}</th>
      <div v-for="(jugadores, index) in listaJugadores" :key="index">
        <p v-if="equipos.name == jugadores.team">
          <span
            v-if="equipos.name == nombreEqVar"
            v-on:click="mostrarInfo(jugadores.id, jugadores.scores)"
            >{{ jugadores.name }}
            <span
              id="spanJugador"
              v-if="jugadores.id == id && jugadores.scores == scores"
              >- [ ID Jugador: {{ jugadores.id }} ] [ Goles Jugador:
              {{ jugadores.scores }} ]
            </span>
            <input
              v-if="!isHidden"
              v-model="golesASumar"
              type="number"
              id="golesASumar"
              name="golesASumar"
              min="0"
              max="100"
            />

            <button
              v-if="!isHidden"
              @click="
                sumarGoles(jugadores.id, jugadores.name, jugadores.team, jugadores.scores)"
            >
              Sumar Goles
            </button>
            <button v-if="!isHidden" @click="borrarJugador()">Eliminar</button>
          </span>
        </p>
      </div>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    isHidden: true,
    listaEquipos: [],
    listaJugadores: [],
    golesASumar: 0,
    nombreEqVar: 0,
    contador: 0,

    id: 0,
    nombre: "",
    team: "",
    scores: 0,
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
    comprobarJugador(equipos, jugadores) {
      let datoEncontrado = false;
      for (let i = 0; i < jugadores.length; i++) {
        if (jugadores[i].team === equipos.team) {
          datoEncontrado = true;
          break;
        }
      }
      return datoEncontrado;
    },
    metodoClick(dato) {
      this.nombreEqVar = dato;
    },
    mostrarInfo(id, scores) {
      this.id = id;
      this.scores = scores;
      this.isHidden = false;
    },
    sumarGoles(id, nombre, team, scores) {
      this.scores = parseInt(scores, 10) + parseInt(this.golesASumar, 10);
      this.id = parseInt(this.id, 10);
      this.nombre = nombre;
      this.team = team;

      axios.put("http://localhost:3000/players" + "/" + id, {
        id: parseInt(this.id, 10),
        name: this.nombre,
        team: this.team,
        scores: parseInt(this.scores, 10),
      });
      alert("Goles añadidos Correctamente");
    },
    borrarJugador() {
      let idJ = parseInt(this.id, 10);
      axios.delete("http://localhost:3000/players" + "/" + idJ, {});
      alert("Jugador Eliminado Correctamente");
    },

    computed: {
      listaJugadores: function () {
        if (this.nombreEqVar == equipos.name) {
          true;
        }
      },
    },
  },
};
</script>

<style scoped>
#spanJugador {
  color: rgb(0, 33, 141);
}

button {
  background-color: rgb(236, 235, 255);
  border: 1px solid rgb(0, 0, 0);
  padding: 5px;
  margin-left: 5px;
}

p {
  font-weight: bold;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #5e5757;
  text-align: center;
  padding: 4px;
  font-size: 14px;
}

th {
  width: 20%;
}

tr:nth-child(even) {
  background-color: rgb(146, 150, 201);
}

#info {
  padding-top: 1em;
  float: left;
}

#jugadoresDeLaLigaTitulo {
  font-size: 20px;
  padding-bottom: 2em;
  color: #5e5757;
}
</style>