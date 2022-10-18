import http from "../../../http-common";
const getAll = () => {
 return http.get("/persona");
};
const get = nombre => {
 return http.get(`/persona/${nombre}`);
};
const create = data => {
 return http.post("/persona", data);
};
const update = (id, data) => {
    return http.put(`/persona/edit`, data);
   };
const remove = id => {
 return http.delete(`/persona/${id}`);
};
 
const PersonaService = {
 getAll,
 get,
 create,
 update,
 remove
};
export default PersonaService;