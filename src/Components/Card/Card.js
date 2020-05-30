import React from "react";
import FrontCard from "./FrontCard";
import "./Card.css";
import BackCard from "./BackCard";

const card = () => {
  return (
    <div className="card">
      <div className="inner">
        <FrontCard />
        <BackCard />
      </div>
    </div>
  );
};

export default card;
