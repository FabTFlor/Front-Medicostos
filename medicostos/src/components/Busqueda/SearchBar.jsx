import React, { useState } from "react";
import "./2222.css";
import MedicationsList from "../MedicationsList";

const SearchBar = ({ setIsScrolled }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <section id="busqueda">
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar Medicamento..."
        />
        <MedicationsList query={query} />
      </div>
    </section>
  );
};

export default SearchBar;
