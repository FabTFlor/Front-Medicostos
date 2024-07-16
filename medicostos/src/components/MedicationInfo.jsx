import React from "react";
import InfoCard from "./Card/InfoCard";

const MedicationInfo = ({ selectedMedication, cerrarInfoCard }) => {
  return (
    <div>
      {selectedMedication ? (
        <InfoCard
          medication={selectedMedication}
          cerrarInfoCard={cerrarInfoCard}
        />
      ) : (
        <p>Selecciona un medicamento para ver los detalles</p>
      )}
    </div>
  );
};

export default MedicationInfo;
