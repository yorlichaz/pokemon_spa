import React from "react";
import FrontCard from "../FrontCard/FrontCard";
import "./Card.css";
import BackCard from "../BackCard/BackCard";

const card = () => {
  return (
    <div className="card">
      <div className="inner">
        <FrontCard/>
        <BackCard/>
      </div>
    </div>
  );
};

export default card;
