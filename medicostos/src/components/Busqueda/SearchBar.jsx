import React, { useState, useEffect } from "react";
import "./Search.css";
import MedicationsList from "../MedicationsList";
import MedicationInfo from "../MedicationInfo";

const SearchBar = ({ setIsScrolled }) => {
  const [query, setQuery] = useState("");
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Ajusta el tiempo según tus necesidades

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

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
        className={`app-container ${!debouncedQuery ? "hidden" : ""} ${
          isSelected ? "selected" : ""
        }`}
      >
        <div className={`med-list ${isSelected ? "selected" : ""}`}>
          {debouncedQuery && (
            <MedicationsList
              query={debouncedQuery}
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
