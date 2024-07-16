import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const [confirmada, setConfirmada] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const confirmacionClic = () => {
    setConfirmada(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario, recargar la página.

    emailjs
      .send(
        "service_sx1exjf", // Service ID
        "template_fil95n9", //  Template ID
        formData,
        "98u0wS5siZu56Tylr" //  User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          confirmacionClic(); // Muestra el mensaje de confirmación
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="todo">
      <div className="contenido">
        <div className="contenidoFormulario">
          <div className="titulo">
            <h1>Contáctanos</h1>
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
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
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
            {confirmada && (
              <div className="confirmacion">
                <h2>Consulta enviada, gracias por su aporte.</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contenido2">
        <div className="mensajito">
          <h2 id="h2">Sobre nosotros</h2>
          <p className="p">
            Somos un equipo de desarrolladores que participó en el bootcamp de
            Generation Chile, donde trabajamos arduamente para completar este
            proyecto. Nos motiva profundamente el deseo de ayudar a la comunidad
            y mejorar la transparencia en el sector farmacéutico. Por ello,
            hemos creado una aplicación web diseñada para facilitar la
            comparación de precios de medicamentos entre diferentes farmacias de
            la comuna de Santiago, Chile.
          </p>
          <p className="p">
            Nuestra visión es proporcionar una plataforma que no solo beneficie
            a los usuarios, permitiéndoles encontrar la mejor opción para sus
            necesidades, sino también dar visibilidad a las farmacias más
            pequeñas, que a menudo pasan desapercibidas. Creemos que todos
            merecen acceso a medicamentos asequibles y de calidad, y nuestra
            herramienta busca hacer precisamente eso.
          </p>{" "}
          <p className="p">
            Invitamos a todos los usuarios a sumarse a nuestra comunidad,
            utilizando la aplicación para ahorrar en sus compras de medicamentos
            y mejorar su bienestar. Asimismo, extendemos una cálida invitación a
            las farmacias interesadas en unirse a nuestra base de datos, para
            que juntos podamos ofrecer una alternativa más justa y accesible
            para todos. ¡Únete a nosotros y se parte del cambio hacia un sistema
            de salud más inclusivo y eficiente!
          </p>{" "}
          <p className="p">Autores del Proyecto: </p>{" "}
          <p className="p">
            {" "}
            Fabián Torres - Gonzalo Pavez - Ignacio Morales - Jett Puga
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Contacto;
