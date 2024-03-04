import { Typography } from "@mui/material";
import styles from "../styles/PokemonName.module.css";

type PokemonNameProps = {
  name: string;
}

const PokemonName = (props: PokemonNameProps) => {
  return (
    <Typography className={styles.pokemonName} variant="h1" height='48px' mb={5.5}>
      {props.name}
    </Typography>
  )
}

export default PokemonName;