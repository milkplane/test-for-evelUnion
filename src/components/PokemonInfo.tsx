import styles from "../styles/PokemonContainer.module.css";
import PokemonName from "./PokemonName";
import PokemonSprite from "./PokemonSprite";
import PokemonDetails from "./PokemonDetails";
import { Box, Grid } from "@mui/material";
import { ParamsProps } from "@/app/[[...pokemon]]/page";
import { getPokemon } from "../services/getPokemon";

const PokemonInfo = async (props: ParamsProps) => {
  const pokemon = await getPokemon(props);

  return (
    <Grid
      container
      className={styles.pokemonContainer}
      justifyContent='center'
      direction='column'
    >
      <Box px={5.5} pt={5.5} pb={2}>
        <PokemonName name={pokemon.name}/>
        <PokemonSprite url={pokemon.spriteUrl}/>
        <PokemonDetails
          id={pokemon.id}
          height={pokemon.height}
          seriesCount={pokemon.seriesCount}
          attack={pokemon.attack}
        />
      </Box>
    </Grid>
  )
}

export default PokemonInfo;