import React, { Fragment } from 'react';
import './Card.css'


const card = () => {
  return (
      <div className="card">
        <div className="inner">
          <div className="front-card">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="bulbasaur"
            />
            <figcaption className="caption">bulbasaur</figcaption>
          </div>
          <div className="back-card">
            <p> Type: Grass</p>
            <p> Test </p>
          </div>
        </div>
        </div>
  );
};

export default card;