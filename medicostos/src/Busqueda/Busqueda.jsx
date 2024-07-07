import React from 'react';
import { useState } from 'react';
import "./Busqueda.css";
import Autocompletar from './Autocompletar';  //ordenar alfabeticamente, y quizás que solo salga la incial?

function Busqueda() {
  const [medicamento, setMedicamento] = useState('');
  return (
    <section id="busqueda">
            <div id="busqueda-container">
                <Autocompletar suggestions={["Paracetamol", "Ibuprofeno", "Aspirina", "Amoxicilina", "Diclofenaco", "Ketoprofeno"]}/>
            </div>
    </section>
  )
}



window.onscroll = function() {scrollBusqueda()};

function scrollBusqueda() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("busqueda").style.marginTop = "400px";
  } else {
    document.getElementById("busqueda").style.marginTop = "20px";
  }
}

export default Busqueda