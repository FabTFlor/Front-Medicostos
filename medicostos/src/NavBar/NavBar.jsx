import React from 'react';
import "./NavBar.css";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <header>
        <div className="display-pc texto-logo">
            <a href="#">
                <img src={logo} alt="logo" className="icon-pc"/>
                Medicostos
            </a> 
        </div>
        <div className="display-mobile">
            <a href="index.html"><img src={logo} alt="logo" className="icon-mobile"/></a>
        </div>
        <nav className="display-pc">
            <a href="#">Inicio</a>
            <a href="#">Consejos</a>
            <a href="#">Contáctanos</a>
        </nav>
        <div className="display-mobile">
            <button onclick="abrir_nav()" className="btn-empty">
                <img src="../assets/menu" className="icon-mobile"/>
            </button>
        </div>
    </header>
  )
}

export default NavBar