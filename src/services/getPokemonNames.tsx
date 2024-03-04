import axios from "axios";

type PokemonEndPoint = {
  name: string;
  url: string;
}

type ResponsePokemonEndPoints = {
  results: Array<PokemonEndPoint>;
}

const getPokemonInfos = async () => {
  const res = await axios.get<ResponsePokemonEndPoints>(process.env.POKEMON_INFOS_HOST as string, {
    params: {
      offset: 0,
      limit: 10,
    }
  });

  return res.data.results;
}

export const getPokemonNames = async () => {
  const pokemonInfos = await getPokemonInfos();
  
  return pokemonInfos.map((info) => info.name);
}