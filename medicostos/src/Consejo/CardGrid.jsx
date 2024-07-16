import React, { useState } from "react";
import Consejo from "./Consejo";
import "./CardGrid.css";

const CardGrid = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      title: "Caja Los Andes",
      content: "Farmacias Ahumada. Hasta 45% dcto.",
      moreContent:
        "45% de descuento en medicamentos genéricos, 25% de descuento en recetario magistral y servicios de enfermería.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Logotipo_Caja_Los_Andes.svg",
    },
    {
      title: "Los Héroes",
      content:
        "Con tu tarjeta de Los Héroes, disfruta de descuentos especiales en medicamentos los días martes y jueves.",
      moreContent:
        "Los Héroes te ayuda a cuidar tu salud con descuentos en medicamentos en farmacias seleccionadas.",
      image: "https://www.losheroes.cl/img/logo_app_videollamada.png",
    },
    {
      title: "BCI",
      content:
        "Con tu tarjeta BCI, obtén descuentos en medicamentos los días lunes y miércoles.",
      moreContent:
        "Ahorra en tus compras de medicamentos utilizando tu tarjeta BCI en farmacias adheridas.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bci_Logotype.svg/2560px-Bci_Logotype.svg.png",
    },
    {
      title: "Santander",
      content:
        "Santander te ofrece descuentos exclusivos en medicamentos cada fin de semana.",
      moreContent:
        "Con tu tarjeta Santander, tienes descuento en medicamentos los días viernes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png",
    },
    {
      title: "BancoEstado",
      content:
        "Aprovecha los beneficios de BancoEstado y ahorra en tus medicamentos en farmacias asociadas.",
      moreContent:
        "Con tu tarjeta BancoEstado, disfruta de descuentos en medicamentos los días lunes y viernes.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_BancoEstado.svg/2560px-Logo_BancoEstado.svg.png",
    },
    {
      title: "MACH",
      content: "20% dcto en Salcobrand pagando con MACH.",
      moreContent:
        "Paga con mach desde tu celular con notificación push y obtén hasta 20% de descuento los días lunes y martes en tus compras presenciales en farmacias salcobrand.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHs3qHKQqWSyqL3ASngR5tETsllJFoXHG95w&s",
    },
  ];

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
      <h2 className="subtitulo">Glosario</h2>
      <dl className="texto">
        <dt>Medicamento Bioequivalente o Bioequivalente de Marca</dt>
        <dd>
          Un medicamento bioequivalente tiene el mismo principio activo que el
          medicamento original. Son respaldados por estudios científicos
          certificados por el Insituto de Salud Pública (<abbr>ISP</abbr>) que
          garantizan que el efecto es el mismo en el paciente.
          {/* <br /><a href="https://www.sernac.cl/portal/604/w3-article-64747.html">Fuente.</a> */}
        </dd>
        <dt>Medicamento Genérico o Bioequivalente Genérico</dt>
        <dd>
          Tiene el mismo principo activo, y es una copia del original luego de
          que caduca la patente. No todos los medicamentos genéricos tienen el
          sello de bioequivalencia. Ejemplo: Paracetamol.
        </dd>
        <dt>Medicamento de Marca, original o referente</dt>
        <dd>
          Es el remedio original, y su precio refleja los costos de
          investigación y estudios.
        </dd>
        <dt>
          Uso Racional de Medicamentos (<abbr>URM</abbr>)
        </dt>
        <dd>
          Significa que "los pacientes reciben fármacos apropiados para sus
          necesidades clínicas, a dosis ajustadas a su situación particular,
          durante un periodo adecuado de tiempo y al mínimo costo posible para
          ellos y para la comunidad", según la{" "}
          <abbr title="Organización Mundial de la Salud">
            <a
              href="https://apps.who.int/gb/ebwha/pdf_files/EB118/B118_6-sp.pdf"
              target="_blank"
            >
              OMS
            </a>
          </abbr>
          . En otras palabras, se refiere al uso correcto de los medicamentos y
          el compartir información relevante en la administración del fármaco
          por parte del médico como del paciente.
        </dd>
      </dl>
      <h2 className="subtitulo">Consejos a la hora de comprar medicamentos</h2>
      <ul className="texto">
        <li>Nunca te automediques.</li>
        <li>Sigue las instrucciones de tu médico.</li>
        <li>
          Es importante cotizar antes de comprar, ya que la diferencia entre
          medicamentos bioequivalentes puede ser altísima.
        </li>
        <li>
          La Ley de Fármacos obliga a las farmacias a disponer de alternativas
          bioequivalentes.
        </li>
        <li>
          Puedes reconocer un medicamento bioequivalente por su sello amarillo y
          rojo.
        </li>
        <li>
          Para saber si tu seguro cubre un medicamento recetado, revisa los
          documentos del plan o llama al número que aparece en la tarjeta del
          seguro.
        </li>
      </ul>
      <h2 className="subtitulo">Descuentos</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Consejo
            key={index}
            {...card}
            expanded={expandedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default CardGrid;
