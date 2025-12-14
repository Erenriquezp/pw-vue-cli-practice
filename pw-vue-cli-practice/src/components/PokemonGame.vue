<template>
    <div class="contenedor"> 
        <div class="stats">
            <h3>Puntaje: {{ puntaje }} </h3>
            <h3>Intentos: {{ intentos }} </h3>
        </div>
        <p>Selecciona el nombre de Pokemon correcto</p>

        <div class="img-box">
            <img :src="imagen" alt="Imagen no encontrada">
        </div>

        <div class="opciones">
            <button v-for="opcion in opciones"
                        :key="opcion"
                        @click="$emit('jugar', opcion)"
                        >
                {{ opcion }}
            </button>
        </div>

        <div v-if="mensaje" class="['mensaje', tipoMensaje]">
                {{ mensaje }}
        </div>

        <button @click="$emit('reiniciar')">Reiniciar juego</button>
    </div>
</template>

<script>
export default {
    props: ['imagen', 'opciones', 'puntaje', 'intentos', 'mensaje', 'tipoMensaje', 'mostrarPokemon', 'bloquearJuego']
}
</script>

<style scoped>
    .contenedor {
        text-align: center;
        font-family: sans-serif;
        max-width: 400px;
        margin: 0 auto;
    }
    .stats {
        border: 2px dashed blue;
        margin-bottom: 20px;
        padding: 10px;
    }
    .img-box {
        border: 5px solid yellow;
        display: inline-block;
        padding: 10px;
    }
    img {
        width: 200px;
    }
    .opciones {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>