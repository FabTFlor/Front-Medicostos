import React, { useState, useEffect } from "react";
import "./Portada.css";
import farmacia from "../assets/farmacia.jpg";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchBar from "../components/Busqueda/SearchBar";
import ErrorBoundary from "../components/configs/ErrorBoundary";

const queryClient = new QueryClient();

function Portada() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isScrolled) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [isScrolled]);

  return (
    <>
      <div className={`front ${isScrolled ? "scrolled" : ""}`}>
        <div id="portada">
          <img id="imagenPortada" src={farmacia} alt="Farmacia" />
          <div id="lema">
            <b>Nuestra meta es informar a las personas: </b>
            <span className="span">
              Para que tomen decisiones informadas sobre dónde comprar sus
              medicamentos.
            </span>
          </div>
        </div>
      </div>

      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <div
            className={`search-results-container ${isScrolled ? "active" : ""}`}
          >
            <SearchBar setIsScrolled={setIsScrolled} />
          </div>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
}

export default Portada;
