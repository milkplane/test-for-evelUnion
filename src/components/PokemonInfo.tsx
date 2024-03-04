import { Box, Grid, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import styles from "../customizedComponents/PokemonContainer.module.css";
import imageStyles from "../customizedComponents/ImageContainer.module.css";
import { ParamsProps } from "@/app/[[...pokemon]]/page";
import { plugPokemon } from "../consts/PlugPokemon";

type StatInfo = {
  base_stat: number
}

export type Pokemon = {
  height: number;
  id: number;
  stats: Array<StatInfo>;
  seriesCount: number | undefined;
  name: string;
  sprites: {[key: string]: string};
}

const createPokemonRequest = async (pokemonName: string) => {
  const url = process.env.POKEMON_INFOS_HOST + `/${pokemonName}`;
  console.log('request to: ', url);

  let res: AxiosResponse<Pokemon>;
  try {
    res = await axios.get<Pokemon>(url);
    return res.data;
  } catch (err) {
    return plugPokemon;
  }
}

const PokemonInfo = async ({ params }: ParamsProps) => {
  let pokemon: Pokemon = plugPokemon;

  if (params?.pokemon !== undefined) {
    pokemon = await createPokemonRequest(params.pokemon)
  }

  return (
    <Grid
      container
      className={styles.pokemonContainer}
      justifyContent='center'
      direction='column'
    >
      <Box px={5.5} pt={5.5} pb={2}>
        <Typography variant="h1" height='48px' mb={5.5}>{pokemon.name}</Typography>
        <Grid className={imageStyles.imageContainer}>
          <img src={pokemon.sprites['front_shiny']}/> 
        </Grid>
        <Typography variant="body1">
          Снялся в {pokemon.seriesCount !== undefined ? pokemon.seriesCount : 78} сериях<br/>
          id: {pokemon.id}<br/>
          height: {pokemon.height}<br/>
          attack: {pokemon.stats[1].base_stat}<br/>
        </Typography>
      </Box>
    </Grid>
  )
}

export default PokemonInfo;