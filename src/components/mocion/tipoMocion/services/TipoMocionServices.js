import http from "../../../../http-common";
const getAll = () => {
    return http.get("/tipo_mocion");
};
//buscar mocion por id
const get = id => {
    return http.get(`/tipo_mocion/${id}`);
};
const create = data => {
    return http.post("/tipo_mocion", data);
};
//no se si esto esta bien xd, lo cambie xd
const update = (id, data) => {
    return http.put(`/tipo_mocion/${id}`, data);
};
const remove = id => {
    return http.delete(`/tipo_mocion/${id}`);
};

const TipoMocionService = {
    getAll,
    get,
    create,
    update,
    remove
};
export default TipoMocionService;