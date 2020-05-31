import React from "react";
import './FrontCard.css';

const front_card = () => {
  return (
    <div className="front-card">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="bulbasaur"
      />
      <figcaption className="caption">bulbasaur</figcaption>
    </div>
  );
};

export default front_card;
