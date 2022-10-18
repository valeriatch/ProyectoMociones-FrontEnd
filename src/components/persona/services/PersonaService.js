import http from "../../../http-common";
const getAll = () => {
 return http.get("/persona");
};
const get = id => {
 return http.get(`/persona/${id}`);
};
const create = data => {
 return http.post("/persona", data);
};
const remove = id => {
 return http.delete(`/persona/${id}`);
};
 
const PersonaService = {
 getAll,
 get,
 create,
 remove
};
export default PersonaService;