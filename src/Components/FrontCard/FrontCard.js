import React from "react";
import './FrontCard.css';

const FrontCard = ({name, image}) => {
  return (
    <div className="front-card">
      <img
        src={image}
        alt={name}
      />
      <figcaption className="caption">{name}</figcaption>
    </div>
  );
};

export default FrontCard;
