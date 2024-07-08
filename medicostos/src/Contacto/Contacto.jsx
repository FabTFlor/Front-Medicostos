import React, { useState } from "react";
import "./Contacto.css";

function Contacto() {
  // Definimos el estado inicial del formulario usando useState.
  // Este estado guarda los valores de los campos del formulario.
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  // Función para manejar cambios en los campos del formulario.
  // Se ejecuta cada vez que el usuario escribe en un campo del formulario.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario.
  // Se ejecuta cuando el usuario envía el formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página).
    console.log("Form data submitted:", formData); // Imprime los datos del formulario en la consola.
    alert("consulta enviada, gracias por su aporte"); // Muestra una alerta indicando que el formulario fue enviado.
  };

  return (
    <div className="todo">
      <div className="contenido">
        <div className="contenidoFormulario">
          <div className="titulo">
            <h1>Contactanos</h1>
            <p>Ingresa tu consulta</p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="ayNoSe">
                <div className="inputs">
                  <div className="nombreApellido">
                    <p>
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre" // Asocia este textarea con el campo "nombre" en el estado
                        value={formData.nombre} // Vincula el valor del textarea con el estado actual.
                        onChange={handleChange} // // Actualiza el estado cuando el usuario escribe.
                        required
                      />
                    </p>
                    <p>
                      <label htmlFor="apellido">Apellido</label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                      />
                    </p>
                  </div>
                  <p>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </p>
                  <p>
                    <label htmlFor="mensaje">Tu mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </p>
                </div>
                <div className="enviar">
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contenido2">
        <div className="mensajito">
          <h2>Sobre nosotros</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
