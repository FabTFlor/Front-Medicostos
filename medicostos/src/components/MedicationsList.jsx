import { useEffect, useState } from "react";
import { useSearchMedications } from "../hooks/useSearchMedications";
import MedicationCard from "./Card/MedicationCard";
import LoadingSpinner from "./configs/LoadingSpinner";
import "../../src/App.css";

const MedicationsList = ({ query, onMedicationSelect, onCardClick }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, error, isLoading } = useSearchMedications(query, currentPage);

  useEffect(() => {
    setCurrentPage(0); // Reinicia la página cuando cambia la consulta
  }, [query]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  const medications = data || [];

  const handleCardClick = (medication) => {
    onMedicationSelect(medication); // Pasamos la medicación seleccionada al componente padre
    onCardClick(); // Cambiamos las clases
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="medications-list">
      {medications.map((medication, index) => (
        <MedicationCard
          key={medication.id}
          medication={medication}
          index={index}
          onClick={() => handleCardClick(medication)}
        />
      ))}
      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Anterior
        </button>
        <button onClick={handleNext} disabled={medications.length < 4}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default MedicationsList;
