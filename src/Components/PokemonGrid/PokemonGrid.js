import React, { useEffect, useMemo } from 'react';
import Scroll from '../Scroll/Scroll';
import CardList from '../CardList/CardList';
import { getRandomFromArray, filterArrayByText } from "../../lib/arrayUtil";
import { callPokemonAPI, failedPokemon } from "./actions"
import { useDispatch, useSelector } from 'react-redux';


const useFetchPokemonEffect = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(callPokemonAPI());
    },[dispatch]);
}

const PokemonGrid = () =>{
    useFetchPokemonEffect();

    const pokemons = useSelector(state => state.setPokemon.pokemon);
    const isPending = useSelector(state => state.setPokemon.isPending);
    const searchField = useSelector(state => state.changeSearchBox.searchField)

    const randomPokemon = useMemo(() => getRandomFromArray(pokemons,15),[pokemons])

    
    return (
        <Scroll>
            {isPending? <h1> Loading... </h1>: <CardList pokemons={searchField? filterArrayByText(pokemons,searchField,15): randomPokemon}/>}
        </Scroll>
    )
}

export default PokemonGrid