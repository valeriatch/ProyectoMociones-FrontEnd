import React, { useState } from "react";
import TipoMocionDataService from "./services/TipoMocionServices";

const AddTipoMosion = () => {
    const initialTipoMosionState = {
        id: null,
        descripcion: "",
    };
    const [tipoMosion, setTipoMosion] = useState(initialTipoMosionState);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTipoMosion({ ...tipoMosion, [name]: value });
    };
    const saveTipoMosion = () => {
        var data = {
            id: tipoMosion.id,
            descripcion: tipoMosion.descripcion,

        };
        TipoMocionDataService.create(data)
            .then((response) => {
                setTipoMosion({
                    id: response.data.id,
                    descripcion: response.data.descripcion,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const newTipoMocion = () => {
        setTipoMosion(initialTipoMosionState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Almacenado Corretamente</h4>
                    <button className="btn btn-success" onClick={newTipoMocion}>
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
                            value={tipoMosion.id}
                            onChange={handleInputChange}
                            name="identificacion"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripcion</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            required
                            value={tipoMosion.descripcion}
                            onChange={handleInputChange}
                            name="descripcion"
                        />
                    </div>
                    <button onClick={saveTipoMosion} className="btn btn-success">
                        Enviar
                    </button>
                </div>
            )}
        </div>
    );
};
export default AddTipoMosion;