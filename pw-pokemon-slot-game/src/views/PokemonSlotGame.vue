<template>
   <div class="main-container">
      <div class="title">
         <h2>Puntaje: {{ puntaje }}</h2>
         <h2>Intentos: {{ intentos }}</h2>
      </div>
      <div class="pokemons-container">
         <PokemonSquare 
            v-for="(pokemon, index) in grid" :key="index"
            :imagen="pokemon.img"
            :name="pokemon.name"
         />
      </div>
      <div class="btn-container">
         <button @click="jugar">JUGAR</button>
      </div>
      <GameMessage 
         :mensaje="mensaje"
         :color="color"
      />
   </div>
</template>
<script>
import { getPokemonData } from '../clients/PokeApiClient';
import GameMessage from '../components/GameMessage.vue';
import PokemonSquare from '../components/PokemonSquare.vue';

export default {
   components: { PokemonSquare, GameMessage },
   data() {
      return {
         pokemons: [],
         grid: [{}, {}, {}],
         puntaje: 0,
         intentos: 0,
         mensaje: '',
         color: '',
         nombre: ''
      }
   },
   methods: {
      jugar() {
         this.intentos++;
         console.log(this.pokemons);
         const n1 = this.pokemons[Math.floor(Math.random() * 4)];
         const n2 = this.pokemons[Math.floor(Math.random() * 4)];
         const n3 = this.pokemons[Math.floor(Math.random() * 4)];

         this.grid = [n1, n2, n3];
         this.calcularPuntaje(n1, n2, n3);
         this.mostrarMensaje();
      },
      calcularPuntaje(p1, p2, p3) {
         if (p1.id === p2.id && p2.id === p3.id) {
            this.puntaje += 5;
         } else if (p1.id === p2.id || p1.id === p3.id || p2.id === p3.id) {
            this.puntaje += 2;
         }
      },
      mostrarMensaje() {
         if (this.intentos === 5 && this.puntaje < 10) {
            this.mensaje = "Ha utilizado sus 5 Intentos El juego a terminado, intente otra vez";
            this.color = "red";
         } else if (this.puntaje >= 10 && this.intentos <= 5) {
            this.mensaje = `Puntaje: ${this.puntaje} Felicitaciones has ganado $10.000,00`;
            this.color = "blue";
         }
      }
   },
   async mounted() {
      this.pokemons = await getPokemonData();
   },
}
</script>
<style scoped>
   .main-container {
      text-align: center;
      margin: 30px;
   }
   .pokemons-container {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: center;
   }
   .title {
      display: flex;
      justify-content: space-around;
   }
   button {
      border: 2px solid black;
      padding: 15px 30px;
      cursor: pointer;
      font-weight: bold;

   }
</style>