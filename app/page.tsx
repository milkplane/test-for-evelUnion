import { getRandomRange } from "@/src/getRandomRange";
import axios from "axios";
import SelectionScreen from "./(components)/SelectionScreen";

type StatInfo = {
  base_stat: number
}

export type Pokemon = {
  height: number;
  id: number;
  stats: Array<StatInfo>;
  seriesCount: number;
  name: string;
  sprites: {[key: string]: string};
}

const createPokemonRequest = async (pokemonId: number) => {
  const url = process.env.POKEMON_INFOS_HOST + `/${pokemonId}`;
  const res = await axios.get<Pokemon>(url);
  return res.data;
}

const getPokemons = async () => {
  const range = getRandomRange(100);

  const pokemonIds = range.slice(0, 10).map(maybeZeroId => {
    return maybeZeroId + 1;
  });

  const pokemonRequests = pokemonIds.map(id => {
    return createPokemonRequest(id);
  })

  return await Promise.all(pokemonRequests);
}

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <SelectionScreen pokemons={pokemons}/>
  );
}
