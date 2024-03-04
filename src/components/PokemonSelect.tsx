import styles from "../styles/MainChip.module.css";
import Link from "next/link";
import React from "react";
import { Chip } from "@mui/material";
import { getPokemonNames } from "../services/getPokemonNames";

const PokemonSelect = async () => {
  const pokemonNames = await getPokemonNames();
  
  return pokemonNames.map((pokemonName) => {
    return (
      <Link href={`/${pokemonName}`}>
        <Chip
          color='primary'
          className={styles.mainChip}
          label={pokemonName}
          key={pokemonName}
        />
      </Link>
    )
  })
}

export default PokemonSelect;