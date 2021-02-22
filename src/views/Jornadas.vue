<template>
  <div id="encuadre">
    <div id="jornadaTitulo">JORNADAS</div>
    <!--
      Al sumar goles se muestra en todos los input de los 
      partidos sin goles, pero al pulsar en guardar solo 
      guarda en el JSON el escogido para sumar los goles.
    -->

    <div span v-for="(partidos, index) in listaPartidos" :key="index">
      <span
        v-if="partidos.id == listaPartidos.length"
        v-on:load="guardarId(partidos.id)"
      ></span>
    </div>

    <select v-model="jornada" name="jornada">
      <option
        v-for="(partidos, index) in listaPartidos"
        v-on:click="showRound(partidos.round)"
        :key="index"
      >
        {{ partidos.round }} - {{ partidos.date }}
      </option>
    </select>
    <br />

    <div v-for="(partidos, index) in listaPartidos" :key="index">
      <p v-if="partidos.round == returnRound()">
        {{ partidos.team1 }} - {{ partidos.score }} - {{ partidos.team2 }}
        <span v-if="partidos.score == null">
          <input
            v-on:click="
                showJornada(
                  partidos.id,
                  partidos.team1,
                  partidos.team2,
                  partidos.score,
                  partidos.round,
                  partidos.date
                )"
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
          <button
            @click="guardarPartido()"
            id="botonEnviar"
          >
            Guardar
          </button></span
        >
      </p>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data: () => ({
    listaPartidos: [],
    jornada: "",
    golesEquipoUno: 0,
    golesEquipoDos: 0,

    id: 0,
    team1: "",
    team2: "",
    score: "",
    round: "",
    date: "",
  }),
  created() {
    axios.get("http://localhost:3000/matches").then((result) => {
      this.listaPartidos = result.data;
    });
  },
  methods: {
    guardarPartido() {
      this.id = parseInt(this.id, 10);
      axios.put("http://localhost:3000/matches" + "/" + this.id, {
        id: this.id,
        round: this.round,
        date: this.date,
        team1: this.team1,
        team2: this.team2,
        score: [
          parseInt(this.golesEquipoUno, 10),
          parseInt(this.golesEquipoDos, 10),
        ],
      });
      alert("Partido Introducido Correctamente");
    },
    guardarId(id) {
      this.id = id + 1;
    },
    showJornada(id, team1, team2, score, round, date) {
      this.id = id;
      this.team1 = team1;
      this.team2 = team2;
      this.score = score;
      this.round = round;
      this.date = date;
    },
    showRound(round) {
      this.round = round;
    },
    returnRound() {
      return this.round;
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
  font-weight: bolder;
  color: brown;
  padding-bottom: 1em;
}

#botonEnviar {
  margin: 1em;
  background: #0066a2;
  color: white;
  border-style: outset;
  border-color: #0066a2;
  height: 25px;
  width: 100px;
  font: bold 10px arial, sans-serif;
  text-shadow: none;
}

#jornadaTitulo {
  font-size: 20px;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #5e5757;
}
</style>