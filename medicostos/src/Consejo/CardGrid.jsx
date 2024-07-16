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
      title: "PedidosYa",
      content: "30% de descuento para usuarios Plus.",
      moreContent:
        "Disponible en PedidosYa para usuarios Plus: 30% de descuento en categoría restaurantes los lunes, en PedidosYa Market los miércoles, y en categoría farmacias los viernes.",
      image:
        "https://logowik.com/content/uploads/images/pedidosya5531.logowik.com.webp",
    },
    {
      title: "sbpay VISA",
      content: "20% Descuento Salcobrand.",
      moreContent:
        "Aprovecha este beneficio exclusivo con tu tarjeta sbpay visa de lunes a viernes hasta el 31 de diciembre de 2024 en farmacias salcobrand: 20% .",
      image:
        "https://www.sbpay.cl/content/themes/sb_pay/dist/images/sbpay-logo-dark.svg",
    },
    {
      title: "CMR Falabella",
      content: "Farmacias Ahumada 25% de dcto en medicamentos.",
      moreContent:
        "Válido hasta el 31 de diciembre de 2024. Oportunidades únicas todos los días. Disfrútala con todas tus tarjetas.",
      image: "https://www.bancofalabella.cl/assets/logo-bf-cmr-compact.svg",
    },
    {
      title: "BancoEstado",
      content:
        "Al comprar 3 productos iguales con tu tarjeta Banco Estado obten 33% dto.",
      moreContent:
        "De martes a domingo, compra 3 productos iguales y obtén un 33% de descuento en cada uno de los productos seleccionados.​",
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
