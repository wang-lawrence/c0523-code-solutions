import './styles.css'

export default function PokemonList({pokedex}) {
  const pokelist = pokedex.map(pokemon => <li key ={pokemon.number}>{pokemon.name}</li>)
  return <ul>{pokelist}</ul>
}
