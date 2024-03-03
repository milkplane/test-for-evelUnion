'use client'

import { useState } from "react";
import { Pokemon } from "../page"
import PokemonSelect from "./PokemonSelect";
import PokemonInfo from "./PokemonInfo";

type SelectionScreenProps = {
  pokemons: Array<Pokemon>;
}

const SelectionScreen = (props: SelectionScreenProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(props.pokemons[0]);

  const setSelectedId = (id: number) => {
    const selectedPokemon = props.pokemons.find((pokemon) => {
      return pokemon.id === id;
    });

    setSelectedPokemon(selectedPokemon as Pokemon);
  }

  return <>
    <PokemonSelect
      onSelect={setSelectedId}
      pokemons={props.pokemons}
    />
    <PokemonInfo pokemon={selectedPokemon}/>
  </>
}

export default SelectionScreen;