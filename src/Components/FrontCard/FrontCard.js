import React from "react";
import './FrontCard.css';

const front_card = ({name}) => {
  return (
    <div className="front-card">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="bulbasaur"
      />
      <figcaption className="caption">{name}</figcaption>
    </div>
  );
};

export default front_card;
