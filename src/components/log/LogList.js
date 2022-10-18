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
    <div className="LogList">
      <div className="col-md-6">
        <h4>Lista de logs</h4>
        <table>
          <thead>
          <tr>
            <td>Metodo</td>
            <td>descripcion</td>
            <td>Fecha</td>
          </tr>
          </thead>
          <tbody>
          {logs &&
            logs.map((log, index) => (
              <tr>

                <td>{log.metodo}</td>
                <td>{log.descripcion}</td>
                <td>{log.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LogList;
