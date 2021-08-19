import React, { useContext, useEffect, useState } from "react";
import { CrudUserContext } from "../api/CrudApiUser";

const TablaUser = () => {
  const { dbTable, deleteUser } = useContext(CrudUserContext);
  const [db, setDb] = useState([]);

  useEffect(() => {
    setDb(dbTable);
  }, [dbTable]);
  return (
    <div>
      <table
        style={{
          width: "100%",
          color: "black",
        }}
      >
        <thead>
          <tr>
            <th>Rut</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Cargo</th>
            <th>Ingreso</th>
            <th>Salida</th>
            <th>Dias</th>
          </tr>
        </thead>
        <tbody>
          {db.map((tab, index) => (
            <tr key={index}>
              <td>{tab.rut}</td>
              <td>{tab.lastName}</td>
              <td>{tab.name}</td>
              <td>{tab.jobTitule}</td>
              <td>{tab.checkInTime}</td>
              <td>{tab.closingHour}</td>
              <td>
                {Object.entries(tab.workDays).map((a, index) =>
                  a[1] === true ? (
                    <li key={index}>
                      {a[0].charAt(0).toUpperCase() + a[0].slice(1)}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </td>
              <td>
                <button>Editar</button>
                <button onClick={() => deleteUser(tab.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUser;
