import http from "../../../http-common";
const getAll = () => {
    return http.get("/mocion");
};
//buscar mocion por id
const get = id => {
    return http.get(`/mocion/${id}`);
};
const create = (data, idTipo) => {
    return http.put(`/mocion/${idTipo}`, data);
};
//no se si esto esta bien xd
const update = (data, idTipo) => {
    return http.put(`/mocion/${idTipo}`, data);
};

const updatetipo = (idMocion, idTipo) => {
    return http.put(`/mociontipo/${idTipo}/${idMocion}`);
};
const remove = id => {
    return http.delete(`/mocion/${id}`);
};

const MocionService = {
    getAll,
    get,
    create,
    update,
    remove
};
export default MocionService;