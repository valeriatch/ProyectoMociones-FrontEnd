import React, { useState, useEffect } from "react";
import LogDataService from "./services/LogService";
const LogList = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    retrieveLog();
  }, []);

  const retrieveLog = () => {
    LogDataService.getAll()
      .then((response) => {
        setLogs(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista de logs</h4>
        <table>
          <tr>
            <td>Metodo</td>
            <td>descripcion</td>
            <td>Fecha</td>
          </tr>
          {logs &&
            logs.map((log, index) => (
              <tr>
                <td>{log.metodo}</td>
                <td>{log.fecha}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};
export default LogList;
