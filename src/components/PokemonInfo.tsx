import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonContainer from "../customizedComponents/PokemonContainer";
import ImageContainer from "../customizedComponents/ImageContainer";

type StatInfo = {
  base_stat: number
}

export type Pokemon = {
  height: number;
  id: number;
  stats: Array<StatInfo>;
  seriesCount: number;
  name: string;
  sprites: {[key: string]: string};
}

type PokemonInfoProps = {
  pokemonUrl: string;
}

const createPokemonRequest = async (url: string) => {
  const res = await axios.get<Pokemon>(url);
  return res.data;
}

const PokemonInfo = (props: PokemonInfoProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>()

  useEffect(() => {
    createPokemonRequest(props.pokemonUrl)
    .then((pokemon) => setPokemon(pokemon))
  }, [props.pokemonUrl])

  return (
    <PokemonContainer
      container
      justifyContent='center'
      direction='column'
    >
      <Box px={5.5} pt={5.5} pb={2}>
        <Typography variant="h1" height='48px' mb={5.5}>{pokemon?.name}</Typography>
        <ImageContainer>
          <img src={pokemon?.sprites['front_shiny']}/> 
        </ImageContainer>
        <Typography variant="body1">
          Снялся в 78 сериях<br/>
          id: {pokemon?.id}<br/>
          height: {pokemon?.height}<br/>
          attack: {pokemon?.stats[1].base_stat}<br/>
        </Typography>
      </Box>
    </PokemonContainer>
  )
}

export default PokemonInfo;