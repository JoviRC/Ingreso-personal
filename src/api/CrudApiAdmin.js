import React, { useEffect, useState, createContext } from "react";
import { helpHttp } from "../Helpers/helpHttp";

export const ApiAdminContext = createContext({});

export const CrudApiAdmin = (props) => {
  const [dbAdmin, setDbAdmin] = useState(null);
  const [adminToEdit, setAdminToEdit] = useState(null);
  const [error, setError] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:5000/AdminUser";

  useEffect(() => {
    // setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDbAdmin(res);
          setError(null);
        } else {
          setDbAdmin(null);
          setError(res);
        }
        // setLoading(false);
      });
  }, [url]);

  const createAdmin = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDbAdmin([...dbAdmin, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateAdmin = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = dbAdmin.map((el) => (el.id === data.id ? data : el));
        setDbAdmin(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteAdmin = (id) => {
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
          let newData = dbAdmin.filter((el) => el.id !== id);
          setDbAdmin(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <ApiAdminContext.Provider
      createAdmin={createAdmin}
      updateAdmin={updateAdmin}
      deleteAdmin={deleteAdmin}
      adminToEdit={adminToEdit}
      setAdminToEdit={setAdminToEdit}
    >
      {props.children}
    </ApiAdminContext.Provider>
  );
};
