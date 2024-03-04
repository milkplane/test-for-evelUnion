import PokemonSelect from "./PokemonSelect";
import PokemonInfo from "./PokemonInfo";
import { Grid, ThemeProvider } from "@mui/material";
import { mainTheme } from "../themes/mainTheme";
import { ParamsProps } from "@/app/[[...pokemon]]/page";

const SelectionScreen = ({ params }: ParamsProps) => {
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
            <PokemonSelect/>
          </Grid>
        </Grid>
        <Grid 
          item
          container
          xs={6}
          alignItems="center"
          justifyContent="center"
        >
          <PokemonInfo params={params}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default SelectionScreen;