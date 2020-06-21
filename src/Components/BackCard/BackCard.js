import React from "react";
import "./BackCard.css";
import Pie from "../Pie/Pie";


const BackCard = ({abilities, stats, types }) => {
  return (
    <div className="back-card">
      <span style={{alignSelf: "center", paddingTop: "5px", fontWeight: "bolder"}}>Base Stats</span>
      <Pie
      stats={stats}
      />
      <span>
        {`Types: ${types.join(", ")}`}
      </span>
      <span>
        {`Abilities: ${abilities.join(", ")}`}
      </span>
    </div>
  );
};


export default BackCard;
