<template>
   <div v-if="mensaje" :style="{ color: color}">
      <h2>{{ mensaje }}</h2>
      <h3 v-if="subtitulo">{{ subtitulo }}</h3>
      
   </div>
</template>

<script>
export default {
   props: ['mensaje', 'subtitulo', 'color']
}

</script>

<style scoped>
   div {
      border: 2px solid black;
      padding: 10px;
      margin-top: 20px;
      font-weight: bold;
      text-align: center;
   }
</style>