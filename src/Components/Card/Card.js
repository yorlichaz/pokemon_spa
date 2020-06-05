import React from "react";
import FrontCard from "../FrontCard/FrontCard";
import "./Card.css";
import BackCard from "../BackCard/BackCard";

const card = ({name}) => {
  return (
    <div className="card">
      <div className="inner">
        <FrontCard name={name}/>
        <BackCard/>
      </div>
    </div>
  );
};

export default card;
