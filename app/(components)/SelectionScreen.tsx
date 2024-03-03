'use client'

import { useState } from "react";
import { Pokemon } from "../page"
import PokemonSelect from "./PokemonSelect";

type SelectionScreenProps = {
  pokemons: Array<Pokemon>;
}

const SelectionScreen = (props: SelectionScreenProps) => {
  const [selectedId, setSelectedId] = useState(props.pokemons[0].id);

  return <>
    <PokemonSelect
      onSelect={setSelectedId}
      pokemons={props.pokemons}
    />
  </>
}

export default SelectionScreen;