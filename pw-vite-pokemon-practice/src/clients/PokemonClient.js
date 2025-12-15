import axios from "axios";

export async function getPokemon() {
   const url = 'https://pokeapi.co/api/v2/pokemon/excadrill';
   const response = await axios.get(url);

   return response.data.sprites.other['official-artwork'].front_default;
}