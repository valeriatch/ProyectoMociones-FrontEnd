import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddMocion from "./AddMocion";
import Mocion from "./model/Mocion"
import MocionList from "./MocionList";
import TipoMocionApp from "./tipoMocion/TipoMocionApp"

function MocionApp() {
    return (
        <div className="MocionApp">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    Atrász
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/mocion"} className="nav-link">
                            Lista de Mociones
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/mocion/add"} className="nav-link">
                            Agregar Mocion
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/tipo_mocion"} className="nav-link">
                            Tipo Mocion
                        </Link>
                    </li>
                </div>
            </nav>

            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<MocionList />} />
                    <Route path="/mocion" element={<MocionList />} />
                    <Route path="/add" element={<AddMocion />} />
                    <Route path="/mocion/:id" element={<Mocion />} />
                    <Route path="/tipo_mocion" element={<TipoMocionApp />} />
                </Routes>
            </div>
        </div>
    );
}

export default MocionApp;