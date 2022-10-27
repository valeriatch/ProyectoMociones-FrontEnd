import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MocionDataService from "../services/MocionService";
import TipoMocionService from "../tipoMocion/services/TipoMocionServices";
import Dropdown from 'react-bootstrap/Dropdown';
import TipoMocion from "../tipoMocion/model/TipoMocion";
const Mocion = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const initialMocionState = {
        id: null,
        texto: "",
        fecha: "",
        tipomocion: null,
        tipoMocion: TipoMocion
    };
    const initialTipoMocionState = {
        id: null,
        descripcion: ""
    }

    const [currentMocion, setCurrentMocion] = useState(initialMocionState);
    const [currentTipoMocion, setCurrentTipoMocion] = useState(initialTipoMocionState);
    const [tipoMociones, setTipoMociones] = useState([]);
    const [message, setMessage] = useState("");
    const getMocion = (id) => {
        MocionDataService.get(id)
            .then((response) => {
                setCurrentMocion(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id) getMocion(id);
        retrieveTipoMociones();
    }, [id]);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentMocion({ ...currentMocion, [name]: value });
    };



    const updateMocion = () => {
        var data = {
            id: currentMocion.id,
            texto: currentMocion.texto,
            fecha: currentMocion.fecha,

        };
        MocionDataService.update(data, currentMocion.tipomocion)
            .then((response) => {
                console.log(response.data);
                setMessage("La mocion fue actualizada");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const retrieveTipoMociones = () => {
        TipoMocionService.getAll()
            .then((response) => {
                setTipoMociones(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deleteMocion = () => {
        MocionDataService.remove(currentMocion.id)
            .then((response) => {
                console.log(response.data);
                navigate("/mocion");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentMocion ? (
                <div className="edit-form">
                    <h4>Mocion</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Texto</label>
                            <input
                                type="text"
                                className="form-control"
                                id="texto"
                                name="texto"
                                value={currentMocion.texto}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha">Fecha</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha"
                                name="fecha"
                                value={currentMocion.fecha}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <select id="tipomocion " class="form-select form-select-lg mb-3"
                                name="tipomocion" onChange={handleInputChange}>
                                <option value ="0" >
                                    Tipos de Mociones
                                </option>
                                
                                    {tipoMociones.map((tipomocion, index) => {
                                        return (
                                            <option default={tipomocion.id} key={index} value={tipomocion.id} >
                                                {tipomocion.descripcion}
                                            </option>
                                        )
                                    })}
                                
                            </select>
                        </div>
                    </form>

                    <button className="btn btn-danger" onClick={deleteMocion}>
                        Borrar
                    </button>
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={updateMocion}
                    >
                        Actualizar
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Seleccione una mocion...</p>
                </div>
            )}
        </div>
    );
};
export default Mocion;
