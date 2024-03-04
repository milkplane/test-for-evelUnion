import { Typography } from "@mui/material";

type PokemonNameProps = {
  name: string;
}

const PokemonName = (props: PokemonNameProps) => {
  return (
    <Typography variant="h1" height='48px' mb={5.5}>
      {props.name}
    </Typography>
  )
}

export default PokemonName;