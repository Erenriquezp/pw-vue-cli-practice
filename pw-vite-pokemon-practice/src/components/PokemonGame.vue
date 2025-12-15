<template>
   <div class="container">
      <div class="score-container">
         <h3>Puntaje: {{ puntaje }} </h3> 
         <h3>Intentos: {{ intentos }} </h3>
         <h4>Selecciona el nombre del Pokemon correcto</h4>
      </div>
      <div class="img-container">
         <img :src="imagen" alt="Imagen del Pokemon">
      </div>
      <div class="btn-container">
         <button v-for="opcion in opciones" :key="opcion" @click="$emit('seleccion', opcion)"> 
            {{ opcion }}
         </button>
      </div>
      <div :class="tipoMensaje">
         {{ mensaje }}
      </div>
      <button @click="$emit('reiniciar')">Reiniciar</button>
   </div>
</template>

<script>
export default {
   props: ['imagen', 'puntaje', 'intentos', 'mensaje', 'opciones', 'tipoMensaje'],
}
</script>

<style>
   .container {
      max-width: fit-content;
      padding: 20px;
   }
   .score-container {
      border: 2px dashed rgb(126, 6, 159);
      border-radius: 10px;
      padding: 0 10px;
   }
   .img-container {
      margin: 20px 0;
      border: 3px solid yellow;
   }
   img {
      max-width: 200px;
   }
   button {
      color: rgb(21, 21, 90);
      margin: 5px 0;
   }
   .btn-container {
      display: flex;
      text-align: center;
      justify-content: center;
      flex-direction: column;
   }
   .gana {
      background-color: blue;
      border: 1px solid black;
      font-family: 'Times New Roman', Times, serif;
      color: white;
      padding: 5px;
      margin: 10px 0;
   }
   .pierde {
      background-color: red;
      border: 1px solid black;
      font-family: 'Times New Roman', Times, serif;
      color: white;
      padding: 5px;
      margin: 10px 0;
   }
</style>