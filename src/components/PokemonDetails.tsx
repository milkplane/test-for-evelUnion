import { Typography } from "@mui/material";

type PokemonDetailsProps = {
  seriesCount: number;
  id: number;
  height: number;
  attack: number;
}

const PokemonDetails = (props: PokemonDetailsProps) => {
  return (
    <Typography variant="body1">
      Снялся в {props.seriesCount} сериях<br/>
      id: {props.id}<br/>
      height: {props.height}<br/>
      attack: {props.attack}<br/>
    </Typography>
  )
}

export default PokemonDetails;