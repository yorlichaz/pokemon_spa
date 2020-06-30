import React from "react";
import "./BackCard.css";
import Pie from "../Pie/Pie";


const BackCard = ({abilities, stats, types }) => {
  return (
    <div className="back-card">
      <span style={{alignSelf: "center", paddingTop: "5px", fontWeight: "bolder"}}>Base Stats</span>
      <Pie
      data-testid="stats-pie"
      syle={{flexBasis: "50%"}}
      stats={stats}
      />
      <span data-testid= "types-test">
        {`Types: ${types.join(", ")}`}
      </span>
      <span data-testid= "abilities-test">
        {`Abilities: ${abilities.join(", ")}`}
      </span>
    </div>
  );
};


export default BackCard;
