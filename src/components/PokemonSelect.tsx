'use client'

import { PokemonEndPoint } from "../../app/page"
import MainChip from "../customizedComponents/MainChip";

type PokemonSelectProps = {
  pokemonEndPoints: Array<PokemonEndPoint>;
  onSelect: (pokemonUrl: string) => void;
}

const PokemonSelect = (props: PokemonSelectProps) => {
  const createHandleClick = (pokemonUrl: string) => {
    return () => {
      props.onSelect(pokemonUrl);
    }
  }

  const chips = props.pokemonEndPoints.map((pokemonEndPoint) => {
    return (
      <MainChip
        label={pokemonEndPoint.name}
        color="primary"
        onClick={createHandleClick(pokemonEndPoint.url)}
        key={pokemonEndPoint.url}
      />
    )
  })

  return (
    chips
  )
}

export default PokemonSelect;