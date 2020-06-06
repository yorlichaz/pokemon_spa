import React from "react";
import "./BackCard.css";
import {PieChart} from 'react-minimal-pie-chart';

const BackCard = ({abilities, stats, types }) => {
  const colors = ["yellow","green","blue","red","orange","gray"]

  return (
    <div className="back-card">
      <PieChart data={ stats.map((stat, i) =>{
        return {
          title: stat.name,
          value: stat.value,
          color: colors[i],
          key: i,
        }
      })}/>
      <p>
        Types:{" "} 
        {types.map((type, id) => {
          return <span key={id}>{type.name}, </span>;
        })}
      </p>
      <p> Evolution: WIP </p>
      <p>
        Abilities:
        {abilities.map((ability,id) => {
          return <span key={id}>{ability.name}</span>;
        })}
      </p>
    </div>
  );
};


export default BackCard;
