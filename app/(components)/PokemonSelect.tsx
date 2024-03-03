'use client'

import { Chip } from "@mui/material";
import { PokemonEndPoint } from "../page"

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
      <Chip
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