import axios from "axios";

const consumirApi = async () => {
   const ids = [1, 4, 5, 26];
   const data = [];
   for (const id of ids) {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      data.push({
         name: response.data.name,
         img: response.data.sprites.other.dream_world.front_default,
         id: response.data.id
      });
   }
   return data;
}

export function getPokemonData() {
   return consumirApi();
}