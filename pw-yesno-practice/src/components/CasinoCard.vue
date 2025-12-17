<template>
   <div class="card">
      <img :src="imagen" alt="casino">
      <p>{{ texto }}</p>
   </div>
</template>

<script>
export default {
   props: ['imagen', 'texto']
}
</script>

<style>
   img {
      width: 100px;
      height: 100px;
   }
</style>