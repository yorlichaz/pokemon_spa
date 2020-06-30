import React from "react";
import './FrontCard.css';

const FrontCard = ({name, image}) => {
  return (
    <div className="front-card">
      <img
        data-testid="avatar-img"
        src={image}
        alt={name}
      />
      <figcaption className="caption" data-testid="avatar-name">{name}</figcaption>
    </div>
  );
};

export default FrontCard;
