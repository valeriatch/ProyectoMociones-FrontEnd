import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Persona from "./components/persona/model/Persona";
import PersonaList from "./components/persona/PersonaList";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/personas" className="navbar-brand">
          Persona
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/personas"} className="nav-link">
              Lista de Personas
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PersonaList />} />
          <Route path="/personas" element={<PersonaList />} />
          <Route path="/personas/:id" element={<Persona/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
