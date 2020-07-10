import React from "react";
import FrontCard from "../FrontCard/FrontCard";
import "./Card.css";
import BackCard from "../BackCard/BackCard";

const Card = ({id, pokemon}) => {
  return (
    <div className="card" key={id}>
      <div className="inner" data-testid="card-info">
        <FrontCard name={pokemon.name} image={pokemon.image}/>
        <BackCard abilities={pokemon.abilities} stats={pokemon.stats} types={pokemon.types}/>
      </div>
    </div>
  );
};

export default Card;
