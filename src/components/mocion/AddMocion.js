import React, { useState } from "react";
import MocionDataService from "./services/MocionService"

const AddMocion = () => {
    const initialMocionState = {
        id: null,
        texto: "",
        tipoMocion: "", //no se este xd
        //fecha: "",
    };

    const initialTipoMocionState = {
        id: null,
        descripcion: ""
    }

    const [mocion, setMocion] = useState(initialMocionState);
    const [currentTipoMocion, setCurrentTipoMocion] = useState(initialTipoMocionState);
    const [tipoMociones, settipoMociones] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMocion({ ...mocion, [name]: value });
    };
    const saveMocion = () => {
        var data = {
            //id: mocion.id,
            texto: mocion.texto,
            fecha: mocion.fecha,

        };
        MocionDataService.create(data, currentTipoMocion.id)
            .then((response) => {
                setMocion({
                    //  id: response.data.id,
                    texto: response.data.texto,
                    fecha: response.data.fecha,
                    //tipoMocion: response.data.tipoMocion,
                });
                setSubmitted(true);
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
                        <label htmlFor="identificacion">Identificacion</label>
                        <input
                            type="text"
                            className="form-control"
                            id="identificacion"
                            required
                            value={mocion.id}
                            onChange={handleInputChange}
                            name="identificacion"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombre">Texto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            required
                            value={mocion.texto}
                            onChange={handleInputChange}
                            name="nombre"
                        />
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
