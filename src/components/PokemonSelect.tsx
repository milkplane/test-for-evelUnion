import axios from "axios";
import styles from "../customizedComponents/MainChip.module.css";
import Link from "next/link";
import { Chip } from "@mui/material";

export type PokemonEndPoint = {
  name: string;
  url: string;
}

type ResponsePokemonEndPoints = {
  results: Array<PokemonEndPoint>;
}

const getPokemonInfos = async () => {
  const res = await axios.get<ResponsePokemonEndPoints>(process.env.POKEMON_INFOS_HOST as string, {
    params: {
      offset: 0,
      limit: 10,
    }
  });

  return res.data.results;
}

const getPokemonNames = async () => {
  const pokemonInfos = await getPokemonInfos();
  
  return pokemonInfos.map((info) => info.name);
}


const PokemonSelect = async () => {
  const pokemonNames = await getPokemonNames();
  
  const chips = pokemonNames.map((pokemonName) => {
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

  return (
    chips
  )
}

export default PokemonSelect;