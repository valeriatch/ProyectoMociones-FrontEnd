import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddPersona from "./components/persona/AddPersona";
import Persona from "./components/persona/model/Persona";
import PersonaList from "./components/persona/PersonaList";
import LogList from "./components/log/LogList";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/personas" className="navbar-brand">
          UNA
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/personas"} className="nav-link">
              Lista de Personas
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Agregar Persona
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/log"} className="nav-link">
              Ver Log
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PersonaList/>}/>
          <Route path="/personas" element={<PersonaList/>}/>
          <Route path="/add" element={<AddPersona/>}/>
          <Route path="/personas/:id" element={<Persona/>}/>
          <Route path="/log" element={<LogList/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
