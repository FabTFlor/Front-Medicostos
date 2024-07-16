import React from "react";
import "./Consejo.css";

const Consejo = ({ title, content, moreContent, image, expanded, onClick }) => {
  return (
    <div className={`portada ${expanded ? "expanded" : ""}`} onClick={onClick}>
      <img src={image} alt="Card" className="portada-image" />
      <div className="portada-content">
        <h2>{title}</h2>
        <p>{content}</p>
        {expanded && <p className="more-content">{moreContent}</p>}
      </div>
    </div>
  );
};

export default Consejo;
