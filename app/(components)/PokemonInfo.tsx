import { Pokemon } from "../page";

type PokemonInfoProps = {
  pokemon: Pokemon;
}

const PokemonInfo = (props: PokemonInfoProps) => {
  return (
    <div>
      <h1>{props.pokemon.name}</h1>
      <img src={props.pokemon.sprites['front_shiny']}/>
      <p>id: {props.pokemon.id}</p>
      <p>height: {props.pokemon.height}</p>
      <p>attack: {props.pokemon.stats[0].base_stat}</p>
    </div>
  )
}

export default PokemonInfo;