import React from "react";
import "./BackCard.css";

const back_card = () => {
  return (
    <div className="back-card">
      <dl className='stats-grid'>
        <dt>Base Stats</dt>
        <dd>Hp: 50</dd>
        <dd>Attack: 50</dd>
        <dd>Defence: 50</dd>
        <dd>Spec Attk: 50</dd>
        <dd>Spec Def: 50</dd>
        <dd>Speed: 50</dd>
      </dl>
      <p> Type: Grass </p>
      <p> Evolution: Ivysaur </p>
      <p> Ability: Stuff </p>
    
    </div>
  );
};

export default back_card;
