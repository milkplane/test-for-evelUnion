'use client'

import { useState } from "react";
import { PokemonEndPoint } from "../../app/page"
import PokemonSelect from "./PokemonSelect";
import PokemonInfo from "./PokemonInfo";
import { Grid, ThemeProvider } from "@mui/material";
import { mainTheme } from "../themes/mainTheme";

type SelectionScreenProps = {
  pokemonEndPoints: Array<PokemonEndPoint>;
}

const SelectionScreen = (props: SelectionScreenProps) => {
  const [pokemonUrl, setPokemonUrl] = useState<string>(props.pokemonEndPoints[0].url);

  return (
    <ThemeProvider theme={mainTheme}>
      <Grid container>
        <Grid 
          item
          container
          xs={6}
          alignItems='center'
          justifyContent='center'
        >
          <Grid
            container
            height='auto'
            gap={'10px 6px'}
          >
            <PokemonSelect
              onSelect={setPokemonUrl}
              pokemonEndPoints={props.pokemonEndPoints}
            />
          </Grid>
        </Grid>
        <Grid 
          item
          container
          xs={6}
          alignItems="center"
          justifyContent="center"
        >
          <PokemonInfo pokemonUrl={pokemonUrl}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default SelectionScreen;