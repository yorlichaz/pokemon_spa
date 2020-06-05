import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const card_list = ({pokemons}) =>{
    return (
        <div className='container'>
            {pokemons.map((pokemon)=>{
                return (
                    <Card name={pokemon.name}/>
                )
            })}
        </div>
    );
};

export default card_list;
