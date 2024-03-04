import axios from "axios";
import { ParamsProps } from "@/app/[[...pokemon]]/page";
import { plugPokemon } from "../consts/plugPokemon";

type StatInfo = {
  base_stat: number;
}

export type Pokemon = {
  height: number;
  id: number;
  stats: Array<StatInfo>;
  seriesCount: number | undefined;
  name: string;
  sprites: {[key: string]: string};
}

const createPokemonRequest = async (pokemonName: string) => {
  const url = process.env.POKEMON_INFOS_HOST + `/${pokemonName}`;

  try {
    const res = await axios.get<Pokemon>(url);
    return res.data;
  } catch (err) {
    return plugPokemon;
  }
}

const getSafePokemon = async ({ params }: ParamsProps) => {
  let pokemon: Pokemon = plugPokemon;

  if (params?.pokemon !== undefined) {
    pokemon = await createPokemonRequest(params.pokemon)
  }

  return pokemon;
}

export const getPokemon = async (props: ParamsProps) => {
  const pokemon = await getSafePokemon(props);

  return {
    name: pokemon.name,
    id: pokemon.id,
    height: pokemon.height,
    spriteUrl: pokemon.sprites['front_shiny'],
    seriesCount: pokemon.seriesCount !== undefined ? pokemon.seriesCount : 78,
    attack: pokemon.stats[1].base_stat,
  }
}