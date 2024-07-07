import React, { useState } from "react";
import MedicationsList from "./MedicationsList";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for medications..."
      />
      <MedicationsList query={query} />
    </div>
  );
};

export default SearchBar;
