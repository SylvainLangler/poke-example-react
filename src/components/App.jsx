import React, { useState } from 'react';
import PokemonList from './PokemonList';
import Pokemon from './Pokemon';

const App = () => {
  const [pokemon, setPokemon] = useState(undefined);
  return (
    <div>
      <PokemonList onSelectOne={(data) => {
        setPokemon(data)
      } }/>
      { pokemon? <Pokemon pokemonUrl={pokemon} /> : "no pokemon" }
    </div>
  );
};

export default App;
