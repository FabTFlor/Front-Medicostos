import { useQuery } from "react-query";
import axios from "axios";

const fetchMedications = async (query) => {
  if (!query) {
    return []; // Retorna un array vacío si no hay query
  }
  const { data } = await axios.get(
    "http://localhost:8080/api/medications/search",
    {
      params: { query, page: 0, size: 24 },
    }
  );
  return data; // Asegúrate de que data sea un array de medicamentos
};

export const useSearchMedications = (query) => {
  return useQuery(["medications", query], () => fetchMedications(query), {
    enabled: !!query,
    onError: (error) => {
      console.error("Error fetching medications:", error);
    },
  });
};
