import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";
import menu_icon from "../../assets/menu.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const navRef = React.useRef();
  const abrirNav = () => {
    navRef.current.style.display = "flex";
  };
  const cerrarNav = () => {
    navRef.current.style.display = "none";
  };

  return (
    <>
      <div id="navegador" ref={navRef}>
        <button onClick={cerrarNav} id="btnCerrar">
          Cerrar
        </button>
        <Link to="/" className="linksNav" onClick={cerrarNav}>
          Inicio
        </Link>
        <Link to="/consejos" className="linksNav" onClick={cerrarNav}>
          Consejos
        </Link>
        <Link to="/contactanos" className="linksNav" onClick={cerrarNav}>
          Contáctanos
        </Link>
      </div>
      <header>
        <div className="display-pc texto-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="icon-pc" />
            Medicostos
          </Link>
        </div>
        <div className="display-mobile">
          <Link to="/">
            <img src={logo} alt="logo" className="icon-mobile" />
          </Link>
        </div>
        <nav className="display-pc">
          <Link to="/">Inicio</Link>
          <Link to="/consejos">Consejos</Link>
          <Link to="/contactanos">Contáctanos</Link>
        </nav>
        <div className="display-mobile">
          <button onClick={abrirNav} className="btn-empty">
            <img src={menu_icon} className="icon-mobile" />
          </button>
        </div>
      </header>
    </>
  );
}

/* function abrir_nav() {
  document.getElementById(navegador).style.display = "flex";
}

function cerrar_nav() {
  document.getElementById({navegador}).style.display = "none";
} */

export default NavBar;
