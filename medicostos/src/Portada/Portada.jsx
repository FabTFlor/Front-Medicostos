import React from 'react'
import "./Portada.css"
import farmacia from "../assets/farmacia.jpg"

function Portada() {
  return (
    <div id="portada">
            <img id="imagenPortada" src={farmacia} />
            <div id="lema">
                <b>Nuestra meta es informar a las personas: </b><br/>
                <span>Para que tomen decisiones informadas sobre dónde comprar sus medicamentos</span>
            </div>
    </div>
  )
}

export default Portada