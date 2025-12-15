import axios from 'axios';

const consumirApi = async () => {
   const ids = [1, 3, 7, 25];
   const data = [];

   for (const id of ids) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      data.push({
         id: response.data.id,
         nombre: response.data.name,
         imagen: response.data.sprites.other.dream_world.front_default
      });
   }
   return data;
}

export async function getPokemonData() {
   return consumirApi();
}