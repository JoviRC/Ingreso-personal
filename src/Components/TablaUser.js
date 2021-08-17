import React, { useContext } from "react";
import { CrudUserContext } from "../api/CrudApiUser";

const TablaUser = () => {
  const {dbTable} = useContext(CrudUserContext);
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
          </tr>
        </thead>
        <tbody>
          {dbTable.map((tab, index) => (
            <tr key={index}>
              <td>{tab.rut}</td>
              <td>{tab.lastName}</td>
              <td>{tab.name}</td>
              <td>{tab.jobTitule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUser;
