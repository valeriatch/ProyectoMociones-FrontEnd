import React, { useState, useEffect } from "react";
import MocionDataService from "./services/MocionService"
import TipoMocionService from "./tipoMocion/services/TipoMocionServices";
const AddMocion = () => {
    const initialMocionState = {
        id: null,
        texto: "",
        //tipoMocion: "", //no se este xd
        fecha: "",
    };

    const initialTipoMocionState = {
        id: null,
        descripcion: ""
    }

    useEffect(() => {
        retrieveTipoMociones();

    }, []);

    const [mocion, setMocion] = useState(initialMocionState);
    const [currentTipoMocion, setCurrentTipoMocion] = useState(initialTipoMocionState);
    const [tipoMociones, settipoMociones] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMocion({ ...mocion, [name]: value });
    };

    const handleInputChange1 = (event) => {
        const { name, value } = event.target;
        setCurrentTipoMocion({ ...currentTipoMocion, [name]: value });
    };
    const saveMocion = () => {
        var data = {
            id: mocion.id,
            texto: mocion.texto,
            fecha: mocion.fecha,

        };
        MocionDataService.create(data, currentTipoMocion.id)
            .then((response) => {
                setMocion({
                    id: response.data.id,
                    texto: response.data.texto,
                    fecha: response.data.fecha,
                    //tipoMocion: response.currentTipoMocion.id,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const retrieveTipoMociones = () => {
        TipoMocionService.getAll()
            .then((response) => {
                settipoMociones(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const newMocion = () => {
        setMocion(initialMocionState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Almacenado Corretamente</h4>
                    <button className="btn btn-success" onClick={newMocion}>
                        Agregar
                    </button>
                </div>
            ) : (
                <div>

                    <div className="form-group">
                        <label htmlFor="nombre">Texto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="texto"
                            required
                            value={mocion.texto}
                            onChange={handleInputChange}
                            name="texto"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Fecha">Fecha</label>
                        <input
                            type="date"
                            className="form-control"
                            id="fecha"
                            required
                            value={mocion.fecha}
                            onChange={handleInputChange}
                            name="fecha"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipomocion">Tipos de Mociones</label>
                        <select id="id " class="form-select form-select-lg mb-3"
                            name="id" onChange={handleInputChange1}>
                            <option value="0" >
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
                    <button onClick={saveMocion} className="btn btn-success">
                        Enviar
                    </button>
                </div>
            )}
        </div>
    );
};
export default AddMocion;
