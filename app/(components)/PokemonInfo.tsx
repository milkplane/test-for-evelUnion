import axios from "axios";
import { useEffect, useState } from "react";

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

type PokemonInfoProps = {
  pokemonUrl: string;
}

const createPokemonRequest = async (url: string) => {
  const res = await axios.get<Pokemon>(url);
  return res.data;
}

const PokemonInfo = (props: PokemonInfoProps) => {
  useEffect(() => {
    createPokemonRequest(props.pokemonUrl)
    .then((pokemon) => setPokemon(pokemon))
  }, [props.pokemonUrl])

  const [pokemon, setPokemon] = useState<Pokemon>()

  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites['front_shiny']}/>
      <p>id: {pokemon?.id}</p>
      <p>height: {pokemon?.height}</p>
      <p>attack: {pokemon?.stats[1].base_stat}</p>
    </div>
  )
}

export default PokemonInfo;