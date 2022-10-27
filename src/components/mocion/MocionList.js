import React, { useState, useEffect } from "react";
import MocionService from "./services/MocionService";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const MocionList = () => {
    const [mociones, setMocion] = useState([]);
    const [currentMocion, setCurrentMocion] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        retrieveMociones();
    }, []);

    const retrieveMociones = () => {
        MocionService.getAll()
            .then((response) => {
                setMocion(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const setActiveMosion = (mocion, index) => {
        setCurrentMocion(mocion);
        setCurrentIndex(index);
    };

    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Lista de Mociones</h4>
                <ul className="list-group">
                    {mociones &&
                        mociones.map((mocion, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveMosion(mocion, index)}
                                key={index}
                            >
                                {mocion.texto}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="col-md-6">
                {currentMocion ? (
                    <div>
                        <h4>Mocion</h4>
                        <div>
                            <label>
                                <strong>Identificacion:</strong>
                            </label>{" "}
                            {currentMocion.id}
                        </div>
                        <div>
                            <label>
                                <strong>Nombre:</strong>
                            </label>{" "}
                            {currentMocion.texto}
                        </div>
                        <Link to={"/mocion/mocion/" + currentMocion.id} className="btn-success">
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Escoja una mocion...</p>
                    </div>
                )}
            </div>


            <div className="container mt-3">

            </div>
        </div>
    );
};
export default MocionList;
/*<Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Tipos de Mociones
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>*/ 