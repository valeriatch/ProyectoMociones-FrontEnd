import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import PersonaMocionList from "./PersonaMocionList";
import AddPersonaMocion from "./AddPersonaMocion";
import PersonaMocion from "./model/PersonaMocion";
function PersonaMocionApp() {
    return (
        <div className="PersonaApp">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    Atrás
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/persona_mocion"} className="nav-link">
                            Lista de Personas-Mociones
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/persona_mocion/add"} className="nav-link">
                            Asociar Persona Mocion
                        </Link>
                    </li>

                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<PersonaMocionList />} />
                    <Route path="/persona_mocion" element={<PersonaMocionList />} />
                    <Route path="/add" element={<AddPersonaMocion />} />
                    <Route path="/persona_mocion/:id" element={<PersonaMocion />} />
                </Routes>
            </div>
        </div>
    );
}

export default PersonaMocionApp;
