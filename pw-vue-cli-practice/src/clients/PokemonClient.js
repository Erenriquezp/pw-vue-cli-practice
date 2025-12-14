import axios from 'axios';

export async function obtenerImagenPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/excadrill';
    const respuesta = await axios.get(url);

    return respuesta.data.sprites.other['official-artwork'].front_default;
}