<template>
<div id="floatTabla">
  <table>
      <colgroup>
        <col span="2" />
      </colgroup>
      <tr span v-for="(equipos, index) in listaEquipos" :key="index">
        <th>{{ equipos.name }}</th>
        <td v-for="(jugadores, index) in listaJugadores" :key="index">
          <span v-if="equipos.name == jugadores.team">{{ jugadores.name }} 
            <button @click="mostrarBoton(), pasarNombreEquipo(equipos.name)">Nuevo Jugador</button></span>
        </td>
      </tr>
    </table>
</div>
    
<div id="floatNuevoJugador" v-if="!isHidden">
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
    isHidden: true,
    listaEquipos: [],
    listaJugadores: [],
    equipox: 0,

    id: 0, 
    nombreJugador: "",
    equipoJugador: "",
    golesJugador: 0,
  }),
  async created() {
    await axios.get("http://localhost:3000/clubs").then((result) => {
      this.listaEquipos = result.data;
    }),
      await axios.get("http://localhost:3000/players").then((result) => {
        this.listaJugadores = result.data;
      });
  },
  methods: {
    pasarNombreEquipo(nombreEquipo){
      this.equipoJugador = nombreEquipo;
    },
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
    mostrarBoton() {
      this.isHidden = false;
    },
  }
};
</script>

<style scoped>
p {
  font-size: 20px;
}

button{
  background-color: yellowgreen;
  padding: 5px;
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

#boton{
  width: 10%;
}

th {
  width: 15%;
  background-color: rgb(255, 212, 72);
  border: 2px solid rgb(0, 0, 0);
}

tr:nth-child(even) {
  background-color: rgb(255, 236, 172);
}

#info {
  padding-top: 1em;
  float: left;
}

#floatTabla{
  float: left;
  width: 75%;
}

#floatNuevoJugador{
  float: right;
  width: 20%;
  border: 2px solid rgb(217, 255, 0);
  background-color: rgb(255, 236, 172);
  border: 2px solid rgb(0, 0, 0);
  padding: 1%;
}

</style>