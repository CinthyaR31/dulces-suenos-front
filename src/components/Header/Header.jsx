import React from 'react'
import img from '../../assets/images/logo.png';
import Autenticacion from "../Autenticacion/Autenticacion";

import './Header.css';
import Home from "../../pages/home/home";

export default function Header() {

    return (
        // <!-- MENU ENCABEZADO-->
        <nav className="navbar navbar-expand-lg navbar-light bg-color-menu">
            <img src={img} alt="Logo Dulces Suenos" width="200" />
            <a className="navbar-brand" href="/#">
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a className="nav-link" href="/#">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#Seccion_especialidades">Especialidades</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#Creaciones">Creaciones</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#Tabla_precios">Tabla de precios</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#footer">Contacto</a></li>
                </ul>
            </div>

            <Autenticacion />
        </nav>
    )
}
