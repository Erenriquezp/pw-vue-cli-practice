<template>
   <div class="message-container">
      <p v-if="mensaje" 
         :style="{color: color, border: '1px solid black'}">
         {{mensaje}}
      </p>
   </div>
</template>

<script>
export default {
   props: ['mensaje', 'color']
}
</script>

<style>
   .message-container, p {
      margin: 10px;
      padding: 10px;
      font-weight: bold;
      font-size: 20px;
   }
</style>