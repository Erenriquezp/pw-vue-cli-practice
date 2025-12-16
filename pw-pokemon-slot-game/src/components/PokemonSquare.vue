<template>
   <div class="square-container">
      <div>
         <img :src="imagenSrc" alt="Pokemon"></img>
      </div>
      <p> {{ nameSrc }}</p>
   </div>
</template>

<script>
export default {
   props: ['imagen', 'name'],
   computed: {
      imagenSrc() {
         return this.imagen ? this.imagen : 'https://placehold.co/200x200/000000/000000.png'
      },
      nameSrc() {
         return this.name ? this.name : 'XXXXXXXXXXXXX'
      }
   }
}
</script>

<style scoped>
   .square-container {
      display: flex;
      flex-direction: column;
      margin: 30px;
   }
   img {
      width: 150px;
      height: 150px;
   }
</style>