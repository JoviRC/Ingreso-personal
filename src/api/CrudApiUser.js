import React, { useEffect, useState } from "react";
import { helpHttp } from "../Helpers/helpHttp";
import AddUserTable from "../Components/AddUser";
import { AdminPage } from "../Components/AdminPage";

const CrudApiUser = ({ admin }) => {
  const [db, setDb] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  console.log(db);

  return (
    <div>
      <AdminPage admin={admin} />
      <hr />
      <div>
        <table>
          {/* <tr>
            <th>Rut</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Cargo</th>
          </tr> */}
          {db.map((tab) => (
            <tr>
              <th>{tab.rut}</th>
              <th>{tab.lastName}</th>
              <th>{tab.name}</th>
              <th>{tab.jobTitule}</th>
            </tr>
          ))}
        </table>
      </div>

      {/* <article className="grid-1-2">
        <AddUserTable
          createUser={createUser}
          updateUser={updateUser}
          userToEdit={userToEdit}
          setUserToEdit={setUserToEdit}
        />
        {loading && <h3>Cargando</h3>}
        {error && (
          <h3>{error}</h3>
        )}
      </article> */}
    </div>
  );
};

export default CrudApiUser;
