import http from "../../../http-common";
const getAll = () => {
 return http.get("/Log");
};
const LogService = {
 getAll
};
export default LogService;
