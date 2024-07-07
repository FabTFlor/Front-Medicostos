import React from "react";
import { useSearchMedications } from "../hooks/useSearchMedications";
import MedicationCard from "./MedicationCard";
import LoadingSpinner from "./LoadingSpinner";

const MedicationsList = ({ query }) => {
  const { data, error, isLoading } = useSearchMedications(query);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  const medications = data || [];

  return (
    <div className="medications-list">
      {medications.map((medication, index) => (
        <MedicationCard
          key={medication.id}
          medication={medication}
          index={index}
        />
      ))}
    </div>
  );
};

export default MedicationsList;
