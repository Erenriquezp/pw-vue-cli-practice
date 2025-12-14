<template>
    <div>
        <PokemonGame :opciones="listaOpciones"
        :imagen="imagenSrc"
        :puntaje="puntaje"
        :intentos="intentos"
        :mensaje="txtMensaje"
        :mostrarPokemon="seAcabo"
        :bloquearJuego="seAcabo"
        @jugar="verificarIntento"
        @reiniciar="cargarJuego" />
    </div>
</template>
<script>
    import PokemonGame from "../components/PokemonGame.vue";
    import { obtenerImagenPokemon } from "../clients/PokemonClient";

    export default {
        name: 'PokemonView',
        components: { PokemonGame },
        data() {
            return {
                listaOpciones: ['keldeo-ordinary', 'drilbur', 'ninjask', 'excadrill'],
                correcto: 'excadrill',
                imagenSrc: '',
                puntaje: 0,
                txtMensaje: '',
                seAcabo: false
            }
        },
        methods: {
            async cargarJuego() {
                this.puntaje = 0;
                this.intentos = 0;
                this.seAcabo = false;
                this.txtMensaje = null;
                this.imagenSrc = await obtenerImagenPokemon();
                console.log(imagenSrc);
            },
            verificarIntento(seleccion) {
                this.intentos++;
                if (seleccion === this.correcto) {
                    this.seAcabo = true;
                    this.txtMensaje = "Felicidades";
                    this.claseMensaje = "exito";

                    if (this.intentos === 1) this.puntaje = 5;
                    else if (this.intentos === 2) this.puntaje = 3;
                    else if (this.intentos === 3) this.puntaje = 1;
                    else this.puntaje = 0;
                } else {
                    if (this.intentos >= 3) {
                        this.claseMensaje = "error";
                        this.seAcabo = true;
                    } else {
                        this.txtMensaje = "Pokemon incorrecto";
                        this.claseMensaje = "error";
                    }
                }
            }
        },
    }
</script>
<style >
    
</style>