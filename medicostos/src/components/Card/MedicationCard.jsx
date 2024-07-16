import React from "react";
import "../Card/Card.css";

// Agregamos la propiedad onClick para manejar el evento de clic
const MedicationCard = ({ medication, index, onClick }) => {
  // const backgroundColor = index % 2 === 0 ? "var(--aqua)" : "var(--naranja)";
  const borderColor = index % 2 === 0 ? "var(--naranja)" : "var(--aqua)";

  return (
    <div
      className="card"
      style={{ border: `4px solid #ddd` }}
      onClick={onClick}
    >
      <img
        src={medication.farmaciaUrlImg}
        alt={medication.nombre}
        className="imgcard"
      />
      <div className="card-content">
        <h2>{medication.nombre}</h2>
        <h3>{medication.complemento}</h3>
        <div className="terceraL">
          <h3>{medication.farmaciaNombre}</h3>
          <p className="precio">
            <span className="text-precio">Precio: </span>${medication.precio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicationCard;
