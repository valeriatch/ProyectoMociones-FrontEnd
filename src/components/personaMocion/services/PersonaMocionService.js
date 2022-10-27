import http from "../../../http-common";
//listar personas mociones
const getAll = () => {
    return http.get("/persona_mocion");
};
//listar mociones por persona
const getMociones = id => {
    return http.get(`/persona_mocion/persona/${id}`);
};
//listar personas por mocion
const getPersonas = id => {
    return http.get(`/persona_mocion/mocion/${id}`);
};
//guardar personas mocion, validacion
const create = (idpersona, idmocion) => {
    return http.post(`/persona_mocion/${idpersona}/${idmocion}`);
};
//no se si esto esta bien xd, lo cambie xd
/*const update = (id, data) => {
    return http.put(`/tipo_mocion/${id}`, data);
};*/
const remove = id => {
    return http.delete(`/persona_mocion/${id}`);
};

const PersonaMocionService = {
    getAll,
    getMociones,
    getPersonas,
    create,
    //update,
    remove
};
export default PersonaMocionService;