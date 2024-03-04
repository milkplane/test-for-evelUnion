import styles from "../styles/ImageContainer.module.css";
import { Grid } from "@mui/material";

type PokemonSpriteProps = {
  url: string;
}

const PokemonSprite = (props: PokemonSpriteProps) => {
  return (
    <Grid className={styles.imageContainer}>
          <img src={props.url}/> 
    </Grid>
  )
}

export default PokemonSprite;