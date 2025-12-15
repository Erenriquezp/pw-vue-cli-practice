<template>
   <div class="square">
      <img :src="imagenSrc" alt="Pokemon">
      <p>{{ textoSrc }}</p>
   </div>
</template>

<script>
export default {
   props: ['imagen', 'texto'],
   computed: {
      imagenSrc() {
         return this.imagen ? this.imagen : 'https://placehold.co/200x200/000000/000000.png';
      },
      textoSrc() {
         return this.texto ? this.texto : 'XXXXXXXXXXXXXXXXX';
      }
   }
}
</script>

<style scoped>
   .square {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
   }   
   img {
      width: 150px;
      height: 150px;
   }
   p {
      font-weight: bold;
   }
</style>