import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTipoMocion from "./AddTipoMocion";
import TipoMocion from "./model/TipoMocion"
import TipoMocionList from "./TipoMocionList";
//import TipoMocionApp from "./tipoMocion/TipoMocionApp"

function TipoMocionApp() {
    return (
        <div className="TipoMocionApp">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/mocion" className="navbar-brand">
                    Atrás
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/tipo_mocion"} className="nav-link">
                            Lista de Tipos de Mociones
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/tipo_mocion/agregar"} className="nav-link">
                            Agregar Tipo de Mocion
                        </Link>
                    </li>

                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<TipoMocionList />} />
                    <Route path="/tipo_mocion" element={<TipoMocionList />} />
                    <Route path="/agregar" element={<AddTipoMocion />} />
                    <Route path="/tipo_mocion/:id" element={<TipoMocion />} />
                    <Route path="/tipo_mocion" element={<TipoMocionApp />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default TipoMocionApp;