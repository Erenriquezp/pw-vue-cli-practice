<template>
   <div class="game-container">
      <div class="stats">
         <h2>Puntaje: {{ puntaje }}</h2>
         <h2>Intento: {{ intentos }}</h2>
      </div>
      <div class="slots-row">
         <PokemonSquare
            v-for="(slot, index) in grid" :key="index" 
            :imagen="slot.imagen"
            :texto="slot.nombre"
         />

      </div>
      <button @click="jugar" :disabled="juegoTerminado" class="btn-jugar">JUGAR</button>
      <GameMessage 
         :mensaje="txtMensaje"
         :subtitulo="txtSubtitulo"
         :color="colorMensaje"/>
   </div>
</template>

<script>
import { getPokemonData } from '../clients/PokemonClient';
import GameMessage from '../components/GameMessage.vue';
import PokemonSquare from '../components/PokemonSquare.vue';

export default {
   components: { PokemonSquare, GameMessage},
   data() {
      return {
         posiblesPokemons: [],
         grid: [{}, {}, {}],
         puntaje: 0,
         intentos: 0,
         txtMensaje: '',
         txtSubtitulo: '',
         colorMensaje: 'black',
         juegoTerminado: false
      }
   },
   methods: {
      async jugar() {
         this.intentos++;
         const n1 = this.posiblesPokemons[Math.floor(Math.random() * 4)];
         const n2 = this.posiblesPokemons[Math.floor(Math.random() * 4)];
         const n3 = this.posiblesPokemons[Math.floor(Math.random() * 4)];

         this.grid = [n1, n2, n3];
         this.calcularPuntos(n1, n2, n3);
         this.verificarEstado();
      },
      calcularPuntos(p1, p2, p3) {
         if (p1.id === p2.id && p2.id === p3.id) {
            this.puntaje += 5;
         } 
         else if (p1.id === p2.id || p1.id === p3.id || p2.id === p3.id) {
            this.puntaje += 2;
         }
         else {
            this.puntaje += 0;
         }
      },
      verificarEstado() {
         if (this.puntaje >= 10) {
            this.txtMensaje = `Puntaje: ${this.puntaje}`;
            this.txtSubtitulo = "Felicitaciones has ganada un premio de $10000";
            this.colorMensaje = "blue";
            this.juegoTerminado = true;
         } else if (this.intentos >= 5 && this.puntaje < 10) {
            this.txtMensaje = "Ha utilizado sus 5 intentos";
            this.txtSubtitulo = "El juego ha ternimado, intente otra vez";
            this.colorMensaje = "red";
            this.juegoTerminado = true;
         }
      }
   },
   async mounted() {
      this.posiblesPokemons = await getPokemonData();
   }
}
</script>

<style scoped>
   .game-container {
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
   }
   .stats {
      display: flex;
      justify-content: space-around;
   }
   .slots-row {
      display: flex;
      justify-content: center;
   }
   .btn-jugar {
      margin-top: 20px;
      padding: 10px 40px;
      font-size: 20px;
      font-weight: bold;
      border: 2px solid black;
      background: white;
      cursor: pointer;
   }
</style>