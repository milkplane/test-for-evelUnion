'use client'

import { Chip } from "@mui/material";
import { Pokemon } from "../page"

type PokemonSelectProps = {
  pokemons: Array<Pokemon>;
  onSelect: (id: number) => void;
}

const PokemonSelect = (props: PokemonSelectProps) => {
  const createHandleClick = (id: number) => {
    return () => {
      props.onSelect(id);
    }
  }

  const chips = props.pokemons.map((pokemon) => {
    return (
      <Chip
        label={pokemon.name}
        color="primary"
        onClick={createHandleClick(pokemon.id)}
        key={pokemon.id}
      />
    )
  })

  return (
    chips
  )
}

export default PokemonSelect;