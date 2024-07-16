import { useQuery } from "react-query";
import axios from "axios";

const fetchMedications = async (query, page) => {
  if (!query) {
    return []; // Retorna un array vacío si no hay query
  }
  const { data } = await axios.get(
    "http://localhost:8080/api/medications/search",
    {
      params: { query, page, size: 4 },
    }
  );
  return data; // Asegúrate de que data sea un array de medicamentos
};

export const useSearchMedications = (query, page) => {
  return useQuery(
    ["medications", query, page],
    () => fetchMedications(query, page),
    {
      enabled: !!query,
      onError: (error) => {
        console.error("Error fetching medications:", error);
      },
    }
  );
};
