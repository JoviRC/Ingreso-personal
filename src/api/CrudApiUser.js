import React, { useEffect, useState, createContext } from "react";
import { helpHttp } from "../Helpers/helpHttp";
import AddUser from "../Components/AddUser";
import { AdminPage } from "../Components/AdminPage";
import TablaUser from "../Components/TablaUser";

export const CrudUserContext = createContext({});

export const CrudApiUser = (props) => {
  const [db, setDb] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dbTable, setDbTable] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:5000/DataPersonal";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
          setDbTable(res);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createUser = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateUser = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteUser = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <CrudUserContext.Provider
      value={{ dbTable, createUser, updateUser, userToEdit, setUserToEdit,deleteUser }}
    >
      {props.children}
    </CrudUserContext.Provider>
  );
};
