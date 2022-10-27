import React, { useState, useEffect } from "react";
import TipoMocionDataService from "./services/TipoMocionServices";
import { Link } from "react-router-dom";
const TipoMocionList = () => {
    const [tipoMociones, setTipoMociones] = useState([]);
    const [currentTipoMocion, setCurrentTipoMocion] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        retrieveTipoMociones();
    }, []);

    const retrieveTipoMociones = () => {
        TipoMocionDataService.getAll()
            .then((response) => {
                setTipoMociones(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    /*
    const refreshList = () => {
      retrievePersonas();
      setCurrentPersona(null);
      setCurrentIndex(-1);
    };
    */

    const setActiveTipoMocion = (tipoMociones, index) => {
        setCurrentTipoMocion(tipoMociones);
        setCurrentIndex(index);
    };

    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Lista de Tipos Mociones</h4>
                <ul className="list-group">
                    {tipoMociones &&
                        tipoMociones.map((tipoMociones, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveTipoMocion(tipoMociones, index)}
                                key={index}
                            >
                                {tipoMociones.descripcion}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="col-md-6">
                {currentTipoMocion ? (
                    <div>
                        <h4>Tipo Mocion</h4>
                        <div>
                            <label>
                                <strong>Identificacion:</strong>
                            </label>{" "}
                            {currentTipoMocion.id}
                        </div>
                        <div>
                            <label>
                                <strong>Descripcion:</strong>
                            </label>{" "}
                            {currentTipoMocion.descripcion}
                        </div>
                        <Link to={"/tipo_mocion/tipo_mocion/" + currentTipoMocion.id} className="btn-success">
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Escoja un tipo de mocion...</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default TipoMocionList;
