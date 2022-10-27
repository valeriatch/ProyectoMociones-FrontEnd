import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PersonaApp from "./components/persona/PersonaApp";
import LogList from "./components/log/LogList";
import MocionApp from "./components/mocion/MocionApp";
import TipoMocionApp from "./components/mocion/tipoMocion/TipoMocionApp";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/personas" className="navbar-brand">
          UNA
        </a>
        <div className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link to={"/log"} className="nav-link">
              Ver Log
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/persona"} className="nav-link">
              Persona
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/mocion"} className="nav-link">
              Mocion
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/log" element={<LogList />} />
          <Route path="/persona/*" element={<PersonaApp />} />
          <Route path="/mocion/*" element={<MocionApp />}></Route>
          <Route path="/tipo_mocion/*" element={<TipoMocionApp />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
