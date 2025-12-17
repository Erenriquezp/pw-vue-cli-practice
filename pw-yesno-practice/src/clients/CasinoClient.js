import axios from "axios"

const consumirAPI = async () => {
   const data = await axios.get('https://yesno.wtf/api');
   return {
      answer: data.data.answer,
      image: data.data.image
   };
}

export function getData() {
   return consumirAPI();
}