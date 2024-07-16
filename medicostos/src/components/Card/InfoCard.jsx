import React from "react";
import "./InfoCard.css";
import salcobrand from "../../assets/farmaciasSalcobrand.png";
import ecofarmacias from "../../assets/ecofarmacias.png";
import ahumada from "../../assets/farmaciasAhumada.png";
import farmaciasChile from "../../assets/farmaciasChile.png";
import drSimi from "../../assets/farmaciasDrSimi.png";
import bokita from "../../assets/farmaciasLaBokita.png";

const InfoCard = ({ medication, cerrarInfoCard }) => {
  // Función para manejar el clic en el botón, abriendo el enlace en una nueva pestaña
  const linkClick = () => {
    window.open(medication.urlMedicamento, "_blank"); // Abre la URL en una nueva pestaña
  };

  // Función para manejar el clic en la imagen del mapa, abriendo el enlace en una nueva pestaña
  const mapClick = () => {
    window.open(medication.farmaciaDireccion, "_blank"); // Abre la URL de la dirección en una nueva pestaña
  };

  // Función para obtener la imagen de la farmacia según el nombre
  const getFarmaciaImage = (farmaciaNombre) => {
    switch (farmaciaNombre) {
      case "Salcobrand":
        return salcobrand;
      case "Eco Farmacias":
        return ecofarmacias;
      case "Farmacias Ahumada":
        return ahumada;
      case "Farmacias Chile":
        return farmaciasChile;
      case "Farmacias del Dr. Simi":
        return drSimi;
      case "Farmacia La Botika":
        return bokita;
      default:
        return null;
    }
  };

  return (
    <div className="a">
      <div className="b">
        <img
          className="imgMedicamento"
          src={medication.urlImagen}
          alt={medication.nombre}
        />
        <h5>{medication.nombre}</h5>
        <h6>{medication.complemento}</h6>
        <p>{medication.farmaciaNombre}</p>
        <h1>Precio: ${medication.precio}</h1>

        <button className="botonMap" onClick={linkClick}>
          Ir a sitio web
        </button>
        <p>Ubicación</p>
        <img
          className="map"
          src={getFarmaciaImage(medication.farmaciaNombre)}
          onClick={mapClick}
        />
        <button onClick={cerrarInfoCard} className="cerrar">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
