import React, { useState } from "react";
import "./2222.css";
import MedicationsList from "../MedicationsList";
import MedicationInfo from "../MedicationInfo";

const SearchBar = ({ setIsScrolled }) => {
  const [query, setQuery] = useState("");
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMedicationSelect = (medication) => {
    setSelectedMedication(medication);
  };

  const handleCardClick = () => {
    setIsSelected(true);
  };

  const cerrarInfoCard = () => {
    setIsSelected(false);
    setSelectedMedication(null); // Opcional: Desselecciona el medicamento actual
  };

  return (
    <section>
      <div className="busqueda">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar Medicamento..."
        />
      </div>
      <div
        className={`app-container ${!query ? "hidden" : ""} ${
          isSelected ? "selected" : ""
        }`}
      >
        <div className={`med-list ${isSelected ? "selected" : ""}`}>
          {query && (
            <MedicationsList
              query={query}
              onMedicationSelect={handleMedicationSelect}
              onCardClick={handleCardClick}
            />
          )}
        </div>
        <div className={`medications-info ${!isSelected ? "hidden" : ""}`}>
          {selectedMedication && (
            <MedicationInfo
              selectedMedication={selectedMedication}
              cerrarInfoCard={cerrarInfoCard}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
