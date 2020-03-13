import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = ({pokemonUrl}) =>{

    const [pokemon, setPokemon] = useState(null);

    useEffect(()=>{
        axios.get(pokemonUrl).then((data)=>{
            setPokemon(data.data);
        })
    }, [pokemonUrl])

    if (pokemon == null) {
        return <div>No Pokemon</div>
    } else {
        return <div>
            {pokemon.name}
            <img src={pokemon.sprites.back_default} alt=""/>
            <img src={pokemon.sprites.front_default} alt=""/>
        </div>
    }
}

export default Pokemon;