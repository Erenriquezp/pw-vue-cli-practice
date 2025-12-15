<template lang="">
   <div class="main-container">
      <PokemonGame
         :imagen
         :intentos
         :puntaje
         :opciones
         :mensaje
         :tipoMensaje
         @reiniciar="cargarJuego"
         @seleccion="seleccion" />
   </div>
</template>

<script>
import PokemonGame from '../components/PokemonGame.vue';
import { getPokemon } from '../clients/PokemonClient'

export default {
   name: 'PokemonView',
   components: { PokemonGame },
   data() {
      return {
         imagen: '',
         intentos: 0,
         puntaje: 0,
         mensaje: '',
         opciones: null,
         tipoMensaje: ''
      }
   },
   methods: {
      async cargarJuego() {
         this.imagen = await getPokemon();
         console.log(this.imagen);
         this.puntaje = 0;
         this.intentos = 0;
         this.opciones = ['keldeo-ordinary', 'drilbur', 'ninjask', 'excadrill'];
         this.mensaje = '';
         this.tipoMensaje = '';
      },
      seleccion(pokemon) {
         console.log('Entro al metodo con: ', pokemon);
         this.intentos++;
         if (pokemon === 'excadrill') {
            this.mensaje = 'Felicitaciones, has seleccionado la opcion correcta';
            this.tipoMensaje = 'gana';
            if (this.intentos === 1) this.puntaje = 5;
            else if (this.intentos === 2) this.puntaje = 3;
            else if (this.intentos === 3) this.puntaje = 1;
         }
         
         if (this.intentos >= 4) {
            this.mensaje = "Pokemon incorrecto, intentalo nuevamente";
            this.tipoMensaje = 'pierde';
         }
         
      }
   },
   mounted() {
      this.cargarJuego();
   }
}
</script>

<style>
   .main-container {
      text-align: center;
      justify-content: center;
      display: flex;
      margin: 0 auto;
   }
</style>