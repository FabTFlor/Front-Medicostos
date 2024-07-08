import React from "react";
import "../Card/Card.css";

const MedicationCard = ({ medication, index }) => {
  const backgroundColor = index % 2 === 0 ? "var(--aqua)" : "var(--naranja)";

  return (
    <div className="card" style={{ backgroundColor }}>
      <img
        src={medication.farmaciaUrlImg}
        alt={medication.nombre}
        className="imgcard"
      />
      <h2>{medication.nombre}</h2>
      <p>{medication.complemento}</p>
      <p>Precio: ${medication.precio}</p>
    </div>
  );
};

export default MedicationCard;
