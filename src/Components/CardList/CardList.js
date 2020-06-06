import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({pokemons}) =>{
    return (
        <div className='container'>
            {pokemons.map((pokemon)=>{
                const {id,...rest} = pokemon;
                return (
                    <Card 
                    key={id}
                    pokemon={rest}
                    />
                )
            })}
        </div>
    );
};

export default CardList;
