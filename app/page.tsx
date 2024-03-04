import axios from "axios";
import SelectionScreen from "../src/components/SelectionScreen";

export type PokemonEndPoint = {
  name: string;
  url: string;
}

type ResponsePokemonEndPoints = {
  results: Array<PokemonEndPoint>;
}

const getPokemonUrls = async () => {
  const res = await axios.get<ResponsePokemonEndPoints>(process.env.POKEMON_INFOS_HOST as string, {
    params: {
      offset: 0,
      limit: 10,
    }
  })

  return res.data.results;
}

export default async function Home() {
  const pokemonEndPoints = await getPokemonUrls();

  console.log(pokemonEndPoints);

  return (
    <SelectionScreen pokemonEndPoints={pokemonEndPoints}/>
  );
}
