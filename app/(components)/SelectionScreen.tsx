'use client'

import { useState } from "react";
import { PokemonEndPoint } from "../page"
import PokemonSelect from "./PokemonSelect";
import PokemonInfo from "./PokemonInfo";

type SelectionScreenProps = {
  pokemonEndPoints: Array<PokemonEndPoint>;
}

const SelectionScreen = (props: SelectionScreenProps) => {
  const [pokemonUrl, setPokemonUrl] = useState<string>(props.pokemonEndPoints[0].url);

  return <>
    <PokemonSelect
      onSelect={setPokemonUrl}
      pokemonEndPoints={props.pokemonEndPoints}
    />
    <PokemonInfo pokemonUrl={pokemonUrl}/>
  </>
}

export default SelectionScreen;