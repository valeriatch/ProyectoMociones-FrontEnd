import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddPersona from "./AddPersona";
import Persona from "./model/Persona";
import PersonaList from "./PersonaList";
function PersonaApp() {
  return (
    <div className="PersonaApp">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Atrás
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/persona/personas"} className="nav-link">
              Lista de Personas
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/persona/add"} className="nav-link">
              Agregar Persona
            </Link>
          </li>

        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PersonaList />} />
          <Route path="/personas" element={<PersonaList />} />
          <Route path="/add" element={<AddPersona />} />
          <Route path="/personas/:id" element={<Persona />} />

        </Routes>
      </div>
    </div>
  );
}

export default PersonaApp;
