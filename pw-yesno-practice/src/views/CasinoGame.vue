<template>
   <div class="main-container">
      <div v-if="!mostrarResultado">
         <div class="stats">
            <h2>Puntaje: {{ puntaje }}</h2>
            <h2>intento: {{ intentos }}</h2>
         </div>
         <div class="grid">
            <CasinoCard 
               v-for="(item, index) in grid" 
               :key="index"
               :imagen="item.imagen"
               :texto="item.texto" 
            />
         </div>
         <button @click="jugar" class="btn-jugar">JUGAR</button>
      </div>
      <div v-else class="resultado-final">
         <div v-if="esGanador === false" class="mensaje rojo">
            <h2>Has utilizado tus 5 intentos</h2>
            <h3>El juego ha terminado, intentalo nuevamente</h3>
         </div>
         <div v-if="esGanador === true" class="mensaje azul">
            <h2>Puntaje: {{ puntaje }}</h2>
            <h3>Felicitaciones has ganado un premio de $10.000,00</h3>
         </div>

         <button @click="reiniciar" class="btn-reset">Nuevo Juego</button>
      </div>
   </div>
</template>

<script>
import { getData } from '../clients/CasinoClient';
import CasinoCard from '../components/CasinoCard.vue';

export default {
   components: { CasinoCard },
   data() {
      return {
         puntaje: 0,
         intentos: 0,
         grid: [],
         mostrarResultado: false,
         esGanador: false
      }
   },
   methods: {
      setInicio() {
         this.grid = [
            { imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg', texto: 'XXXXXXXX' }, 
            { imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg', texto: 'XXXXXXXX' },
            { imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg', texto: 'XXXXXXXX' }
         ]
      },
      async jugar() {
         this.intentos++;
         const nuevaGrilla = [];
         let contadorYes = 0;

         for (let i = 0; i < 3; i++) {
            const data = await getData();
            if (data.answer === 'yes') {
               contadorYes++;
            }
            nuevaGrilla.push({
               imagen: data.image,
               texto: data.answer
            });
         }

         this.grid = nuevaGrilla;

         if (contadorYes === 3) this.puntaje += 5;
         else if (contadorYes === 2) this.puntaje += 2;
         else if (contadorYes === 1) this.puntaje += 1;
         else this.puntaje += 0;

         this.verificarEstado();
      },
      verificarEstado() {
         if (this.puntaje >= 10) {
            this.esGanador = true;
            this.mostrarResultado = true;
         }
         else if (this.intentos >= 5) {
            this.esGanador = false;
            this.mostrarResultado = true;
         }
      },
      reiniciar() {
         this.puntaje = 0;
         this.intentos = 0;
         this.mostrarResultado = false;
         this.esGanador = false;
         this.setInicio();
      }
   },
   mounted() {
      this.setInicio();
   },
}
</script>

<style>
   .main-container {
      text-align: center;
   }
   .rojo {
      color: red;
   }
   .azul {
      color: blue;
   }
   .mensaje {
      border: 1px solid black;
      padding: 20px;
      margin: 20px auto;
      width: 50%;

   }
   .grid {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      gap: 30px;
   }
   .stats {
      display: flex;
      justify-content: space-around;
   }
</style>