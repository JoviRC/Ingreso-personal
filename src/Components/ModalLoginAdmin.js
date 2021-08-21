import React, { useState, useEffect, useContext } from "react";
import { CrudApiUser, CrudUserContext } from "../api/CrudApiUser";
import { TestAdminContext } from "../api/TestAdminApi";
import AddUser from "./AddUser";
import { AdminPage } from "./AdminPage";
import TablaUser from "./TablaUser";

export const ModalLoginAdmin = () => {
  const userAdmin = useContext(TestAdminContext);
  const [auth, setAuth] = useState(false);
  const [btnAddUser, setBtnAddUser] = useState(true);
  const [btnAdd, setBtnAdd] = useState("Agregar");

  const handleChange = (e) => {
    userAdmin.map((admin) =>
      admin.id === parseInt(e.target.value) ? setAuth(true) : false
    );
  };

  const handleButton = () => {
    setBtnAddUser(!btnAddUser);
    btnAddUser === true ? setBtnAdd("Cerrar") : setBtnAdd("Agregar");
  };



  if (auth) {
    return (
      <>
        <AdminPage admin={userAdmin} />
        <CrudApiUser>
          <button type="button" onClick={handleButton}>
            {btnAdd}
          </button>
          {btnAddUser === false ? <AddUser /> : <TablaUser />}
          
        </CrudApiUser>
      </>
    );
  } else {
    return (
      <form>
        <input
          type="text"
          name="id"
          placeholder="id"
          onChange={handleChange}
          autoComplete="off"
        />
      </form>
    );
  }
};
